/* ——————————————————————————————————————
   SOUFFLE — contenu du programme
   8 semaines inspirées du protocole MBSR
   (Mindfulness-Based Stress Reduction)
—————————————————————————————————————— */

const PROGRAM = [
{
  theme:"Le souffle",
  subtitle:"Poser les fondations",
  minutes:10,
  intro:"Tout commence par le souffle. Cette semaine, vous apprenez le geste de base de toute méditation : porter l'attention sur la respiration, remarquer qu'elle s'échappe, la ramener. Ce n'est pas « faire le vide » — c'est entraîner l'attention, comme un muscle.",
  tip:"L'esprit qui s'échappe n'est pas un échec : c'est l'occasion de s'entraîner. Chaque retour au souffle compte comme une répétition.",
  journalPrompt:"Combien de fois environ votre esprit s'est-il échappé ? Qu'avez-vous remarqué au moment de revenir ?",
  deepDive:{
    guideId:"souffle",
    headline:"Pourquoi le souffle agit sur l'esprit",
    insight:"La respiration est la seule fonction vitale à la fois automatique et contrôlable. En posant l'attention sur elle, vous activez un levier direct sur le système nerveux — le même mécanisme qu'une longue expiration utilise pour ralentir le rythme cardiaque."
  },
  shortScript:[
    {t:"Installez-vous, dos droit. Fermez les yeux ou posez le regard au sol.",d:25},
    {t:"Trois grandes respirations, puis laissez le souffle revenir à son rythme naturel.",d:35},
    {t:"Portez l'attention sur les sensations du souffle : l'air frais aux narines, le ventre qui se soulève.",d:40},
    {d:60},
    {t:"Quand l'esprit s'échappe, ramenez-le doucement — sans reproche. Chaque retour est l'exercice.",d:40},
    {d:75},
    {t:"Respirez plus amplement. Bougez doucement. Ouvrez les yeux.",d:25}
  ],
  scriptOral:[
    {t:"Installez-vous confortablement. Le dos droit, sans rigidité. Fermez les yeux.",d:35},
    {t:"Prenez trois grandes respirations. Inspirez lentement par le nez. Et soufflez longuement.",d:35},
    {t:"Laissez maintenant le souffle revenir à son rythme naturel. Vous n'avez rien à modifier, rien à réussir.",d:35},
    {t:"Portez l'attention sur les sensations du souffle. L'air frais aux narines. Le ventre qui se soulève. Qui redescend.",d:45},
    {d:60},
    {t:"Votre esprit va s'échapper, vers une pensée, un son, un projet. C'est normal. Quand vous le remarquez, revenez doucement au souffle.",d:45},
    {d:90},
    {t:"Chaque retour au souffle est une répétition. C'est l'exercice lui-même, pas une erreur.",d:30},
    {d:90},
    {t:"Élargissez l'attention. Le souffle. Le corps entier ici. Les sons autour de vous.",d:40},
    {d:60},
    {t:"Prenez une respiration plus ample. Bougez doucement. Ouvrez les yeux.",d:35}
  ],
  script:[
    {t:"Installez-vous confortablement. Le dos droit, mais sans rigidité — digne et détendu à la fois. Fermez les yeux, ou posez le regard au sol devant vous.",d:40},
    {t:"Prenez trois grandes respirations. Inspirez par le nez… expirez longuement par la bouche, comme un soupir.",d:30},
    {t:"Laissez maintenant la respiration revenir à son rythme naturel. Vous n'avez rien à modifier, rien à réussir.",d:35},
    {t:"Portez l'attention sur les sensations du souffle : l'air frais qui entre par les narines, le ventre qui se soulève, qui s'abaisse.",d:45},
    {d:60},
    {t:"Votre esprit va s'échapper — vers une pensée, un son, un projet. C'est normal : c'est ce que font les esprits. Quand vous le remarquez, ramenez doucement l'attention au souffle.",d:40},
    {d:90},
    {t:"Chaque retour au souffle est une répétition. C'est l'exercice lui-même, pas une erreur.",d:30},
    {d:90},
    {t:"Élargissez maintenant l'attention : le souffle, le corps entier assis ici, les sons autour de vous.",d:40},
    {d:60},
    {t:"Prenez une respiration plus ample. Bougez doucement les doigts, les épaules. Ouvrez les yeux à votre rythme.",d:30}
  ]
},
{
  theme:"Le corps",
  subtitle:"Le scan corporel",
  minutes:12,
  intro:"Le corps est le premier ancrage de l'attention — il est toujours là, toujours au présent. Le scan corporel consiste à parcourir le corps zone par zone, en observant les sensations sans chercher à les changer. C'est la pratique centrale des premières semaines du MBSR : elle développe la finesse de perception et relâche des tensions que vous ne saviez même pas porter.",
  tip:"Ne cherchez pas à « ressentir quelque chose ». Ne rien sentir dans une zone est une observation valable. L'objectif est l'attention, pas la sensation.",
  journalPrompt:"Quelle zone du corps portait une tension dont vous n'aviez pas conscience ?",
  deepDive:{
    guideId:"posture",
    headline:"Le corps comme ancrage : pourquoi ça marche",
    insight:"Le corps est toujours au présent — contrairement à l'esprit qui vogue entre passé et futur. Diriger l'attention sur les sensations physiques, c'est utiliser le corps comme une ancre réelle, pas métaphorique. Les neurosciences appellent cela l'interoception : la conscience du corps de l'intérieur."
  },
  shortScript:[
    {t:"Installez-vous, assis ou allongé. Laissez le corps se déposer, soutenu.",d:25},
    {t:"Portez l'attention sur les pieds et les jambes : poids, appui, chaleur.",d:35},
    {d:45},
    {t:"La poitrine, les épaules. Si vous repérez une tension, respirez « vers » elle.",d:40},
    {d:45},
    {t:"Le visage : front, mâchoire. Relâchez. Le corps entier, vivant et respirant.",d:35},
    {d:45},
    {t:"Étirez-vous si vous en avez besoin. Ouvrez les yeux.",d:20}
  ],
  scriptOral:[
    {t:"Installez-vous, assis ou allongé. Laissez le corps se déposer. Lourd. Soutenu.",d:35},
    {t:"Trois respirations profondes pour marquer le début.",d:30},
    {t:"Portez l'attention sur les pieds. Les orteils. La plante. Le contact avec le sol. Chaleur, fourmillement, ou rien du tout.",d:50},
    {d:40},
    {t:"Remontez vers les jambes. Les mollets. Les genoux. Les cuisses. Sentez leur poids.",d:40},
    {d:40},
    {t:"Le bassin. Le ventre. Observez le mouvement de la respiration, comme une vague lente.",d:40},
    {d:40},
    {t:"La poitrine. Le dos. Les épaules. Si vous repérez une tension, respirez vers elle.",d:40},
    {d:45},
    {t:"Les bras. Les coudes. Les mains. Jusqu'au bout des doigts.",d:35},
    {d:40},
    {t:"Le cou. La mâchoire. Relâchez. Le front. Les yeux reposent.",d:35},
    {d:40},
    {t:"Percevez maintenant le corps comme un tout. Vivant. Respirant.",d:35},
    {d:50},
    {t:"Reprenez contact avec la pièce. Ouvrez les yeux à votre rythme.",d:30}
  ],
  script:[
    {t:"Installez-vous, assis ou allongé. Laissez le corps se déposer, lourd, soutenu par le sol.",d:40},
    {t:"Trois respirations profondes pour marquer le début de la séance.",d:30},
    {t:"Portez l'attention sur vos pieds. Les orteils, la plante, le contact avec le sol. Observez sans juger : chaleur, fourmillement… ou rien du tout.",d:50},
    {d:40},
    {t:"Remontez vers les jambes : les mollets, les genoux, les cuisses. Sentez leur poids, leur appui.",d:45},
    {d:40},
    {t:"Le bassin, puis le ventre. Observez le mouvement de la respiration dans cette zone, comme une vague lente.",d:45},
    {d:40},
    {t:"La poitrine, le dos, les épaules. Si vous repérez une tension, ne forcez rien : posez simplement l'attention dessus, et respirez « vers » elle.",d:50},
    {d:45},
    {t:"Les bras, les coudes, les mains, jusqu'au bout des doigts.",d:40},
    {d:40},
    {t:"Le cou, la mâchoire, le visage. Relâchez le front. Desserrez les dents. Laissez les yeux reposer dans leurs orbites.",d:45},
    {d:40},
    {t:"Percevez maintenant le corps comme un tout : assis ou allongé, vivant, respirant.",d:40},
    {d:50},
    {t:"Reprenez contact avec la pièce. Étirez-vous si vous en avez besoin. Ouvrez les yeux.",d:30}
  ]
},
{
  theme:"La respiration profonde",
  subtitle:"Le souffle comme outil",
  minutes:12,
  intro:"Cette semaine, vous passez de l'observation du souffle à son utilisation. La physiologie est simple : une expiration plus longue que l'inspiration stimule le nerf vague et active le système nerveux parasympathique — celui du repos et de la récupération. C'est le levier le plus direct dont vous disposez pour calmer le corps, et par lui, l'esprit.",
  tip:"La respiration calme vient du ventre, pas de la poitrine. Posez une main sur le ventre : c'est elle qui doit bouger en premier.",
  journalPrompt:"Avez-vous senti une différence entre le début et la fin de la séance ? Laquelle, concrètement ?",
  deepDive:{
    guideId:"souffle",
    headline:"Le nerf vague : votre frein biologique au stress",
    insight:"À chaque expiration, le nerf vague envoie un signal au cœur pour ralentir. C'est pourquoi allonger l'expiration — même de quelques secondes — produit un effet mesurable sur le rythme cardiaque et l'état nerveux. Ce mécanisme est disponible n'importe où, à n'importe quel moment."
  },
  shortScript:[
    {t:"Installez-vous. Posez une main sur le ventre.",d:20},
    {t:"Inspirez en gonflant doucement le ventre, expirez en le laissant redescendre.",d:35},
    {d:45},
    {t:"Allongez l'expiration : inspirez sur 4 temps, expirez sur 6. Sans forcer.",d:40},
    {d:90},
    {t:"Ce geste — l'expiration longue — est disponible à tout moment, partout.",d:30},
    {t:"Laissez la respiration retrouver son rythme. Bougez, ouvrez les yeux.",d:25}
  ],
  scriptOral:[
    {t:"Installez-vous, le dos droit. Posez une main sur le ventre, l'autre sur la poitrine.",d:30},
    {t:"Observez votre respiration telle qu'elle est. Quelle main bouge le plus ?",d:40},
    {d:30},
    {t:"Inspirez par le nez en gonflant doucement le ventre. La main du bas se soulève. Celle du haut, à peine.",d:45},
    {t:"Expirez lentement. Le ventre redescend. Continuez à ce rythme.",d:35},
    {d:60},
    {t:"Allongez maintenant l'expiration. Inspirez sur quatre temps. Expirez sur six. Le souffle sort fin, régulier.",d:50},
    {d:90},
    {t:"Si compter vous crispe, laissez les chiffres. Gardez simplement une expiration plus longue que l'inspiration.",d:35},
    {d:90},
    {t:"Remarquez l'effet dans le corps. Les épaules. La mâchoire. Le rythme du coeur.",d:40},
    {d:60},
    {t:"Laissez la respiration retrouver son rythme naturel. Restez avec cette sensation.",d:35},
    {d:40},
    {t:"Bougez doucement. Ouvrez les yeux. Cette expiration longue est désormais disponible à tout moment.",d:35}
  ],
  script:[
    {t:"Installez-vous, le dos droit. Posez une main sur le ventre, l'autre sur la poitrine.",d:35},
    {t:"Observez d'abord votre respiration telle qu'elle est. Quelle main bouge le plus ?",d:40},
    {d:30},
    {t:"Inspirez maintenant par le nez en gonflant doucement le ventre, comme un ballon. La main du bas se soulève, celle du haut bouge à peine.",d:45},
    {t:"Expirez lentement, le ventre redescend. Continuez à ce rythme, sans forcer.",d:40},
    {d:60},
    {t:"Allongeons l'expiration. Inspirez sur quatre temps… expirez sur six temps. Le souffle sort comme à travers une paille, fin et régulier.",d:50},
    {d:90},
    {t:"Si compter vous crispe, laissez tomber les chiffres. Gardez simplement une expiration lente, plus longue que l'inspiration.",d:35},
    {d:90},
    {t:"Remarquez l'effet dans le corps : les épaules, la mâchoire, le rythme du cœur.",d:40},
    {d:60},
    {t:"Laissez la respiration revenir à son rythme naturel. Restez un instant avec cette sensation de calme.",d:40},
    {d:40},
    {t:"Bougez doucement, ouvrez les yeux. Ce geste — allonger l'expiration — est désormais disponible partout, à tout moment.",d:35}
  ]
},
{
  theme:"Les pensées",
  subtitle:"Observer sans s'identifier",
  minutes:13,
  intro:"Vous n'êtes pas vos pensées. Cette semaine, vous apprenez à les regarder passer comme des nuages dans le ciel : elles apparaissent, occupent l'espace un moment, puis se dissolvent. La méditation ne supprime pas les pensées — elle change votre relation avec elles. C'est ce qu'on appelle la défusion : passer de « je suis inquiet » à « je remarque une pensée inquiète ».",
  tip:"Étiquetez discrètement : quand une pensée surgit, notez mentalement « penser », puis revenez au souffle. Sans commentaire, sans reproche.",
  journalPrompt:"Quel type de pensées revenait le plus souvent : passé, futur, jugements, listes de choses à faire ?",
  deepDive:{
    guideId:"erreurs",
    headline:"L'erreur la plus fréquente : vouloir faire le vide",
    insight:"Personne ne fait le vide. Ce n'est pas l'objectif. L'esprit produit des pensées comme les poumons produisent de la respiration : c'est sa nature. La méditation entraîne non pas à supprimer les pensées, mais à changer de rapport avec elles — les observer sans y adhérer."
  },
  shortScript:[
    {t:"Installez-vous. Quelques respirations, puis stabilisez l'attention sur le souffle.",d:45},
    {t:"Imaginez votre esprit comme un vaste ciel. Les pensées sont des nuages qui passent.",d:35},
    {d:60},
    {t:"Quand une pensée surgit, notez « penser », puis revenez au souffle. Sans jugement.",d:40},
    {d:90},
    {t:"Revenez au souffle. Le ciel reste, quels que soient les nuages. Ouvrez les yeux.",d:30}
  ],
  script:[
    {t:"Installez-vous. Quelques respirations amples pour arriver ici, dans cette séance.",d:40},
    {t:"Stabilisez d'abord l'attention sur le souffle, votre point d'ancrage.",d:35},
    {d:60},
    {t:"Imaginez votre esprit comme un vaste ciel. Les pensées sont des nuages : certains passent vite, d'autres s'attardent. Vous êtes le ciel, pas les nuages.",d:45},
    {d:60},
    {t:"Quand une pensée surgit, notez simplement « penser », sans la juger, sans la suivre. Puis revenez au souffle.",d:40},
    {d:90},
    {t:"Certaines pensées sont collantes — un souci, un projet, une rancune. Remarquez leur traction. Vous n'avez pas à les chasser : juste à ne pas monter à bord.",d:45},
    {d:90},
    {t:"Si vous réalisez que vous étiez parti depuis longtemps, parfait : ce moment de réalisation est précisément la pleine conscience.",d:40},
    {d:90},
    {t:"Revenez une dernière fois au souffle. Le ciel reste, quels que soient les nuages.",d:35},
    {d:60},
    {t:"Élargissez l'attention au corps, aux sons. Ouvrez les yeux à votre rythme.",d:30}
  ]
},
{
  theme:"Le stress",
  subtitle:"Répondre plutôt que réagir",
  minutes:14,
  intro:"Entre un événement et votre réaction, il existe un espace. Le stress chronique vient souvent de réactions automatiques : tension, rumination, précipitation. Cette semaine, vous apprenez à repérer les signaux du stress dans le corps — c'est là qu'il apparaît en premier — et à insérer une respiration dans cet espace, pour choisir votre réponse au lieu de la subir.",
  tip:"Dans la journée, utilisez la « pause de trois respirations » dès qu'une tension monte : c'est la version portable de cette séance.",
  journalPrompt:"Où le stress se loge-t-il dans votre corps en premier ? Épaules, ventre, mâchoire, poitrine ?",
  deepDive:{
    guideId:"routine",
    headline:"Réagir vs répondre : l'espace qui change tout",
    insight:"Le stress n'est pas l'événement — c'est l'automatisme qui suit. La pratique régulière allonge progressivement l'espace entre stimulus et réaction. Ce n'est pas de la volonté : c'est un changement neurologique mesurable, documenté après 8 semaines de MBSR."
  },
  shortScript:[
    {t:"Installez-vous. Stabilisez l'attention sur le souffle.",d:35},
    {t:"Évoquez une situation légèrement stressante. Observez où ça se serre dans le corps.",d:45},
    {d:45},
    {t:"Respirez vers cette zone : à l'expiration, laissez la tension se desserrer d'un cran.",d:40},
    {d:75},
    {t:"Ce geste — sentir, respirer, desserrer — est disponible en toute situation.",d:35},
    {t:"Revenez au souffle. Ouvrez les yeux.",d:25}
  ],
  script:[
    {t:"Installez-vous, le dos droit, les épaules relâchées. Fermez les yeux.",d:35},
    {t:"Commencez par stabiliser l'attention sur le souffle.",d:30},
    {d:60},
    {t:"Pensez maintenant à une situation légèrement stressante de votre quotidien. Pas la pire — quelque chose de gérable. Laissez-la se présenter.",d:45},
    {d:30},
    {t:"Observez la réaction du corps : où ça se tend, où ça se serre. La gorge ? Le ventre ? Les épaules ? Explorez avec curiosité, comme un cartographe.",d:50},
    {d:60},
    {t:"Respirez vers cette zone. Inspirez… et à l'expiration, laissez la tension se desserrer d'un cran. Pas tout — juste un cran.",d:45},
    {d:75},
    {t:"Remarquez : la situation n'a pas changé, mais votre rapport à elle, si. Le corps peut porter le stress autrement.",d:40},
    {d:60},
    {t:"Laissez maintenant la situation se dissoudre. Revenez au souffle, simple et régulier.",d:35},
    {d:75},
    {t:"Mémorisez ce geste : sentir la tension, respirer vers elle, desserrer d'un cran. Trois respirations suffisent, n'importe où.",d:40},
    {d:45},
    {t:"Reprenez contact avec la pièce. Ouvrez les yeux.",d:30}
  ]
},
{
  theme:"Les émotions",
  subtitle:"Accueillir ce qui est là",
  minutes:14,
  intro:"Une émotion est une vague : elle monte, culmine, redescend — si on la laisse faire. La plupart de nos difficultés viennent de la lutte : refuser de ressentir, ruminer, anesthésier. Cette semaine, vous pratiquez la méthode RAIN : Reconnaître l'émotion, l'Accueillir, l'Inspecter dans le corps, et Ne pas s'y identifier. Accueillir ne veut pas dire approuver — cela veut dire cesser de se battre contre ce qui est déjà là.",
  tip:"Nommer une émotion la régule déjà : « voilà de l'agacement », « voilà de l'inquiétude ». Le cerveau passe du mode alarme au mode observation.",
  journalPrompt:"Quelle émotion s'est présentée pendant la séance ? Comment a-t-elle évolué quand vous avez cessé de la repousser ?",
  deepDive:{
    guideId:"quotidien",
    headline:"RAIN : quatre lettres pour traverser une émotion",
    insight:"Reconnaître, Accueillir, Inspecter dans le corps, Ne pas s'identifier. Cette séquence issue de la pleine conscience n'est pas qu'une technique de séance — elle fonctionne en temps réel, dans la journée. Nommer une émotion suffit déjà à activer le cortex préfrontal et à réduire l'activité de l'amygdale."
  },
  shortScript:[
    {t:"Installez-vous. Laissez venir l'état émotionnel présent, quel qu'il soit.",d:40},
    {t:"Nommez-le simplement : « voilà de la fatigue », « voilà de la tension ». Sans jugement.",d:35},
    {d:45},
    {t:"Où cette émotion vit-elle dans le corps ? Une boule, une chaleur, un vide ? Observez.",d:40},
    {d:60},
    {t:"Vous n'êtes pas cette émotion — vous êtes l'espace dans lequel elle passe.",d:35},
    {t:"Une intention de bienveillance envers vous-même. Bougez, ouvrez les yeux.",d:30}
  ],
  script:[
    {t:"Installez-vous confortablement. Laissez le corps se poser, le souffle se calmer.",d:40},
    {d:50},
    {t:"Laissez venir l'état émotionnel présent — quel qu'il soit. Calme, fatigue, agacement, joie, inquiétude. Il n'y a pas de mauvaise réponse.",d:45},
    {d:40},
    {t:"Première étape : reconnaître. Nommez ce qui est là, simplement : « voilà de la fatigue », « voilà de la tension ».",d:40},
    {d:50},
    {t:"Deuxième étape : accueillir. Laissez l'émotion être là, sans la chasser ni l'amplifier. Comme un invité de passage.",d:40},
    {d:60},
    {t:"Troisième étape : inspecter dans le corps. Où cette émotion vit-elle ? Une boule, une chaleur, un poids, un vide ? Observez ses contours.",d:45},
    {d:75},
    {t:"Quatrième étape : ne pas s'identifier. Vous n'êtes pas cette émotion — vous êtes l'espace dans lequel elle passe. Elle est une météo, vous êtes le paysage.",d:45},
    {d:75},
    {t:"Revenez au souffle. Remarquez si quelque chose a bougé — même imperceptiblement.",d:35},
    {d:60},
    {t:"Terminez par une intention de bienveillance envers vous-même : vous faites de votre mieux, ici, maintenant.",d:35},
    {d:40},
    {t:"Bougez doucement. Ouvrez les yeux.",d:30}
  ]
},
{
  theme:"La détente et le sommeil",
  subtitle:"Relâcher en profondeur",
  minutes:15,
  intro:"Le sommeil ne se force pas — il s'accueille. Cette semaine, vous pratiquez le relâchement profond : une combinaison de scan corporel descendant, d'expiration allongée et de visualisation, proche des protocoles de relaxation utilisés contre l'insomnie. Pratiquée en journée, cette séance apprend au corps le chemin de la détente ; pratiquée le soir, elle prépare directement l'endormissement.",
  tip:"Le soir, faites cette séance allongé dans le lit, lumière éteinte. Si vous vous endormez avant la fin : mission accomplie.",
  journalPrompt:"À quel moment de la séance le corps a-t-il vraiment lâché ? Qu'est-ce qui résistait encore ?",
  deepDive:{
    guideId:"souffle",
    headline:"Sommeil et expiration : le lien physiologique",
    insight:"L'endormissement est une chute de l'activation du système nerveux. Une expiration deux fois plus longue que l'inspiration, répétée pendant 3 à 5 minutes, reproduit exactement ce processus. Ce n'est pas une technique de relaxation parmi d'autres : c'est l'activation directe du mécanisme physiologique du sommeil."
  },
  shortScript:[
    {t:"Allongez-vous ou installez-vous très confortablement. Laissez le corps peser.",d:30},
    {t:"Inspirez sur 4, expirez sur 6 ou 8. Comme une marée lente.",d:35},
    {d:50},
    {t:"Relâchez le visage, les épaules, les bras. Tout devient lourd.",d:30},
    {d:50},
    {t:"Les jambes, les pieds. Tout le corps repose. Rien à tenir.",d:30},
    {d:70},
    {t:"Si c'est le soir, glissez vers le sommeil. Sinon, étirez-vous doucement.",d:30}
  ],
  script:[
    {t:"Allongez-vous ou installez-vous très confortablement. Laissez le corps peser de tout son poids, entièrement soutenu.",d:45},
    {t:"Trois expirations longues, comme des soupirs. Laissez chaque expiration emporter un peu de la journée.",d:40},
    {d:40},
    {t:"Installez une respiration lente : inspirez sur quatre temps, expirez sur six ou huit. Sans effort, comme une marée.",d:50},
    {d:75},
    {t:"Portez l'attention au visage. Relâchez le front… les sourcils… les paupières, lourdes… la mâchoire qui se desserre, la langue qui se détache du palais.",d:50},
    {d:50},
    {t:"Les épaules descendent, s'éloignent des oreilles. Les bras deviennent lourds, les mains s'ouvrent.",d:45},
    {d:50},
    {t:"La poitrine et le ventre se relâchent à chaque expiration. Le dos s'enfonce dans le support.",d:45},
    {d:60},
    {t:"Les jambes, lourdes et chaudes, jusqu'à la pointe des pieds. Tout le corps repose. Rien à tenir.",d:45},
    {d:75},
    {t:"Imaginez maintenant un lieu paisible — réel ou inventé. Sa lumière, ses sons, sa température. Installez-vous-y.",d:50},
    {d:90},
    {t:"Restez dans ce calme. Le souffle, lent. Le corps, lourd. L'esprit, posé.",d:35},
    {d:75},
    {t:"Si c'est le soir, laissez-vous glisser vers le sommeil. Sinon, revenez doucement, étirez-vous, ouvrez les yeux.",d:35}
  ]
},
{
  theme:"La vie quotidienne",
  subtitle:"Intégrer la pratique",
  minutes:15,
  intro:"Dernière semaine : la méditation quitte le coussin. Vous pratiquez l'attention ouverte — sans objet privilégié, accueillant ce qui se présente — et vous posez les fondations de la suite. Le vrai bénéfice de huit semaines de pratique n'est pas ce qui se passe pendant les séances, mais ce qui change entre elles : plus de présence dans les gestes ordinaires, plus d'espace avant les réactions, un meilleur rapport au corps et au sommeil.",
  tip:"Choisissez dès maintenant votre format de croisière : 10 minutes par jour valent mieux que 30 minutes le dimanche. La régularité bat l'intensité.",
  journalPrompt:"Qu'est-ce qui a changé depuis la semaine 1 — dans la pratique, et en dehors ?",
  deepDive:{
    guideId:"quotidien",
    headline:"La pratique informelle : là où tout se joue vraiment",
    insight:"Le MBSR consacre autant de temps à la pratique informelle qu'à la pratique formelle. Méditer en faisant la vaisselle, en marchant, en mangeant — ce n'est pas un bonus, c'est la moitié du protocole. C'est elle qui transforme le quotidien, pas les séances."
  },
  shortScript:[
    {t:"Installez-vous. Stabilisez l'attention sur le souffle, comme on accorde un instrument.",d:40},
    {d:60},
    {t:"Ouvrez l'attention : accueillez ce qui se présente — sons, sensations, pensées. Rien à saisir.",d:40},
    {d:90},
    {t:"Formulez intérieurement une intention pour la suite : quand, où, combien de temps pratiquerez-vous ?",d:40},
    {d:45},
    {t:"Trois respirations. Ouvrez les yeux. La séance se termine — la pratique continue.",d:30}
  ],
  script:[
    {t:"Installez-vous. Vous connaissez maintenant le chemin : le dos droit, le corps qui se pose, le souffle qui se calme.",d:40},
    {d:50},
    {t:"Stabilisez l'attention sur le souffle quelques instants, comme on accorde un instrument.",d:35},
    {d:75},
    {t:"Ouvrez maintenant l'attention. Plus d'objet unique : accueillez ce qui se présente — un son, une sensation, une pensée, le souffle. Laissez l'expérience venir à vous.",d:50},
    {d:90},
    {t:"Si l'esprit s'agrippe à quelque chose, remarquez-le, puis rouvrez l'attention, vaste comme une pièce dont toutes les fenêtres sont ouvertes.",d:45},
    {d:90},
    {t:"Remarquez la qualité de ce moment : être simplement là, éveillé, sans rien faire d'autre. C'est cela que vous avez entraîné pendant huit semaines.",d:45},
    {d:90},
    {t:"Formulez intérieurement une intention pour la suite : quand, où, combien de temps pratiquerez-vous désormais ? Voyez-vous le faire.",d:45},
    {d:60},
    {t:"Revenez au souffle, votre ancrage de toujours. Trois respirations amples.",d:35},
    {d:40},
    {t:"Ouvrez les yeux. La séance se termine — la pratique continue.",d:30}
  ]
}
];

/* ——— Pratique informelle : une micro-intention par jour, par semaine ——— */
const INFORMAL_BY_WEEK = [
  /* Semaine 1 — Le souffle */
  [
    "Avant de vous lever ce matin, posez une main sur le ventre et observez trois respirations sans les modifier.",
    "À un feu rouge ou dans une file d'attente, remarquez votre souffle tel qu'il est, sans l'ajuster.",
    "Pendant votre premier café ou thé, respirez consciemment entre chaque gorgée.",
    "Avant d'ouvrir votre boîte mail, prenez une grande inspiration et une longue expiration.",
    "Dans une conversation, remarquez si vous retenez votre souffle quand l'autre parle.",
    "En marchant, synchronisez votre pas et votre respiration : deux pas à l'inspiration, trois à l'expiration.",
    "Ce soir, couché, comptez dix respirations complètes avant de lâcher la journée."
  ],
  /* Semaine 2 — Le corps */
  [
    "Au réveil, avant de bouger, scannez rapidement le corps : où ça pèse, où ça chauffe, où ça résiste ?",
    "Pendant un repas, mangez les trois premières bouchées en posant les couverts entre chaque.",
    "En travaillant, remarquez toutes les heures la position de vos épaules. Relâchez-les consciemment.",
    "Sous la douche, sentez l'eau sur chaque zone du corps, comme un scan rapide.",
    "En marchant, sentez le contact de chaque pied avec le sol, du talon aux orteils.",
    "Avant de dormir, posez les mains sur le ventre et sentez-le se soulever et s'abaisser.",
    "Choisissez une tâche ordinaire (vaisselle, cuisine) et faites-la en percevant toutes les sensations physiques."
  ],
  /* Semaine 3 — La respiration profonde */
  [
    "En vous asseyant à votre bureau, prenez trois respirations abdominales avant de commencer.",
    "Dans les transports, utilisez l'expiration longue (inspirer 4, expirer 6) pendant deux minutes.",
    "Avant un appel ou une réunion, cinq respirations lentes, expiration plus longue.",
    "À chaque transition entre deux tâches, une seule respiration complète et consciente.",
    "Après un repas, trois minutes de respiration calme avant de reprendre l'activité.",
    "Le soir, allongé, alternez 4 temps d'inspiration et 6 temps d'expiration pendant cinq minutes.",
    "Identifiez un moment de la journée où votre respiration était tendue. Qu'est-ce qui se passait ?"
  ],
  /* Semaine 4 — Les pensées */
  [
    "Pendant le petit-déjeuner, remarquez quand votre esprit part planifier la journée. Revenez au goût.",
    "Dans les transports, notez silencieusement le type de vos pensées : passé, futur, jugement, liste.",
    "Dans une conversation, remarquez quand vous commencez à préparer votre réponse. Revenez à écouter.",
    "Choisissez une tâche répétitive et comptez combien de fois votre esprit s'échappe.",
    "Quand une préoccupation revient, notez-la sur papier et dites-vous : « je peux y revenir plus tard ».",
    "Ce soir, identifiez la pensée qui est revenue le plus souvent aujourd'hui. Quel type est-elle ?",
    "Avant de vous endormir, imaginez vos pensées comme des bulles qui montent et s'éclatent en surface."
  ],
  /* Semaine 5 — Le stress */
  [
    "Identifiez ce matin un moment potentiellement stressant. Préparez mentalement la pause de trois respirations.",
    "Dès qu'une tension monte, posez les deux pieds au sol et soufflez longuement avant de répondre.",
    "Avant une situation difficile, notez où le stress se loge dans votre corps. Épaules, ventre, mâchoire ?",
    "Utilisez la pause de trois minutes du SOS entre deux moments chargés de la journée.",
    "Dans un moment de tension, dites intérieurement « je remarque du stress » plutôt que « je suis stressé ».",
    "Ce soir, recensez les moments où vous avez répondu (choisi) plutôt que réagi (subi). Un seul suffit.",
    "Avant de déverrouiller votre téléphone, une expiration longue. Puis ouvrez-le."
  ],
  /* Semaine 6 — Les émotions */
  [
    "Au réveil, nommez l'état émotionnel présent en un mot. Sans le juger, sans le changer.",
    "Quand une émotion désagréable surgit, posez une main sur la poitrine et respirez vers elle.",
    "Dans une situation frustrante, appliquez RAIN : Reconnaître, Accueillir, Inspecter, Ne pas s'identifier.",
    "Ce soir, listez trois émotions ressenties aujourd'hui. Où vivaient-elles dans le corps ?",
    "Quand vous vous sentez bien, remarquez-le consciemment : où est la légèreté dans le corps ?",
    "Avant une conversation difficile, nommez intérieurement ce que vous ressentez. Cela suffit souvent.",
    "Ce soir, une intention de bienveillance envers vous-même : « j'ai fait de mon mieux aujourd'hui »."
  ],
  /* Semaine 7 — La détente et le sommeil */
  [
    "Ce soir, éteignez les écrans 15 minutes avant de vous coucher. Lisez, notez, ou restez simplement.",
    "Au lit, faites le scan du visage : front, yeux, mâchoire, langue. Relâchez consciemment.",
    "En milieu de journée, trois minutes de cohérence cardiaque (5-5) pour casser la dynamique du matin.",
    "Repérez l'heure où vous vous sentez le plus fatigué. Programmez une micro-pause à ce moment-là.",
    "Ce soir, passez en revue votre journée comme si vous regardiez un film. Sans juger, juste observer.",
    "Au lit, installez une expiration deux fois plus longue que l'inspiration. Laissez le corps s'alourdir.",
    "Offrez-vous 20 minutes de repos non productif : ni tâche, ni écran, ni objectif."
  ],
  /* Semaine 8 — La vie quotidienne */
  [
    "Choisissez une activité du quotidien et faites-la entièrement en pleine conscience : café, trajet, brossage de dents.",
    "Trois fois dans la journée, une mini-pause de 30 secondes : yeux fermés, souffle, corps, sons.",
    "Dans une conversation, pratiquez l'écoute complète : présent, sans préparer votre réponse.",
    "En mangeant, posez les couverts entre chaque bouchée les cinq premières. Notez les saveurs.",
    "Ce soir, notez une situation où vous avez été plus présent qu'avant le programme.",
    "Définissez votre format de croisière : quelle pratique, combien de minutes, à quel moment, chaque jour.",
    "Écrivez une ligne sur ce que ce programme vous a apporté. Pour vous, pas pour l'app."
  ]
];

/* Focus du jour : varie l'angle d'attaque au sein d'une même semaine */
const DAILY_FOCUS = [
  "Découverte : faites simplement connaissance avec la pratique, sans attente.",
  "Stabilité : aujourd'hui, soignez votre posture avant tout.",
  "Douceur : ramenez l'attention sans aucun reproche, comme on guide un enfant.",
  "Précision : observez les détails fins des sensations, comme à la loupe.",
  "Patience : laissez la séance être ennuyeuse si elle l'est. Restez.",
  "Curiosité : abordez la séance comme si c'était la toute première fois.",
  "Bilan : dernière séance de la semaine — remarquez ce qui a évolué depuis le jour 1."
];

/* ——— Techniques de respiration ——— */
const BREATHING = [
  {
    id:"coherence",
    name:"Cohérence cardiaque",
    use:"Calme de fond · 3 fois par jour",
    desc:"5 secondes d'inspiration, 5 secondes d'expiration, pendant 5 minutes. Ce rythme de 6 respirations par minute synchronise le cœur et la respiration, et régule le système nerveux pour plusieurs heures. La routine classique : matin, midi, fin de journée.",
    phases:[{label:"Inspirez",d:5,type:"inhale"},{label:"Expirez",d:5,type:"exhale"}],
    cycles:30
  },
  {
    id:"478",
    name:"Respiration 4-7-8",
    use:"Endormissement · le soir",
    desc:"Inspirez 4 temps par le nez, retenez 7 temps, expirez 8 temps par la bouche. La rétention puis la longue expiration déclenchent une détente marquée. Commencez par 4 cycles ; un léger vertige est possible au début, restez assis ou allongé.",
    phases:[{label:"Inspirez",d:4,type:"inhale"},{label:"Retenez",d:7,type:"hold"},{label:"Expirez",d:8,type:"exhale"}],
    cycles:4
  },
  {
    id:"box",
    name:"Respiration carrée",
    use:"Concentration · avant un moment exigeant",
    desc:"Inspirez 4, retenez 4, expirez 4, retenez 4. Utilisée pour retrouver sang-froid et clarté avant une situation tendue : prise de parole, conduite difficile, conflit. 5 à 10 cycles suffisent.",
    phases:[{label:"Inspirez",d:4,type:"inhale"},{label:"Retenez",d:4,type:"hold"},{label:"Expirez",d:4,type:"exhale"},{label:"Retenez",d:4,type:"hold"}],
    cycles:8
  }
];

/* ——— Séances SOS ——— */
const SOS = [
  {
    id:"ancrage",
    name:"Ancrage 5-4-3-2-1",
    use:"Stress aigu, esprit qui s'emballe · 2 min",
    script:[
      {t:"Où que vous soyez, posez les deux pieds au sol. Une grande expiration.",d:12},
      {t:"Repérez cinq choses que vous voyez autour de vous. Prenez le temps de les regarder vraiment.",d:25},
      {t:"Quatre choses que vous pouvez toucher : vos vêtements, une surface, vos mains.",d:20},
      {t:"Trois sons que vous entendez, proches ou lointains.",d:20},
      {t:"Deux odeurs, même subtiles.",d:15},
      {t:"Une sensation dans votre corps, ici, maintenant.",d:15},
      {t:"Une dernière respiration ample. Vous êtes revenu dans le présent.",d:13}
    ]
  },
  {
    id:"pause3",
    name:"Pause de trois minutes",
    use:"Tension qui monte, transition entre deux tâches · 3 min",
    script:[
      {t:"Arrêtez ce que vous faites. Fermez les yeux si possible.",d:10},
      {t:"Première minute : que se passe-t-il en ce moment ? Pensées, émotions, sensations. Constatez, sans rien changer.",d:55},
      {t:"Deuxième minute : resserrez toute l'attention sur le souffle. Rien d'autre que l'inspiration et l'expiration.",d:55},
      {t:"Troisième minute : élargissez au corps entier, debout ou assis, respirant. Sentez l'espace retrouvé.",d:50},
      {t:"Reprenez votre journée — depuis cet espace.",d:10}
    ]
  },
  {
    id:"presommeil",
    name:"Sas avant le sommeil",
    use:"Au lit, lumière éteinte · 4 min",
    script:[
      {t:"Allongé dans le lit, laissez le corps peser entièrement sur le matelas.",d:20},
      {t:"Trois longues expirations, comme des soupirs. La journée est terminée — il n'y a plus rien à gérer ce soir.",d:30},
      {t:"Installez une expiration lente, deux fois plus longue que l'inspiration.",d:40},
      {t:"Relâchez le visage : le front, les paupières, la mâchoire.",d:35},
      {t:"Les épaules, les bras, les mains, lourds.",d:35},
      {t:"Le ventre, les jambes, les pieds. Tout repose.",d:35},
      {t:"Si des pensées arrivent, laissez-les pour demain. Ce soir, seul compte le souffle, lent et régulier.",d:45}
    ]
  }
];

/* ——— Guide : bonnes pratiques ——— */
const GUIDE = [
  {
    id:"routine",
    title:"Construire la routine",
    teaser:"La régularité bat l'intensité — comment tenir 8 semaines.",
    body:[
      "La variable la plus prédictive de réussite n'est ni la durée des séances ni la technique : c'est la régularité. Dix minutes par jour transforment plus que trente minutes le dimanche.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">L'ancrage comportemental</h3>",
      "<strong>Ancrez la séance à une habitude existante.</strong> La méthode la plus fiable : « après [habitude déjà installée], je médite ». Après le café du matin, après le brossage de dents du soir, en rentrant du travail avant d'ouvrir un écran. Le déclencheur fait le travail à votre place — la décision est déjà prise.",
      "Soyez précis : « après le café » est un ancrage. « Le matin » n'en est pas un. Plus l'ancre est concrète et déjà automatique, plus elle sera fiable.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Le cadre physique</h3>",
      "<strong>Même heure, même lieu.</strong> Un coin dédié — un coussin, une chaise, toujours les mêmes — réduit la friction de démarrage à presque zéro. Quand vous vous asseyez à cet endroit, le corps commence déjà à se préparer.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Quand ça déraille</h3>",
      "<strong>La règle des deux minutes.</strong> Les jours sans énergie, autorisez-vous deux minutes au lieu de zéro. L'identité « je suis quelqu'un qui médite chaque jour » se construit par la présence, pas par la performance.",
      "<strong>Ratez un jour, jamais deux.</strong> Un jour manqué est un accident ; deux jours, le début d'une nouvelle habitude — celle de ne pas pratiquer. Le lendemain d'un jour raté est le jour le plus important du programme.",
      "<div style=\"margin-top:24px;padding:16px 20px;border-radius:14px;border:1px solid rgba(224,164,88,.3);background:rgba(224,164,88,.08)\"><p style=\"font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--flame);margin-bottom:8px;font-weight:500\">À retenir</p><p style=\"color:var(--ink);line-height:1.65\">Un déclencheur fait le travail de la motivation. Trouvez le vôtre, tenez-vous-y, ratez un jour — jamais deux.</p></div>"
    ]
  },
  {
    id:"posture",
    title:"La posture",
    teaser:"Digne et détendu : les réglages qui changent tout.",
    body:[
      "La posture n'est pas un dogme : c'est un outil. Une bonne posture maintient la vigilance tout en permettant le relâchement. La formule à retenir : <strong>digne et détendu</strong>.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Sur une chaise — recommandé pour débuter</h3>",
      "Pieds à plat au sol, dos décollé du dossier, mains posées sur les cuisses. La colonne s'allonge comme si un fil tirait le sommet du crâne vers le haut. C'est la position la plus accessible et la plus polyvalente.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Au sol</h3>",
      "Asseyez-vous sur le bord d'un coussin ferme, genoux plus bas que les hanches. Sans coussin surélevé, le dos s'arrondit et la séance devient une lutte contre la douleur, pas une pratique.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Allongé — plus de cas que vous ne le pensez</h3>",
      "L'allongé est souvent présenté comme une position de dernier recours, risquant l'endormissement. En réalité, il est adapté à plusieurs contextes : le scan corporel (semaine 2), toutes les séances du soir, la semaine 7 sur la détente et le sommeil, et n'importe quelle séance si une douleur au dos le justifie. Bras le long du corps, paumes vers le ciel.",
      "<strong>S'endormir n'est pas un échec.</strong> Lors des séances du soir, glisser vers le sommeil est le signe que la pratique a fonctionné.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Les réglages fins</h3>",
      "Les yeux : fermés pour l'intériorité, mi-clos posés au sol si la somnolence guette. La mâchoire desserrée, la langue détendue contre le bas du palais. Les épaules qui tombent naturellement.",
      "<strong>Si une douleur apparaît en séance : bougez.</strong> Ajuster la position n'interrompt pas la méditation — lutter contre une douleur en serrant les dents, si. La méditation n'est pas un concours d'immobilité.",
      "<div style=\"margin-top:24px;padding:16px 20px;border-radius:14px;border:1px solid rgba(224,164,88,.3);background:rgba(224,164,88,.08)\"><p style=\"font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--flame);margin-bottom:8px;font-weight:500\">À retenir</p><p style=\"color:var(--ink);line-height:1.65\">Digne et détendu. Assise, allongée, sur une chaise ou au sol — la bonne posture est celle qui tient sans douleur. Si vous avez mal : bougez.</p></div>"
    ]
  },
  {
    id:"erreurs",
    title:"Les erreurs fréquentes",
    teaser:"Ce qui fait abandonner — et comment l'éviter.",
    body:[
      "Ces six erreurs représentent la majorité des abandons en première et deuxième semaine. Les reconnaître ne les empêche pas toujours — mais ça aide à ne pas les interpréter comme des signes que « la méditation n'est pas pour soi ».",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">« Je n'arrive pas à faire le vide »</h3>",
      "Personne n'y arrive : ce n'est pas l'objectif. La méditation n'est pas l'absence de pensées, c'est le changement de relation avec elles. Un esprit qui s'échappe cinquante fois offre cinquante occasions de s'entraîner. <strong>À la place :</strong> dès qu'une pensée apparaît, notez mentalement « penser » — sans la juger — et revenez au souffle. C'est exactement l'exercice.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Juger ses séances</h3>",
      "Il n'existe pas de « bonne » ou de « mauvaise » séance. Les séances agitées sont souvent celles qui entraînent le plus — comme les répétitions difficiles en sport. <strong>À la place :</strong> à la fin de chaque séance, notez une seule chose que vous avez remarquée. Pas si c'était « bien » — juste ce que vous avez observé.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Attendre des résultats immédiats</h3>",
      "Les effets se mesurent en semaines, et apparaissent d'abord en dehors des séances : un agacement qui retombe plus vite, un endormissement plus facile, un moment de recul avant de répondre. <strong>À la place :</strong> lisez le guide « Comment savoir qu'on progresse ? » et utilisez le journal pour tracer votre humeur avant/après chaque séance.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Pratiquer uniquement quand ça va mal</h3>",
      "La méditation est un entraînement, pas un médicament d'urgence. C'est la pratique des jours calmes qui rend disponibles les ressources des jours difficiles. <strong>À la place :</strong> ancrez la séance à un moment fixe, quelle que soit votre humeur du moment. Le module SOS existe pour les urgences — il ne remplace pas la pratique régulière.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">En faire trop, trop vite</h3>",
      "Passer de zéro à trente minutes par jour est le meilleur moyen d'abandonner en dix jours. Le programme augmente progressivement : faites-lui confiance. <strong>À la place :</strong> si une séance semble trop longue, utilisez la version courte (5 min). Mieux vaut une séance courte que pas de séance.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Vérifier en permanence « si ça marche »</h3>",
      "Observer ses progrès toutes les trente secondes est précisément le contraire de la pratique. <strong>À la place :</strong> pratiquez, et réservez le bilan au journal de fin de séance. Les progrès en méditation ne se voient pas pendant les séances — ils se remarquent dans la vie.",
      "<div style=\"margin-top:24px;padding:16px 20px;border-radius:14px;border:1px solid rgba(224,164,88,.3);background:rgba(224,164,88,.08)\"><p style=\"font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--flame);margin-bottom:8px;font-weight:500\">À retenir</p><p style=\"color:var(--ink);line-height:1.65\">La méditation n'élimine pas les pensées et ne produit pas un état spécial. Elle s'évalue sur plusieurs semaines, dans la vie quotidienne, pas à la qualité d'une séance.</p></div>"
    ]
  },
  {
    id:"souffle",
    title:"Comprendre le souffle",
    teaser:"Pourquoi la respiration agit sur le stress et le sommeil.",
    body:[
      "La respiration est la seule fonction vitale à la fois automatique et contrôlable. C'est cette double nature qui en fait une porte d'entrée vers le système nerveux autonome — celui qui gère le stress, la digestion, le sommeil, et qu'on ne commande pas directement.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Le mécanisme central : l'expiration</h3>",
      "À l'inspiration, le rythme cardiaque accélère légèrement ; à l'expiration, il ralentit, sous l'effet du nerf vague. En allongeant l'expiration, vous penchez la balance du côté du système parasympathique — repos, récupération, digestion. C'est pour cela que toutes les techniques de détente partagent le même principe : <strong>expirer plus longtemps qu'on inspire</strong>.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Ventre ou poitrine ?</h3>",
      "La respiration thoracique — courte, haute, dans la poitrine — est celle du stress. La respiration abdominale — où le diaphragme descend et le ventre se gonfle — est celle du calme. Le corps lit votre respiration comme un signal : respirer calmement informe le cerveau que la situation est sûre. Posez une main sur le ventre pour vérifier : c'est elle qui doit bouger en premier.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Par le nez</h3>",
      "La respiration nasale filtre, réchauffe et ralentit naturellement l'air. Elle produit aussi du monoxyde d'azote, un vasodilatateur qui améliore l'oxygénation. Sauf indication contraire (expiration bouche dans certains exercices), inspirez par le nez.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Pour le sommeil</h3>",
      "Le soir, l'objectif est de faire redescendre l'activation accumulée dans la journée. Une expiration deux fois plus longue que l'inspiration, pratiquée 3 à 5 minutes au lit, prépare physiologiquement l'endormissement. C'est le principe du 4-7-8 et du sas avant le sommeil disponibles dans le module SOS.",
      "<div style=\"margin-top:24px;padding:16px 20px;border-radius:14px;border:1px solid rgba(224,164,88,.3);background:rgba(224,164,88,.08)\"><p style=\"font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--flame);margin-bottom:8px;font-weight:500\">À retenir</p><p style=\"color:var(--ink);line-height:1.65\">Expirer plus longtemps qu'on inspire active directement le frein du système nerveux. Disponible partout, à tout moment, sans équipement.</p></div>"
    ]
  },
  {
    id:"science",
    title:"D'où vient ce programme",
    teaser:"Le MBSR et ce que dit la recherche.",
    body:[
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Le protocole MBSR</h3>",
      "Ce programme s'inspire du <strong>MBSR</strong> (Mindfulness-Based Stress Reduction), protocole de huit semaines créé en 1979 par Jon Kabat-Zinn à la faculté de médecine du Massachusetts. C'est le programme de méditation le plus étudié au monde, utilisé en milieu hospitalier pour la gestion du stress, de la douleur chronique et de l'anxiété.",
      "Sa structure est reprise ici : progression sur huit semaines, une pratique centrale par semaine, pratique quotidienne courte plutôt que séances rares et longues, et intégration progressive dans la vie quotidienne via la pratique informelle.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Ce que dit la recherche</h3>",
      "Les études sur le MBSR indiquent des effets mesurables sur le stress perçu, les symptômes anxieux et la qualité du sommeil, avec un niveau de preuve solide — sans être miraculeux. Deux honnêtetés s'imposent : les effets demandent une pratique régulière de plusieurs semaines, et ils varient selon les individus.",
      "La méditation complète — sans remplacer — un suivi médical ou psychologique quand il est nécessaire. Si vous traversez une période de détresse intense, combiner les deux est plus efficace que choisir l'un ou l'autre.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Ce qui a été adapté dans cette application</h3>",
      "Au socle MBSR ont été ajoutés : un module de respiration physiologique (cohérence cardiaque, 4-7-8, respiration carrée), un mode SOS pour les situations aiguës, et des mécaniques de routine issues de la recherche sur les habitudes — ancrage comportemental, chaîne de régularité, règle des deux minutes.",
      "<div style=\"margin-top:24px;padding:16px 20px;border-radius:14px;border:1px solid rgba(224,164,88,.3);background:rgba(224,164,88,.08)\"><p style=\"font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--flame);margin-bottom:8px;font-weight:500\">À retenir</p><p style=\"color:var(--ink);line-height:1.65\">Le MBSR est le programme de méditation le plus documenté scientifiquement. Ses effets sont réels et mesurables — à condition d'une pratique régulière sur plusieurs semaines.</p></div>"
    ]
  },
  {
    id:"quotidien",
    title:"La pratique informelle",
    teaser:"Méditer sans s'asseoir : les gestes du quotidien.",
    body:[
      "La pratique formelle (les séances) entraîne l'attention ; la pratique informelle la déploie dans la vie réelle. C'est elle qui transforme le quotidien — et dans le protocole MBSR original, elle représente la moitié du travail.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Les gestes ordinaires</h3>",
      "<strong>Une activité ordinaire en pleine conscience par jour.</strong> Choisissez un geste routinier — la douche, le premier café, la vaisselle, le trajet à pied — et faites-le en y étant vraiment : sensations, gestes, sons, odeurs. Sans podcast, sans téléphone, sans planifier la suite. L'intention informelle du jour, affichée sur l'accueil, vous propose un point de départ.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Les moments de friction — les plus utiles</h3>",
      "Les moments de confort sont faciles. Les plus précieux sont ceux où la pratique résiste : dans un métro bondé, avant une réunion difficile, au moment de déverrouiller le téléphone par automatisme. <strong>Trois respirations avant d'ouvrir une app.</strong> Remarquer la tension dans les épaules avant d'entrer en réunion. Observer l'impulsion du scroll sans la suivre immédiatement. Ces micro-pauses dans les moments de friction sont celles qui entraînent le plus efficacement l'espace entre stimulus et réaction.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Les transitions comme rappels</h3>",
      "Avant de démarrer la voiture, avant d'ouvrir une réunion, avant de déverrouiller le téléphone : une respiration consciente. Ces micro-pauses cousues dans la journée ne s'ajoutent pas à votre emploi du temps — elles habitent ce qui existe déjà.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">L'écoute comme pratique</h3>",
      "Dans une conversation, remarquez le moment où vous préparez votre réponse au lieu d'écouter. Revenez à la voix de l'autre comme vous revenez au souffle en séance. C'est exactement le même geste mental — et l'un des transferts les plus concrets de la pratique formelle vers la vie réelle.",
      "<div style=\"margin-top:24px;padding:16px 20px;border-radius:14px;border:1px solid rgba(224,164,88,.3);background:rgba(224,164,88,.08)\"><p style=\"font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--flame);margin-bottom:8px;font-weight:500\">À retenir</p><p style=\"color:var(--ink);line-height:1.65\">La pratique informelle ne s'ajoute pas à la journée — elle se glisse dans ce qui existe déjà. Les moments de friction sont les plus utiles.</p></div>"
    ]
  },
  {
    id:"douleur",
    title:"Quand ça fait mal",
    teaser:"Gérer les douleurs physiques en séance sans abandonner.",
    body:[
      "La douleur est l'une des premières raisons d'abandon, souvent parce qu'on croit qu'il faut la supporter en silence. Ce n'est pas le cas. Distinguer les types de douleur et savoir quoi faire change tout.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Douleur de tension vs. signal d'alarme</h3>",
      "<strong>La douleur de tension</strong> — une gêne dans le bas du dos, un engourdissement dans les jambes, une raideur dans les épaules — est normale au début. Elle signale une posture inhabituelle ou des tensions chroniques que vous ne notiez pas avant. Observer cette douleur avec curiosité (où est-elle exactement ? comment évolue-t-elle ?) est une pratique en soi, et elle se dissout souvent quand on lui prête attention sans résistance.",
      "<strong>Le signal d'alarme</strong> — une douleur vive, articulaire, qui irradie — mérite qu'on l'écoute. Changer de position immédiatement. Si elle persiste en dehors des séances, consulter.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Adapter la position</h3>",
      "Il n'y a pas de hiérarchie entre les positions. Si la position assise génère des douleurs récurrentes, passez à la chaise ou allongez-vous. Si le sol est difficile pour les genoux, un coussin épais sous les fesses change tout. La bonne position est celle qui se tient sans douleur pendant la durée de la séance.",
      "<strong>Quelques adaptations pratiques :</strong> dos douloureux au sol → asseyez-vous dos au mur ou allongez-vous. Genoux sensibles au sol → posture sur chaise. Nuque raide → inclinez légèrement le menton vers la poitrine.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Bouger est autorisé</h3>",
      "Ajuster sa position en cours de séance n'interrompt pas la méditation — au contraire. Bougez consciemment : sentez la nouvelle position s'installer, observez le soulagement ou la persistance de la gêne. Ce geste attentionné est de la pleine conscience.",
      "Ce qui interrompt la pratique : lutter contre la douleur en serrant les dents, ou rester dans une position douloureuse par principe. La méditation n'est pas un concours d'endurance.",
      "<div style=\"margin-top:24px;padding:16px 20px;border-radius:14px;border:1px solid rgba(224,164,88,.3);background:rgba(224,164,88,.08)\"><p style=\"font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--flame);margin-bottom:8px;font-weight:500\">À retenir</p><p style=\"color:var(--ink);line-height:1.65\">Observer la douleur est une pratique. La subir n'en est pas une. Si ça fait mal : bougez, adaptez, changez de position. La bonne posture est celle qui tient sans souffrir.</p></div>"
    ]
  },
  {
    id:"progres",
    title:"Comment savoir qu'on progresse ?",
    teaser:"Les vrais signes d'une pratique qui fonctionne.",
    body:[
      "Les progrès en méditation sont presque invisibles pendant les séances. Ils apparaissent d'abord ailleurs — dans la vie, dans les réactions, dans le corps — souvent sans qu'on les relie à la pratique. C'est ce qui génère le doute.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Ce que vous ne verrez pas</h3>",
      "Pas de « click », de révélation ou de sérénité permanente. Les séances resteront parfois agitées jusqu'à la semaine 8. La qualité d'une séance n'est pas un indicateur de progrès. Les semaines difficiles entraînent autant que les semaines fluides.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Les vrais signes — dans la vie</h3>",
      "Ce sont ces petits écarts qui signalent que quelque chose change : <strong>un moment de recul</strong> avant de répondre à un message irritant, là où vous auriez réagi immédiatement avant. <strong>Un agacement qui retombe</strong> plus vite qu'avant, sans que vous ayez rien « fait ». <strong>Un endormissement plus facile</strong>, ou un réveil moins brutal. <strong>Remarquer que vous êtes distrait</strong> — sans l'avoir cherché — plutôt que de l'être sans le savoir. Ce dernier point est central : la conscience de la distraction est le signe que l'attention s'entraîne.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Le calendrier des effets</h3>",
      "Les premières semaines, les effets sont subtils et intermittents — un moment de calme, une réaction légèrement différente. Vers la semaine 4, une familiarité avec la pratique s'installe. Entre la semaine 6 et la fin du programme, les transferts dans la vie quotidienne deviennent plus nets et plus fréquents. Ce calendrier varie selon les personnes, mais la direction est constante : les bénéfices arrivent en dehors des séances.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Ce que le journal peut révéler</h3>",
      "Relisez vos entrées de journal toutes les deux semaines. Regardez l'évolution des humeurs avant/après séance, les notes que vous avez laissées. Ce qui semble insignifiant semaine 2 prend souvent du sens semaine 6. Le journal ne mesure pas la qualité de vos séances — il rend visible une trajectoire que vous ne percevez pas au quotidien.",
      "<div style=\"margin-top:24px;padding:16px 20px;border-radius:14px;border:1px solid rgba(224,164,88,.3);background:rgba(224,164,88,.08)\"><p style=\"font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--flame);margin-bottom:8px;font-weight:500\">À retenir</p><p style=\"color:var(--ink);line-height:1.65\">Les progrès n'apparaissent pas pendant les séances, mais entre elles. Un moment de recul, une réaction qui change, un sommeil qui s'améliore — ce sont les bons indicateurs.</p></div>"
    ]
  },
  {
    id:"jours-difficiles",
    title:"Les jours difficiles",
    teaser:"Pratiquer quand l'esprit ne veut pas — et c'est justement là.",
    body:[
      "Certains jours, l'esprit est trop agité, trop chargé, trop résistant pour la séance habituelle. Ces jours-là sont les plus tentants pour sauter la pratique. Ils sont aussi, souvent, les plus utiles pour s'entraîner.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Réduire sans culpabilité</h3>",
      "Un jour difficile n'appelle pas une séance de 15 minutes — il appelle une séance de 5. La version courte de chaque séance existe précisément pour ça. Trois respirations abdominales comptent. Deux minutes de scan corporel comptent. La règle des deux minutes s'applique ici : ce qui compte est de ne pas casser la chaîne.",
      "Résistance n'est pas contre-indication. Ressentir qu'on n'a pas envie de méditer n'est pas un signe d'incompatibilité — c'est l'état d'esprit le plus commun avant de commencer. La résistance disparaît presque toujours dans les deux premières minutes.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Changer de technique selon l'état</h3>",
      "<strong>Esprit très agité, pensées qui s'emballent</strong> → privilégiez une technique physiologique plutôt que la méditation assise. La cohérence cardiaque (5-5, module Respiration) ou l'ancrage 5-4-3-2-1 (SOS) ramènent l'attention au corps sans demander d'observer les pensées — ce qui peut être contre-productif quand elles sont très intenses.",
      "<strong>Fatigue extrême</strong> → allongez-vous et faites le scan corporel. Si vous vous endormez, vous en aviez besoin. Ce n'est pas un échec.",
      "<strong>Tristesse ou anxiété forte</strong> → ne forcez pas l'observation des émotions (semaine 6). Revenez à quelque chose de plus ancré : les sensations du souffle, le contact des pieds au sol, les sons autour de vous. La pratique sensorielle est plus stabilisante que la pratique émotionnelle dans ces moments.",
      "<h3 style=\"margin-top:28px;margin-bottom:8px;font-family:var(--font-d)\">Quand sortir de la séance</h3>",
      "Si des émotions très intenses remontent en séance — un chagrin difficile à contenir, une anxiété qui monte — il est toujours juste d'ouvrir les yeux, de poser les pieds au sol et de sortir de la séance. Ce n'est pas un abandon : c'est écouter ses limites du moment. Reprenez plus tard, ou le lendemain.",
      "Si ce type d'émergence est régulier et intense, la méditation en solo a ses limites — un accompagnement professionnel permet de travailler ces couches plus en sécurité.",
      "<div style=\"margin-top:24px;padding:16px 20px;border-radius:14px;border:1px solid rgba(224,164,88,.3);background:rgba(224,164,88,.08)\"><p style=\"font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--flame);margin-bottom:8px;font-weight:500\">À retenir</p><p style=\"color:var(--ink);line-height:1.65\">Les jours difficiles : faites moins, pas rien. Cinq minutes valent mieux que zéro. Si l'esprit s'emballe, passez à une technique physiologique plutôt que de forcer l'observation.</p></div>"
    ]
  }
];
