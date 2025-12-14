import { PrismaClient } from '../../../src/generated/prisma/client';

const srdSpellsLevel0 = [
  {
    key: 'acid-splash',
    name: 'Projection acide',
    level: 0,
    school: 'Évocation',
    castingTime: '1 action',
    range: '60 pieds',
    components: 'V, S',
    duration: 'Instantanée',
    classes: 'Ensorceleur, Magicien',
    description: `Vous créez une bulle d’acide à un point à portée, où elle explose dans une sphère de 1,5 m de rayon. Chaque créature dans cette zone doit réussir un jet de sauvegarde de Dextérité ou subir 1d6 dégâts d’Acide.

Cantrip Upgrade. Les dégâts augmentent de 1d6 aux niveaux 5 (2d6), 11 (3d6) et 17 (4d6).`,
  },

  {
    key: 'blade-ward',
    name: 'Parade de lames',
    level: 0,
    school: 'Abjuration',
    castingTime: '1 action',
    range: 'Personnel',
    components: 'V, S',
    duration: '1 round',
    classes: 'Barde, Ensorceleur, Magicien, Occultiste',
    description: `Jusqu’à la fin de votre prochain tour, vous avez Résistance aux dégâts contondants, perforants et tranchants infligés par des attaques d’armes.`,
  },

  {
    key: 'chill-touch',
    name: 'Toucher glacial',
    level: 0,
    school: 'Nécromancie',
    castingTime: '1 action',
    range: '120 pieds',
    components: 'V, S',
    duration: '1 round',
    classes: 'Ensorceleur, Magicien',
    description: `Vous créez une main squelettique spectrale dans l’espace d’une créature à portée. Faites une attaque de sort à distance contre la cible. En cas de réussite, elle subit 1d8 dégâts nécrotiques et ne peut pas regagner de points de vie jusqu’au début de votre prochain tour.

Si la cible est un mort-vivant, elle a Désavantage à ses jets d’attaque contre vous jusqu’à la fin de votre prochain tour.

Cantrip Upgrade. Les dégâts augmentent de 1d8 aux niveaux 5 (2d8), 11 (3d8) et 17 (4d8).`,
  },

  {
    key: 'dancing-lights',
    name: 'Lumières dansantes',
    level: 0,
    school: 'Illusion',
    castingTime: '1 action',
    range: '120 pieds',
    components: 'V, S, M (un fragment de phosphore)',
    duration: 'Concentration, jusqu’à 1 minute',
    classes: 'Barde, Ensorceleur, Magicien',
    description: `Vous créez jusqu’à quatre lumières de la taille de torches à portée, qui peuvent apparaître comme des torches, des lanternes ou des orbes lumineux flottants. Vous pouvez aussi les combiner en une forme lumineuse humanoïde de taille Medium. Chaque lumière émet une lumière faible dans un rayon de 3 m.

En action bonus, vous pouvez déplacer les lumières jusqu’à 18 m.`,
  },

  {
    key: 'druidcraft',
    name: 'Druidisme',
    level: 0,
    school: 'Transmutation',
    castingTime: '1 action',
    range: '30 pieds',
    components: 'V, S',
    duration: 'Instantanée',
    classes: 'Druide',
    description: `Vous murmurez aux esprits de la nature pour produire l’un des effets suivants à portée : prédire le temps pour les prochaines 24 heures, faire éclore une fleur, ouvrir une gousse, créer un effet sensoriel mineur, ou allumer ou éteindre une flamme.`,
  },

  {
    key: 'eldritch-blast',
    name: 'Décharge occulte',
    level: 0,
    school: 'Évocation',
    castingTime: '1 action',
    range: '120 pieds',
    components: 'V, S',
    duration: 'Instantanée',
    classes: 'Occultiste',
    description: `Vous projetez un rayon d’énergie crépitante. Faites une attaque de sort à distance contre une créature ou un objet. En cas de réussite, la cible subit 1d10 dégâts de Force.

Cantrip Upgrade. Le sort crée deux rayons au niveau 5, trois au niveau 11 et quatre au niveau 17. Vous pouvez diriger les rayons vers une ou plusieurs cibles.`,
  },

  {
    key: 'fire-bolt',
    name: 'Trait de feu',
    level: 0,
    school: 'Évocation',
    castingTime: '1 action',
    range: '120 pieds',
    components: 'V, S',
    duration: 'Instantanée',
    classes: 'Ensorceleur, Magicien',
    description: `Vous projetez une étincelle de feu vers une créature ou un objet à portée. Faites une attaque de sort à distance contre la cible. En cas de réussite, elle subit 1d10 dégâts de Feu. Un objet inflammable touché par ce sort s’embrase s’il n’est pas porté ou tenu.

Cantrip Upgrade. Les dégâts augmentent de 1d10 aux niveaux 5, 11 et 17.`,
  },

  {
    key: 'guidance',
    name: 'Guidance',
    level: 0,
    school: 'Divination',
    castingTime: '1 action',
    range: 'Toucher',
    components: 'V, S',
    duration: 'Concentration, jusqu’à 1 minute',
    classes: 'Clerc, Druide',
    description: `Vous touchez une créature consentante. Une fois avant la fin du sort, la cible peut lancer 1d4 et ajouter le résultat à un D20 Test de son choix. Le sort se termine ensuite.`,
  },

  {
    key: 'light',
    name: 'Lumière',
    level: 0,
    school: 'Évocation',
    castingTime: '1 action',
    range: 'Toucher',
    components: 'V, M (une luciole ou un morceau de mousse phosphorescente)',
    duration: '1 heure',
    classes: 'Barde, Clerc, Ensorceleur, Magicien',
    description: `Vous touchez un objet qui n’est porté ni tenu. L’objet émet une lumière vive dans un rayon de 6 m et une lumière faible sur 6 m supplémentaires. La lumière peut être de la couleur de votre choix.

Si vous ciblez un objet porté ou tenu par une créature hostile, celle-ci doit réussir un jet de sauvegarde de Dextérité pour éviter le sort.`,
  },

  {
    key: 'mage-hand',
    name: 'Main de mage',
    level: 0,
    school: 'Conjuration',
    castingTime: '1 action',
    range: '30 pieds',
    components: 'V, S',
    duration: '1 minute',
    classes: 'Barde, Ensorceleur, Occultiste, Magicien',
    description: `Une main spectrale apparaît à portée. Vous pouvez l’utiliser pour manipuler un objet, ouvrir une porte ou un conteneur non verrouillé, ranger ou récupérer un objet, ou verser le contenu d’un flacon. La main ne peut pas attaquer, activer d’objets magiques ou porter plus de 5 kg.`,
  },

  {
    key: 'mending',
    name: 'Réparation',
    level: 0,
    school: 'Transmutation',
    castingTime: '1 minute',
    range: 'Toucher',
    components: 'V, S, M (aimants)',
    duration: 'Instantanée',
    classes: 'Barde, Clerc, Druide, Magicien',
    description: `Vous réparez une brèche ou une déchirure sur un objet, comme une chaîne brisée, deux moitiés de clé ou un manteau déchiré.`,
  },

  {
    key: 'message',
    name: 'Message',
    level: 0,
    school: 'Transmutation',
    castingTime: '1 action',
    range: '120 pieds',
    components: 'S, M (un fil de cuivre)',
    duration: '1 round',
    classes: 'Barde, Druide, Ensorceleur, Magicien',
    description: `Vous pointez une créature à portée et murmurez un message. La cible entend le message et peut répondre par un murmure que vous êtes le seul à entendre.`,
  },

  {
    key: 'minor-illusion',
    name: 'Illusion mineure',
    level: 0,
    school: 'Illusion',
    castingTime: '1 action',
    range: '30 pieds',
    components: 'S, M (un peu de laine)',
    duration: '1 minute',
    classes: 'Barde, Ensorceleur, Occultiste, Magicien',
    description: `Vous créez un son ou une image statique d’un objet à portée.`,
  },

  {
    key: 'poison-spray',
    name: 'Jet empoisonné',
    level: 0,
    school: 'Nécromancie',
    castingTime: '1 action',
    range: '30 pieds',
    components: 'V, S',
    duration: 'Instantanée',
    classes: 'Druide, Ensorceleur, Occultiste, Magicien',
    description: `Vous projetez un nuage de gaz toxique. Faites une attaque de sort à distance. En cas de réussite, la cible subit 1d12 dégâts de Poison.

Cantrip Upgrade. Les dégâts augmentent de 1d12 aux niveaux 5, 11 et 17.`,
  },

  {
    key: 'prestidigitation',
    name: 'Prestidigitation',
    level: 0,
    school: 'Transmutation',
    castingTime: '1 action',
    range: '10 pieds',
    components: 'V, S',
    duration: 'Jusqu’à 1 heure',
    classes: 'Barde, Ensorceleur, Magicien',
    description: `Vous créez un petit effet magique mineur, comme allumer ou éteindre une flamme, nettoyer ou salir un objet, ou créer un effet sensoriel inoffensif.`,
  },

  {
    key: 'produce-flame',
    name: 'Flamme produite',
    level: 0,
    school: 'Conjuration',
    castingTime: '1 action bonus',
    range: 'Personnel',
    components: 'V, S',
    duration: '10 minutes',
    classes: 'Druide',
    description: `Une flamme vacillante apparaît dans votre main. Vous pouvez l’utiliser pour éclairer ou la lancer pour infliger 1d8 dégâts de Feu.

Cantrip Upgrade. Les dégâts augmentent de 1d8 aux niveaux 5, 11 et 17.`,
  },

  {
    key: 'resistance',
    name: 'Résistance',
    level: 0,
    school: 'Abjuration',
    castingTime: '1 action',
    range: 'Toucher',
    components: 'V, S',
    duration: 'Concentration, jusqu’à 1 minute',
    classes: 'Clerc, Druide',
    description: `Vous touchez une créature consentante. Lorsqu’elle effectue un jet de sauvegarde avant la fin du sort, elle peut lancer 1d4 et ajouter le résultat au jet.`,
  },

  {
    key: 'sacred-flame',
    name: 'Flamme sacrée',
    level: 0,
    school: 'Évocation',
    castingTime: '1 action',
    range: '60 pieds',
    components: 'V, S',
    duration: 'Instantanée',
    classes: 'Clerc',
    description: `Une flamme radieuse descend sur une créature à portée. La cible doit réussir un jet de sauvegarde de Dextérité ou subir 1d8 dégâts radiants.

Cantrip Upgrade. Les dégâts augmentent de 1d8 aux niveaux 5, 11 et 17.`,
  },

  {
    key: 'shillelagh',
    name: 'Gourdin magique',
    level: 0,
    school: 'Transmutation',
    castingTime: '1 action bonus',
    range: 'Toucher',
    components: 'V, S, M (gui)',
    duration: '1 minute',
    classes: 'Druide',
    description: `Un bâton ou gourdin que vous tenez devient magique et utilise votre caractéristique d’incantation pour les attaques.`,
  },

  {
    key: 'thaumaturgy',
    name: 'Thaumaturgie',
    level: 0,
    school: 'Transmutation',
    castingTime: '1 action',
    range: '30 pieds',
    components: 'V',
    duration: 'Jusqu’à 1 minute',
    classes: 'Clerc',
    description: `Vous manifestez un signe mineur de puissance divine, comme faire trembler le sol, faire gronder votre voix ou ouvrir une porte.`,
  },

  {
    key: 'true-strike',
    name: 'Coup assuré',
    level: 0,
    school: 'Divination',
    castingTime: '1 action',
    range: 'Personnel',
    components: 'S, M (une arme avec laquelle vous êtes compétent)',
    duration: 'Instantanée',
    classes: 'Barde, Ensorceleur, Occultiste, Magicien',
    description: `Vous faites une attaque avec l’arme utilisée lors de l’incantation en utilisant votre caractéristique d’incantation. L’attaque inflige des dégâts radiants ou normaux.

Cantrip Upgrade. Les dégâts radiants supplémentaires augmentent aux niveaux 5, 11 et 17.`,
  },

  {
    key: 'vicious-mockery',
    name: 'Moquerie cruelle',
    level: 0,
    school: 'Enchantement',
    castingTime: '1 action',
    range: '60 pieds',
    components: 'V',
    duration: 'Instantanée',
    classes: 'Barde',
    description: `Vous proférez une insulte magique. La cible doit réussir un jet de sauvegarde de Sagesse ou subir 1d6 dégâts psychiques et avoir Désavantage sur sa prochaine attaque.

Cantrip Upgrade. Les dégâts augmentent de 1d6 aux niveaux 5, 11 et 17.`,
  },

  {
    key: 'word-of-radiance',
    name: 'Parole de radiance',
    level: 0,
    school: 'Évocation',
    castingTime: '1 action',
    range: 'Personnel',
    components: 'V, M (un symbole solaire)',
    duration: 'Instantanée',
    classes: 'Clerc',
    description: `Une radiance brûlante émane de vous. Chaque créature de votre choix dans un rayon de 1,5 m doit réussir un jet de sauvegarde de Constitution ou subir 1d6 dégâts radiants.

Cantrip Upgrade. Les dégâts augmentent de 1d6 aux niveaux 5, 11 et 17.`,
  },
] as const;

export async function seedSpellsLevel0(prisma: PrismaClient) {
  console.log('🌱 Seeding SRD spells — level 0 (cantrips)...');

  for (const data of srdSpellsLevel0) {
    await prisma.spell.upsert({
      where: { key: data.key },
      update: {
        name: data.name,
        level: data.level,
        school: data.school,
        castingTime: data.castingTime,
        range: data.range,
        components: data.components,
        duration: data.duration,
        classes: data.classes,
        description: data.description,
      },
      create: {
        key: data.key,
        name: data.name,
        level: data.level,
        school: data.school,
        castingTime: data.castingTime,
        range: data.range,
        components: data.components,
        duration: data.duration,
        classes: data.classes,
        description: data.description,
      },
    });

    console.log(`  ✅ Spell upserted: ${data.key}`);
  }
}
