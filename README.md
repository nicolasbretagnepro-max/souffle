# Souffle — méditation, 8 semaines

PWA statique de méditation inspirée du protocole **MBSR** (8 semaines). Aucun backend, aucune dépendance, aucun fichier audio : le gong est synthétisé via la Web Audio API, le guidage est textuel séquencé, les données sont en `localStorage`.

## Fonctionnalités

- **Programme 8 semaines** : une pratique centrale par semaine (souffle, scan corporel, respiration profonde, pensées, stress, émotions, sommeil, intégration), séances quotidiennes de 10 à 15 min, déblocage progressif jour par jour.
- **Player de séance** : texte séquencé avec fondu, gong d'ouverture/clôture, halo respirant, pause, barre de progression.
- **Routine** : streak, calendrier 56 jours, choix du créneau, focus du jour, humeur avant/après + journal.
- **Respiration** : cohérence cardiaque (5-5), 4-7-8 (sommeil), respiration carrée — avec halo animé de guidage.
- **SOS** : ancrage 5-4-3-2-1, pause de 3 minutes, sas avant le sommeil.
- **Guide** : routine, posture, erreurs fréquentes, physiologie du souffle, origine MBSR, pratique informelle.
- **PWA** : installable, fonctionne hors ligne (service worker cache-first).

## Déploiement sur GitHub Pages

```bash
git init
git add .
git commit -m "Souffle v1"
git branch -M main
git remote add origin https://github.com/VOTRE_USER/souffle.git
git push -u origin main
```

Puis : **Settings → Pages → Source : Deploy from a branch → main / (root)**.
L'app sera servie sur `https://VOTRE_USER.github.io/souffle/`.

> Tous les chemins sont relatifs (`./`) : l'app fonctionne en sous-dossier GitHub Pages sans configuration.

## Mise à jour du contenu

- **Séances / programme** : `js/data.js` → tableau `PROGRAM`. Chaque étape : `{t:"texte", d:secondes}` ; une étape sans `t` = silence guidé.
- **Respiration** : `BREATHING` (phases + cycles).
- **SOS** : `SOS`.
- **Guide** : `GUIDE` (HTML autorisé dans `body`).

Après toute modification : **incrémenter `CACHE` dans `sw.js`** (`souffle-v1` → `souffle-v2`), sinon les visiteurs garderont l'ancienne version en cache.

## Structure

```
souffle/
├── index.html
├── manifest.json
├── sw.js
├── css/styles.css
├── js/
│   ├── data.js     # tout le contenu du programme
│   ├── audio.js    # gong Web Audio
│   └── app.js      # router, état, players
└── icons/
```

## Note

Cette application est un outil d'entraînement au bien-être, pas un dispositif médical. Elle ne remplace pas un suivi médical ou psychologique.
