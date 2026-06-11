/* SOUFFLE — audio : gong synthétisé + guidage vocal (Web Speech API) */

/* ——— Gong ——— */
const Gong = (() => {
  let ctx = null;
  function ensure(){
    if(!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if(ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function strike(base = 110, gain = 0.5, dur = 6){
    try{
      const c = ensure();
      const now = c.currentTime;
      const master = c.createGain();
      master.gain.setValueAtTime(gain, now);
      master.connect(c.destination);
      const partials = [1, 1.52, 2.07, 2.74, 3.76, 4.4];
      partials.forEach((ratio, i) => {
        const o = c.createOscillator();
        const g = c.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(base * ratio, now);
        const amp = gain / Math.pow(2, i);
        g.gain.setValueAtTime(0.0001, now);
        g.gain.exponentialRampToValueAtTime(amp, now + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, now + dur - i * 0.4);
        o.connect(g); g.connect(master);
        o.start(now); o.stop(now + dur);
      });
    }catch(e){}
  }
  return {
    start(){ strike(98, 0.4, 7); },
    end(){ strike(98, 0.4, 7); setTimeout(()=>strike(98, 0.3, 7), 2400); },
    soft(){ strike(196, 0.18, 3.5); },
    unlock(){ ensure(); }
  };
})();

/* ——— Guidage vocal ——— */
const Voice = (() => {
  const STORE = 'souffle.voice';
  let _on = false;

  /* Chargement des voix — asynchrone sur iOS */
  let _voices = [];
  function _loadVoices(){
    _voices = ('speechSynthesis' in window) ? speechSynthesis.getVoices() : [];
  }
  _loadVoices();
  if('speechSynthesis' in window && 'onvoiceschanged' in speechSynthesis){
    speechSynthesis.onvoiceschanged = _loadVoices;
  }

  /* Sélection de la meilleure voix française féminine disponible */
  function _bestVoice(){
    const all = ('speechSynthesis' in window) ? speechSynthesis.getVoices() : [];
    /* Noms iOS courants en priorité */
    const priority = ['Amélie','Audrey','Marie','Virginie','Alice'];
    for(const n of priority){
      const v = all.find(v => v.name.includes(n));
      if(v) return v;
    }
    /* Fallback : n'importe quelle voix fr */
    return all.find(v => v.lang.startsWith('fr')) || null;
  }

  function speak(text){
    if(!_on || !text || !('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang    = 'fr-FR';
    u.rate    = 0.82;   /* rythme méditatif */
    u.pitch   = 1.05;
    u.volume  = 1.0;
    const v = _bestVoice();
    if(v) u.voice = v;
    speechSynthesis.speak(u);
  }

  function stop(){
    if('speechSynthesis' in window) speechSynthesis.cancel();
  }

  function init(){
    _on = localStorage.getItem(STORE) === '1';
  }

  function toggle(){
    _on = !_on;
    localStorage.setItem(STORE, _on ? '1' : '0');
    if(!_on) stop();
    return _on;
  }

  function supported(){
    return 'speechSynthesis' in window;
  }

  return { get on(){ return _on; }, init, toggle, speak, stop, supported };
})();
