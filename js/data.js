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
      "<strong>Ancrez la séance à une habitude existante.</strong> La méthode la plus fiable : « après [habitude déjà installée], je médite ». Après le café du matin, après le brossage de dents du soir, en rentrant du travail avant d'ouvrir un écran. Le déclencheur fait le travail à votre place.",
      "<strong>Même heure, même lieu.</strong> Un coin dédié — un coussin, une chaise, toujours les mêmes — réduit la friction de démarrage à presque zéro. La décision est déjà prise.",
      "<strong>La règle des deux minutes.</strong> Les jours sans énergie, autorisez-vous une séance de deux minutes au lieu de zéro. Ce qui compte est de ne pas casser la chaîne : l'identité « je suis quelqu'un qui médite chaque jour » se construit par la présence, pas par la performance.",
      "<strong>Ratez un jour, jamais deux.</strong> Un jour manqué est un accident ; deux jours, le début d'une nouvelle habitude — celle de ne pas pratiquer. Le lendemain d'un jour raté est le jour le plus important du programme."
    ]
  },
  {
    id:"posture",
    title:"La posture",
    teaser:"Digne et détendu : les réglages qui changent tout.",
    body:[
      "La posture n'est pas un dogme : c'est un outil. Une bonne posture maintient la vigilance (on ne s'endort pas) tout en permettant le relâchement (on ne lutte pas). La formule à retenir : <strong>digne et détendu</strong>.",
      "<strong>Sur une chaise</strong> — l'option recommandée pour débuter : pieds à plat au sol, dos décollé du dossier, mains posées sur les cuisses. La colonne s'allonge comme si un fil tirait le sommet du crâne vers le haut.",
      "<strong>Au sol</strong> : asseyez-vous sur le bord d'un coussin ferme, genoux plus bas que les hanches. Sans cela, le dos s'arrondit et la séance devient une lutte.",
      "<strong>Allongé</strong> : réservez cette position au scan corporel et aux séances du soir — le risque d'endormissement est réel. Bras le long du corps, paumes vers le ciel.",
      "Les yeux : fermés pour l'intériorité, mi-clos posés au sol si la somnolence guette. La mâchoire desserrée, la langue détendue. Et si une douleur apparaît en séance : bougez. La méditation n'est pas un concours d'immobilité."
    ]
  },
  {
    id:"erreurs",
    title:"Les erreurs fréquentes",
    teaser:"Ce qui fait abandonner — et comment l'éviter.",
    body:[
      "<strong>« Je n'arrive pas à faire le vide. »</strong> Personne n'y arrive : ce n'est pas l'objectif. La méditation n'est pas l'absence de pensées, c'est le changement de relation avec elles. Un esprit qui s'échappe cinquante fois offre cinquante occasions de s'entraîner.",
      "<strong>Juger ses séances.</strong> Il n'existe pas de « bonne » ou de « mauvaise » séance. Les séances agitées sont souvent celles qui entraînent le plus — comme les répétitions difficiles en sport.",
      "<strong>Attendre des résultats immédiats.</strong> Les effets se mesurent en semaines, et apparaissent d'abord en dehors des séances : un agacement qui retombe plus vite, un endormissement plus facile, un moment de recul avant de répondre.",
      "<strong>Pratiquer uniquement quand ça va mal.</strong> La méditation est un entraînement, pas un médicament d'urgence. C'est la pratique des jours calmes qui rend disponibles les ressources des jours difficiles.",
      "<strong>En faire trop, trop vite.</strong> Passer de zéro à trente minutes par jour est le meilleur moyen d'abandonner en dix jours. Le programme augmente progressivement : faites-lui confiance.",
      "<strong>Vérifier en permanence « si ça marche ».</strong> Observer ses progrès toutes les trente secondes est précisément le contraire de la pratique. Pratiquez, et laissez le bilan au journal de fin de séance."
    ]
  },
  {
    id:"souffle",
    title:"Comprendre le souffle",
    teaser:"Pourquoi la respiration agit sur le stress et le sommeil.",
    body:[
      "La respiration est la seule fonction vitale à la fois automatique et contrôlable. C'est cette double nature qui en fait une porte d'entrée vers le système nerveux autonome — celui qui gère le stress, la digestion, le sommeil, et qu'on ne commande pas directement.",
      "<strong>Le mécanisme central : l'expiration.</strong> À l'inspiration, le rythme cardiaque accélère légèrement ; à l'expiration, il ralentit, sous l'effet du nerf vague. En allongeant l'expiration, vous penchez la balance du côté du système parasympathique — repos, récupération, digestion. C'est pour cela que toutes les techniques de détente partagent le même principe : <strong>expirer plus longtemps qu'on inspire</strong>.",
      "<strong>Le ventre plutôt que la poitrine.</strong> La respiration thoracique, courte et haute, est celle du stress ; la respiration abdominale, où le diaphragme descend et le ventre se gonfle, est celle du calme. Le corps lit votre respiration comme un signal : respirer calmement informe le cerveau que la situation est sûre.",
      "<strong>Par le nez.</strong> La respiration nasale filtre, réchauffe et ralentit naturellement l'air. Sauf indication contraire (expiration bouche dans certains exercices), inspirez par le nez.",
      "<strong>Pour le sommeil</strong> : le soir, l'objectif est de faire redescendre l'activation accumulée dans la journée. Une expiration deux fois plus longue que l'inspiration, pratiquée 3 à 5 minutes au lit, prépare physiologiquement l'endormissement — c'est le principe du 4-7-8 et du « sas avant le sommeil » du mode SOS."
    ]
  },
  {
    id:"science",
    title:"D'où vient ce programme",
    teaser:"Le MBSR et ce que dit la recherche.",
    body:[
      "Ce programme s'inspire du <strong>MBSR</strong> (Mindfulness-Based Stress Reduction), protocole de huit semaines créé en 1979 par Jon Kabat-Zinn à la faculté de médecine du Massachusetts. C'est le programme de méditation le plus étudié au monde, utilisé en milieu hospitalier pour la gestion du stress, de la douleur chronique et de l'anxiété.",
      "Sa structure est reprise ici : progression sur huit semaines, une pratique centrale par semaine (souffle, scan corporel, observation des pensées et des émotions…), pratique quotidienne courte plutôt que séances rares et longues, et intégration progressive dans la vie quotidienne.",
      "Les recherches sur la méditation de pleine conscience indiquent des effets mesurables sur le stress perçu, les symptômes anxieux et la qualité du sommeil, avec un niveau de preuve correct sans être miraculeux. Deux honnêtetés s'imposent : les effets demandent une pratique régulière de plusieurs semaines, et la méditation complète — sans remplacer — un suivi médical ou psychologique quand il est nécessaire.",
      "Ce qui est ajouté au socle MBSR dans cette application : un module de respiration physiologique (cohérence cardiaque, 4-7-8), un mode SOS pour les situations aiguës, et des mécaniques de routine issues de la recherche sur les habitudes (ancrage, chaîne de régularité, règle des deux minutes)."
    ]
  },
  {
    id:"quotidien",
    title:"La pratique informelle",
    teaser:"Méditer sans s'asseoir : les gestes du quotidien.",
    body:[
      "La pratique « formelle » (les séances) entraîne l'attention ; la pratique « informelle » la déploie dans la vie réelle. C'est elle qui transforme le quotidien.",
      "<strong>Une activité ordinaire en pleine conscience par jour.</strong> Choisissez un geste routinier — la douche, le premier café, la vaisselle, le trajet à pied — et faites-le en y étant vraiment : sensations, gestes, sons, odeurs. Sans podcast, sans téléphone, sans planifier la suite.",
      "<strong>Les transitions comme rappels.</strong> Avant de démarrer la voiture, avant d'ouvrir une réunion, avant de déverrouiller le téléphone : une respiration consciente. Ces micro-pauses cousues dans la journée comptent autant que la séance du matin.",
      "<strong>Manger les premières bouchées en conscience.</strong> Pas tout le repas — les trois premières bouchées : goût, texture, température. Un entraînement discret et quotidien.",
      "<strong>L'écoute comme pratique.</strong> Dans une conversation, remarquez le moment où vous préparez votre réponse au lieu d'écouter. Revenez à la voix de l'autre comme vous revenez au souffle. C'est exactement le même geste mental."
    ]
  }
];
