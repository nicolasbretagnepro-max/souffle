/* SOUFFLE — gong synthétisé (Web Audio API, aucun fichier audio requis) */
const Gong = (() => {
  let ctx = null;
  function ensure(){
    if(!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if(ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  /* Un gong = plusieurs partiels inharmoniques avec décroissance lente */
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
    }catch(e){ /* audio indisponible : silence */ }
  }
  return {
    start(){ strike(98, 0.4, 7); },               // gong grave d'ouverture
    end(){ strike(98, 0.4, 7); setTimeout(()=>strike(98, 0.3, 7), 2400); }, // double gong de clôture
    soft(){ strike(196, 0.18, 3.5); },            // ponctuation discrète
    unlock(){ ensure(); }                          // à appeler sur geste utilisateur (iOS)
  };
})();
