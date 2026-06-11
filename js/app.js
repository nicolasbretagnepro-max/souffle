/* ——————————————————————————————————————
   SOUFFLE — application
—————————————————————————————————————— */
'use strict';

/* ——— État (localStorage) ——— */
const STORE_KEY = 'souffle.v1';
const State = {
  data: { done: {}, slot: null, startedAt: null, informalDone: {} },
  load(){
    try{
      const raw = localStorage.getItem(STORE_KEY);
      if(raw){
        const parsed = JSON.parse(raw);
        this.data = Object.assign(this.data, parsed);
        if(!this.data.informalDone) this.data.informalDone = {};
      }
    }catch(e){}
  },
  save(){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(this.data)); }catch(e){} },
  completeDay(idx, before, after, note){
    this.data.done[idx] = { date: todayISO(), before, after, note: note || '' };
    if(!this.data.startedAt) this.data.startedAt = todayISO();
    this.save();
  }
};

function todayISO(){ return new Date().toISOString().slice(0,10); }
function currentDay(){
  for(let i = 0; i < 56; i++) if(!State.data.done[i]) return i;
  return 56;
}
function alreadyDoneToday(){
  return Object.values(State.data.done).some(e => e.date === todayISO());
}
function streak(){
  const dates = new Set(Object.values(State.data.done).map(e => e.date));
  if(dates.size === 0) return 0;
  let count = 0;
  const d = new Date();
  if(!dates.has(d.toISOString().slice(0,10))) d.setDate(d.getDate() - 1);
  while(dates.has(d.toISOString().slice(0,10))){
    count++; d.setDate(d.getDate() - 1);
  }
  return count;
}
function fmtTime(s){
  const m = Math.floor(s/60), r = s%60;
  return `${m}:${String(r).padStart(2,'0')}`;
}
function scriptDuration(script){ return script.reduce((a,s)=>a+s.d,0); }
function esc(s){ const d=document.createElement('div'); d.textContent=s; return d.innerHTML; }

/* ——— Router ——— */
const view = document.getElementById('view');
const routes = {};
function route(path, fn){ routes[path] = fn; }
function navigate(){
  stopEngines();
  const hash = location.hash.replace('#','') || '/accueil';
  const parts = hash.split('/').filter(Boolean);
  const base = '/' + (parts[0] || 'accueil');
  const param = parts[1];
  (routes[base] || routes['/accueil'])(param);
  document.querySelectorAll('.tabbar a').forEach(a => {
    const tab = a.dataset.tab;
    const activeMap = {
      '/accueil':'accueil','/programme':'programme','/semaine':'programme',
      '/seance':'accueil','/seance-courte':'accueil',
      '/respiration':'respiration','/breath':'respiration',
      '/sos':'sos','/guide':'guide','/journal':'accueil'
    };
    a.classList.toggle('active', activeMap[base] === tab);
  });
  window.scrollTo(0,0);
}
window.addEventListener('hashchange', navigate);

/* ——— Moteurs actifs ——— */
let timers = [];
function later(fn, ms){ timers.push(setTimeout(fn, ms)); }
function every(fn, ms){ timers.push(setInterval(fn, ms)); }
function stopEngines(){ timers.forEach(t => { clearTimeout(t); clearInterval(t); }); timers = []; }

/* ═══════════════ ACCUEIL ═══════════════ */
route('/accueil', () => {
  const day = currentDay();
  const finished = day >= 56;
  const week = Math.min(Math.floor(day/7), 7);
  const w = PROGRAM[week];
  const doneToday = alreadyDoneToday();
  const nb = Object.keys(State.data.done).length;
  const informalText = INFORMAL_BY_WEEK[week][day % 7];
  const informalDone = !!(State.data.informalDone && State.data.informalDone[todayISO()]);

  let hero;
  if(finished){
    hero = `
      <div class="halo-wrap"><div class="halo idle"><div class="halo-label">Programme<br>terminé</div></div></div>
      <h1 style="text-align:center">Huit semaines accomplies</h1>
      <p class="muted" style="text-align:center;margin-top:10px">La pratique continue : rejouez n'importe quelle semaine depuis le programme, ou installez votre format de croisière avec la respiration quotidienne.</p>`;
  } else {
    hero = `
      <div class="halo-wrap">
        <div class="halo idle"><div class="halo-label">Jour ${day+1}<br><span class="small muted">Semaine ${week+1} · ${esc(w.theme)}</span></div></div>
        ${doneToday
          ? `<span class="tag sage">Séance du jour accomplie ✓</span>`
          : `<div style="display:flex;flex-direction:column;align-items:center;gap:10px">
               <a class="btn" href="#/seance" onclick="Gong.unlock()">Commencer · ${w.minutes} min</a>
               <a href="#/seance-courte" onclick="Gong.unlock()" style="font-size:.85rem;color:var(--muted);text-decoration:underline;cursor:pointer">Version courte · 5 min</a>
             </div>`}
      </div>
      <div class="card">
        <p class="eyebrow">Focus du jour</p>
        <p>${esc(DAILY_FOCUS[day % 7])}</p>
      </div>
      <div class="card" style="margin-top:14px">
        <p class="eyebrow" style="color:var(--sage)">Pratique informelle</p>
        <p style="margin-bottom:14px">${esc(informalText)}</p>
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer">
          <input type="checkbox" id="informal-check" ${informalDone?'checked':''} style="width:20px;height:20px;accent-color:var(--flame);cursor:pointer;flex-shrink:0">
          <span style="font-size:.85rem;color:var(--muted)">Fait aujourd'hui</span>
        </label>
      </div>`;
  }

  view.innerHTML = `
    ${hero}
    <div class="stats">
      <div class="stat"><b>${streak()}</b><span>jours d'affilée</span></div>
      <div class="stat"><b>${nb}<span class="muted" style="font-size:1rem">/56</span></b><span>séances</span></div>
      <div class="stat"><b>${Math.min(week+1,8)}</b><span>semaine</span></div>
    </div>
    <div class="section">
      <h3>Votre parcours</h3>
      <div class="cal">${Array.from({length:56},(_,i)=>{
        const cls = State.data.done[i] ? 'done' : (i===day && !finished ? 'today' : '');
        return `<div class="d ${cls}">${i+1}</div>`;
      }).join('')}</div>
    </div>
    <div class="section">
      <h3>Votre créneau</h3>
      <p class="muted small">Même heure chaque jour : c'est la décision qui rend toutes les autres inutiles.</p>
      <div class="mood-row" style="justify-content:flex-start">
        ${['Matin','Midi','Soir'].map(s=>`
          <button style="width:auto;height:auto;border-radius:99px;padding:8px 20px;font-size:.9rem"
            class="${State.data.slot===s?'sel':''}" data-slot="${s}">${s}</button>`).join('')}
      </div>
    </div>
    <div class="section">
      <a class="card card-row" href="#/journal"><span>Journal de pratique</span><span class="muted">→</span></a>
    </div>`;

  const infCb = document.getElementById('informal-check');
  if(infCb) infCb.addEventListener('change', () => {
    if(!State.data.informalDone) State.data.informalDone = {};
    if(infCb.checked) State.data.informalDone[todayISO()] = true;
    else delete State.data.informalDone[todayISO()];
    State.save();
  });

  view.querySelectorAll('[data-slot]').forEach(b => b.addEventListener('click', () => {
    State.data.slot = b.dataset.slot; State.save(); navigate();
  }));
});

/* ═══════════════ PROGRAMME ═══════════════ */
route('/programme', () => {
  const day = currentDay();
  const curWeek = Math.min(Math.floor(day/7), 7);
  view.innerHTML = `
    <p class="eyebrow">Programme</p>
    <h1>Huit semaines</h1>
    <p class="muted" style="margin-top:8px">Une pratique centrale par semaine, répétée chaque jour — la répétition est la méthode, pas un manque de variété. Inspiré du protocole MBSR.</p>
    ${PROGRAM.map((w,i)=>{
      const doneCount = Array.from({length:7},(_,d)=>State.data.done[i*7+d]).filter(Boolean).length;
      const locked = i > curWeek;
      const done = doneCount === 7;
      return `<a class="card card-row ${locked?'locked':''} ${done?'done':''}" href="${locked?'#/programme':'#/semaine/'+i}">
        <div>
          <p class="meta">Semaine ${i+1} · ${w.minutes} min/jour</p>
          <h3>${esc(w.theme)}</h3>
          <p class="muted small">${esc(w.subtitle)}</p>
        </div>
        <span class="tag ${done?'sage':(i===curWeek?'flame':'')}">${done?'✓':(locked?'🔒':doneCount+'/7')}</span>
      </a>`;
    }).join('')}`;
});

route('/semaine', (i) => {
  const wi = parseInt(i,10);
  const w = PROGRAM[wi];
  if(!w){ location.hash = '#/programme'; return; }
  const day = currentDay();
  const curWeek = Math.floor(day/7);
  const isCurrent = wi === curWeek && day < 56;
  view.innerHTML = `
    <a class="back" href="#/programme">← Programme</a>
    <p class="eyebrow">Semaine ${wi+1} · ${w.minutes} minutes par jour</p>
    <h1>${esc(w.theme)}</h1>
    <div class="article"><p>${esc(w.intro)}</p></div>
    <div class="card"><p class="eyebrow">Conseil de la semaine</p><p>${esc(w.tip)}</p></div>
    <div class="section">
      <h3>Les sept jours</h3>
      <div class="cal" style="grid-template-columns:repeat(7,1fr)">
        ${Array.from({length:7},(_,d)=>{
          const idx = wi*7+d;
          const cls = State.data.done[idx] ? 'done' : (idx===day?'today':'');
          return `<div class="d ${cls}">${d+1}</div>`;
        }).join('')}
      </div>
    </div>
    ${isCurrent && !alreadyDoneToday()
      ? `<div class="section">
           <a class="btn block" href="#/seance" onclick="Gong.unlock()">Commencer la séance du jour</a>
           <div style="text-align:center;margin-top:10px">
             <a href="#/seance-courte" onclick="Gong.unlock()" style="font-size:.85rem;color:var(--muted);text-decoration:underline;cursor:pointer">Version courte · 5 min</a>
           </div>
         </div>`
      : ''}
    ${!isCurrent && wi < curWeek
      ? `<div class="section"><button class="btn ghost block" id="replay">Rejouer cette séance (hors programme)</button></div>` : ''}`;
  const rp = document.getElementById('replay');
  if(rp) rp.addEventListener('click', () => { Gong.unlock(); startPlayer(w.script, w.theme, null); });
});

/* ═══════════════ SÉANCE DU JOUR ═══════════════ */
route('/seance', () => {
  const day = currentDay();
  if(day >= 56){ location.hash = '#/accueil'; return; }
  const w = PROGRAM[Math.floor(day/7)];
  view.innerHTML = `
    <a class="back" href="#/accueil">← Annuler</a>
    <div style="text-align:center;margin-top:8vh">
      <p class="eyebrow">Jour ${day+1} · ${esc(w.theme)} · ${w.minutes} min</p>
      <h1>Avant de commencer</h1>
      <p class="muted" style="margin-top:10px">Comment vous sentez-vous, là, maintenant ?</p>
      <div class="mood-row" id="moods">
        ${['😣','😕','😐','🙂','😌'].map((m,i)=>`<button data-v="${i+1}">${m}</button>`).join('')}
      </div>
      <p class="muted small">Casque ou pièce calme conseillés. Le gong marque le début et la fin.</p>
    </div>`;
  view.querySelectorAll('#moods button').forEach(b => b.addEventListener('click', () => {
    Gong.unlock();
    startPlayer(w.script, w.theme, {
      day, before: parseInt(b.dataset.v,10), prompt: w.journalPrompt, deepDive: w.deepDive, isShort: false
    });
  }));
});

/* ═══════════════ SÉANCE COURTE ═══════════════ */
route('/seance-courte', () => {
  const day = currentDay();
  if(day >= 56){ location.hash = '#/accueil'; return; }
  const w = PROGRAM[Math.floor(day/7)];
  view.innerHTML = `
    <a class="back" href="#/accueil">← Annuler</a>
    <div style="text-align:center;margin-top:8vh">
      <p class="eyebrow">Jour ${day+1} · ${esc(w.theme)} · 5 min</p>
      <h1>Version courte</h1>
      <p class="muted" style="margin-top:10px">L'essentiel en 5 minutes.<br>Mieux vaut une courte pratique que pas de pratique.</p>
      <p class="muted small" style="margin-top:16px">Comment vous sentez-vous, là, maintenant ?</p>
      <div class="mood-row" id="moods">
        ${['😣','😕','😐','🙂','😌'].map((m,i)=>`<button data-v="${i+1}">${m}</button>`).join('')}
      </div>
    </div>`;
  view.querySelectorAll('#moods button').forEach(b => b.addEventListener('click', () => {
    Gong.unlock();
    startPlayer(w.shortScript, w.theme, {
      day, before: parseInt(b.dataset.v,10), prompt: w.journalPrompt, deepDive: w.deepDive, isShort: true
    });
  }));
});

/* ——— Player générique (séances + SOS) ——— */
function startPlayer(script, title, journalCtx){
  stopEngines();
  const total = scriptDuration(script);
  let elapsed = 0, stepIdx = -1, stepElapsed = 0, paused = false;

  view.innerHTML = `
    <div class="player">
      <p class="eyebrow">${esc(title)}</p>
      <div class="halo idle" id="phalo"><div class="halo-label" id="phaloLabel"></div></div>
      <div class="step-text" id="stepText"></div>
      <div class="progress"><i id="pbar"></i></div>
      <div class="time" id="ptime">${fmtTime(total)}</div>
      <div class="controls">
        <button class="btn ghost" id="ppause">Pause</button>
        <button class="btn ghost" id="pstop">Arrêter</button>
      </div>
    </div>`;

  const elText = document.getElementById('stepText');
  const elBar = document.getElementById('pbar');
  const elTime = document.getElementById('ptime');

  Gong.start();

  function showStep(i){
    const s = script[i];
    elText.classList.add('fade');
    later(() => {
      elText.innerHTML = s.t ? esc(s.t) : `<span class="silence-dots">· · ·</span>`;
      elText.classList.remove('fade');
      if(!s.t) Gong.soft();
    }, 600);
  }

  function tick(){
    if(paused) return;
    if(stepIdx === -1 || stepElapsed >= script[stepIdx].d){
      stepIdx++; stepElapsed = 0;
      if(stepIdx >= script.length){ finish(); return; }
      showStep(stepIdx);
    }
    stepElapsed++; elapsed++;
    elBar.style.width = (elapsed/total*100) + '%';
    elTime.textContent = fmtTime(Math.max(total - elapsed, 0));
  }
  every(tick, 1000);
  tick();

  document.getElementById('ppause').addEventListener('click', e => {
    paused = !paused;
    e.target.textContent = paused ? 'Reprendre' : 'Pause';
    document.getElementById('phalo').classList.toggle('idle', !paused);
  });
  document.getElementById('pstop').addEventListener('click', () => {
    stopEngines();
    location.hash = journalCtx ? '#/accueil' : '#/sos';
  });

  function finish(){
    stopEngines();
    Gong.end();
    if(journalCtx){ showJournal(journalCtx); }
    else {
      view.innerHTML = `
        <div class="player">
          <div class="halo idle"><div class="halo-label">Terminé</div></div>
          <h2>Reprenez votre journée</h2>
          <a class="btn ghost" href="#/accueil" style="margin-top:20px">Retour à l'accueil</a>
        </div>`;
    }
  }
}

/* ——— Journal de fin de séance ——— */
function showJournal(ctx){
  view.innerHTML = `
    <div style="text-align:center;margin-top:6vh">
      <p class="eyebrow">${ctx.isShort ? 'Version courte · 5 min' : 'Séance terminée'}</p>
      <h1>Et maintenant ?</h1>
      <p class="muted" style="margin-top:10px">Comment vous sentez-vous après la séance ?</p>
      <div class="mood-row" id="moodsAfter">
        ${['😣','😕','😐','🙂','😌'].map((m,i)=>`<button data-v="${i+1}">${m}</button>`).join('')}
      </div>
      <div style="text-align:left;margin-top:24px">
        <p class="small muted" style="margin-bottom:8px">${esc(ctx.prompt)}</p>
        <textarea id="jnote" placeholder="Quelques mots suffisent (facultatif)…"></textarea>
      </div>
      <button class="btn block" id="jsave" style="margin-top:18px" disabled>Valider le jour ${ctx.day+1}</button>
    </div>`;
  let after = null;
  view.querySelectorAll('#moodsAfter button').forEach(b => b.addEventListener('click', () => {
    view.querySelectorAll('#moodsAfter button').forEach(x => x.classList.remove('sel'));
    b.classList.add('sel');
    after = parseInt(b.dataset.v,10);
    document.getElementById('jsave').disabled = false;
  }));
  document.getElementById('jsave').addEventListener('click', () => {
    State.completeDay(ctx.day, ctx.before, after, document.getElementById('jnote').value.trim());
    if(ctx.deepDive){
      showDeepDive(ctx.deepDive, ctx.isShort);
    } else {
      location.hash = '#/accueil';
      navigate();
    }
  });
}

/* ——— Écran "Pour aller plus loin" ——— */
function showDeepDive(deepDive, isShort){
  view.innerHTML = `
    <div style="text-align:center;margin-top:6vh">
      ${isShort
        ? `<p class="eyebrow" style="color:var(--sage)">Pratique partielle</p>
           <h1>C'est toujours mieux que rien</h1>
           <p class="muted" style="margin-top:8px;margin-bottom:24px">Cinq minutes de présence valent mieux que zéro.<br>Le jour est validé.</p>`
        : `<p class="eyebrow" style="color:var(--sage)">Séance accomplie</p>
           <h1>Bien joué</h1>
           <p class="muted" style="margin-top:8px;margin-bottom:24px">Pendant que les effets s'installent,<br>une idée pour aller plus loin.</p>`}
      <div class="card" style="text-align:left">
        <p class="eyebrow">Pour aller plus loin</p>
        <h3 style="margin-bottom:10px">${esc(deepDive.headline)}</h3>
        <p class="muted small" style="line-height:1.65">${esc(deepDive.insight)}</p>
        <a href="#/guide/${deepDive.guideId}" style="display:inline-block;margin-top:16px;font-size:.85rem;color:var(--flame);text-decoration:underline">Lire l'article complet →</a>
      </div>
      <a class="btn ghost block" href="#/accueil" style="margin-top:20px">Retour à l'accueil</a>
    </div>`;
}

/* ═══════════════ JOURNAL ═══════════════ */
route('/journal', () => {
  const entries = Object.entries(State.data.done)
    .map(([i,e]) => ({ i: parseInt(i,10), ...e }))
    .sort((a,b) => b.i - a.i);
  const moods = ['','😣','😕','😐','🙂','😌'];
  view.innerHTML = `
    <a class="back" href="#/accueil">← Accueil</a>
    <p class="eyebrow">Journal</p>
    <h1>Votre pratique</h1>
    ${entries.length === 0 ? `<p class="muted" style="margin-top:14px">Le journal se remplit à chaque séance terminée. Il vous montrera, semaine après semaine, l'effet de la pratique sur votre état.</p>` : ''}
    ${entries.map(e => `
      <div class="card">
        <p class="meta">Jour ${e.i+1} · Semaine ${Math.floor(e.i/7)+1} · ${e.date}</p>
        <p style="margin-top:6px">${moods[e.before] || ''} → ${moods[e.after] || ''}</p>
        ${e.note ? `<p class="muted small" style="margin-top:6px">« ${esc(e.note)} »</p>` : ''}
      </div>`).join('')}`;
});

/* ═══════════════ RESPIRATION ═══════════════ */
route('/respiration', () => {
  view.innerHTML = `
    <p class="eyebrow">Respiration</p>
    <h1>Le souffle comme outil</h1>
    <p class="muted" style="margin-top:8px">Trois techniques, trois usages. Le principe commun : une expiration longue active la détente. <a href="#/guide/souffle" style="text-decoration:underline">Comprendre pourquoi →</a></p>
    ${BREATHING.map(t => `
      <a class="card" href="#/breath/${t.id}">
        <p class="meta">${esc(t.use)}</p>
        <h3>${esc(t.name)}</h3>
        <p class="muted small" style="margin-top:6px">${esc(t.desc)}</p>
      </a>`).join('')}`;
});

route('/breath', (id) => {
  const t = BREATHING.find(x => x.id === id);
  if(!t){ location.hash = '#/respiration'; return; }
  view.innerHTML = `
    <a class="back" href="#/respiration">← Respiration</a>
    <div class="player" style="min-height:60dvh">
      <p class="eyebrow">${esc(t.name)}</p>
      <div class="halo breath" id="bhalo"><div class="halo-label" id="bcount"></div></div>
      <p class="phase-label" id="bphase">Prêt ?</p>
      <p class="muted small" id="bcycles">${t.cycles} cycles · ${Math.round(t.cycles * t.phases.reduce((a,p)=>a+p.d,0)/60)} min</p>
      <div class="controls">
        <button class="btn" id="bstart">Commencer</button>
        <button class="btn ghost" id="bstop" style="display:none">Arrêter</button>
      </div>
    </div>`;

  const halo = document.getElementById('bhalo');
  const phaseEl = document.getElementById('bphase');
  const countEl = document.getElementById('bcount');
  const cyclesEl = document.getElementById('bcycles');

  document.getElementById('bstart').addEventListener('click', function(){
    Gong.unlock(); Gong.soft();
    this.style.display = 'none';
    document.getElementById('bstop').style.display = '';
    runBreathing(t);
  });
  document.getElementById('bstop').addEventListener('click', () => { stopEngines(); navigate(); });

  function runBreathing(t){
    let cycle = 0, phaseIdx = 0, remain = t.phases[0].d;
    applyPhase(t.phases[0]);
    every(() => {
      countEl.textContent = remain;
      remain--;
      if(remain < 0){
        phaseIdx++;
        if(phaseIdx >= t.phases.length){
          phaseIdx = 0; cycle++;
          if(cycle >= t.cycles){ finishBreathing(); return; }
        }
        remain = t.phases[phaseIdx].d - 1;
        applyPhase(t.phases[phaseIdx]);
        countEl.textContent = remain + 1;
      }
      cyclesEl.textContent = `Cycle ${cycle+1} / ${t.cycles}`;
    }, 1000);
    countEl.textContent = remain;
  }
  function applyPhase(p){
    phaseEl.textContent = p.label;
    halo.style.setProperty('--phase-d', p.d + 's');
    halo.classList.remove('inhale','exhale','hold');
    if(p.type !== 'hold') halo.classList.add(p.type);
  }
  function finishBreathing(){
    stopEngines();
    Gong.end();
    phaseEl.textContent = 'Terminé';
    countEl.textContent = '✓';
    halo.classList.remove('inhale','exhale');
    document.getElementById('bstop').textContent = 'Retour';
  }
});

/* ═══════════════ SOS ═══════════════ */
routes['/sos'] = (id) => {
  if(!id){
    view.innerHTML = `
      <p class="eyebrow">SOS</p>
      <h1>Maintenant, tout de suite</h1>
      <p class="muted" style="margin-top:8px">Des séances courtes pour les moments aigus : stress qui monte, esprit qui s'emballe, sommeil qui ne vient pas. Utilisables n'importe où, sans préparation.</p>
      ${SOS.map(s => `
        <a class="card card-row" href="#/sos/${s.id}">
          <div><p class="meta">${esc(s.use)}</p><h3>${esc(s.name)}</h3></div>
          <span class="muted">→</span>
        </a>`).join('')}`;
    return;
  }
  const s = SOS.find(x => x.id === id);
  if(!s){ location.hash = '#/sos'; return; }
  Gong.unlock();
  startPlayer(s.script, s.name, null);
};

/* ═══════════════ GUIDE ═══════════════ */
route('/guide', (id) => {
  if(id){
    const a = GUIDE.find(x => x.id === id);
    if(!a){ location.hash = '#/guide'; return; }
    view.innerHTML = `
      <a class="back" href="#/guide">← Guide</a>
      <p class="eyebrow">Bonnes pratiques</p>
      <h1>${esc(a.title)}</h1>
      <div class="article">${a.body.map(p => `<p>${p}</p>`).join('')}</div>`;
    return;
  }
  view.innerHTML = `
    <p class="eyebrow">Guide</p>
    <h1>Bien pratiquer</h1>
    <p class="muted" style="margin-top:8px">L'essentiel pour pratiquer juste : la posture, la routine, les pièges, et ce que dit la physiologie du souffle.</p>
    ${GUIDE.map(a => `
      <a class="card" href="#/guide/${a.id}">
        <h3>${esc(a.title)}</h3>
        <p class="muted small" style="margin-top:4px">${esc(a.teaser)}</p>
      </a>`).join('')}`;
});

/* ——— Démarrage ——— */
State.load();
navigate();
