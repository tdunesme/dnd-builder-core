import { PrismaClient } from '../../src/generated/prisma/client';

type SpeciesTrait = {
  kind: 'passive' | 'active' | 'choice';
  key: string;
  name: string;
  description: string;
  options?: Array<{
    key: string;
    name: string;
    description: string;
    spells?: Array<{
      level: 1 | 3 | 5;
      name: string;
      notes?: string;
    }>;
  }>;
  scaling?: Array<{
    atCharacterLevel: number;
    description: string;
  }>;
};

const srdSpecies: Array<{
  key: string;
  name: string;
  description: string;
  creatureType: string;
  size: string;
  speed: number;
  sizeOptions?: string[];
  traits: SpeciesTrait[];
}> = [
  {
    key: 'dragonborn',
    name: 'Drakéide',
    description:
      'Descendant d’un ancêtre draconique, tu manifestes un souffle magique et une résistance liée à ton ascendance.',
    creatureType: 'Humanoid',
    size: 'Medium',
    speed: 30,
    sizeOptions: ['Medium'],
    traits: [
      {
        kind: 'choice',
        key: 'draconic_ancestry',
        name: 'Ascendance draconique',
        description:
          'Votre lignée provient d’un dragon ancestral. Votre choix détermine votre Souffle et votre Résistance aux dégâts.',
        options: [
          { key: 'black', name: 'Noir', description: 'Type de dégâts : Acide' },
          { key: 'blue', name: 'Bleu', description: 'Type de dégâts : Foudre' },
          { key: 'brass', name: 'Airain', description: 'Type de dégâts : Feu' },
          {
            key: 'bronze',
            name: 'Bronze',
            description: 'Type de dégâts : Foudre',
          },
          {
            key: 'copper',
            name: 'Cuivre',
            description: 'Type de dégâts : Acide',
          },
          { key: 'gold', name: 'Or', description: 'Type de dégâts : Feu' },
          {
            key: 'green',
            name: 'Vert',
            description: 'Type de dégâts : Poison',
          },
          { key: 'red', name: 'Rouge', description: 'Type de dégâts : Feu' },
          {
            key: 'silver',
            name: 'Argent',
            description: 'Type de dégâts : Froid',
          },
          {
            key: 'white',
            name: 'Blanc',
            description: 'Type de dégâts : Froid',
          },
        ],
      },
      {
        kind: 'active',
        key: 'breath_weapon',
        name: 'Souffle',
        description:
          'Quand vous faites l’action Attaquer, vous pouvez remplacer une de vos attaques par une exhalaison magique (cône de 4,5 m ou ligne de 9 m sur 1,5 m de large, au choix à chaque utilisation). Jet de sauvegarde de Dextérité (DD = 8 + mod. CON + bonus de maîtrise). Échec : 1d10 dégâts (type selon Ascendance). Réussite : moitié. Utilisations = bonus de maîtrise par repos long.',
        scaling: [
          { atCharacterLevel: 5, description: 'Dégâts : 2d10.' },
          { atCharacterLevel: 11, description: 'Dégâts : 3d10.' },
          { atCharacterLevel: 17, description: 'Dégâts : 4d10.' },
        ],
      },
      {
        kind: 'passive',
        key: 'damage_resistance',
        name: 'Résistance',
        description:
          'Vous avez Résistance au type de dégâts déterminé par votre Ascendance draconique.',
      },
      {
        kind: 'passive',
        key: 'darkvision',
        name: 'Vision dans le noir',
        description: 'Vision dans le noir : portée 18 m (60 ft).',
      },
      {
        kind: 'active',
        key: 'draconic_flight',
        name: 'Vol draconique',
        description:
          'À partir du niveau de personnage 5, en action bonus, vous faites apparaître des ailes spectrales pendant 10 minutes (ou jusqu’à les rétracter, sans action, ou si vous êtes Incapacitated). Pendant ce temps, vous obtenez une vitesse de vol égale à votre vitesse. Une fois utilisé, indisponible jusqu’au repos long.',
        scaling: [{ atCharacterLevel: 5, description: 'Débloque le trait.' }],
      },
    ],
  },

  {
    key: 'dwarf',
    name: 'Nain',
    description:
      'Robuste et endurant, tu es façonné par une grande résilience et un lien profond avec la pierre et les traditions ancestrales.',
    creatureType: 'Humanoid',
    size: 'Medium',
    speed: 30,
    sizeOptions: ['Medium'],
    traits: [
      {
        kind: 'passive',
        key: 'darkvision',
        name: 'Vision dans le noir',
        description: 'Vision dans le noir : portée 36 m (120 ft).',
      },
      {
        kind: 'passive',
        key: 'dwarven_resilience',
        name: 'Résilience naine',
        description:
          'Résistance aux dégâts de Poison. Vous avez aussi l’Avantage aux jets de sauvegarde pour éviter ou mettre fin à la condition Empoisonné.',
      },
      {
        kind: 'passive',
        key: 'dwarven_toughness',
        name: 'Robustesse naine',
        description:
          'Votre maximum de points de vie augmente de 1, puis augmente encore de 1 à chaque gain de niveau.',
      },
      {
        kind: 'active',
        key: 'stonecunning',
        name: 'Connaissance de la pierre',
        description:
          'En action bonus, vous gagnez Tremorsense 18 m (60 ft) pendant 10 minutes. Vous devez être sur une surface de pierre ou la toucher (naturelle ou travaillée). Utilisations = bonus de maîtrise par repos long.',
      },
    ],
  },

  {
    key: 'elf',
    name: 'Elfe',
    description:
      'Être féerique et vigilant, ta lignée t’accorde des dons surnaturels, et ta transe remplace le sommeil.',
    creatureType: 'Humanoid',
    size: 'Medium',
    speed: 30,
    sizeOptions: ['Medium'],
    traits: [
      {
        kind: 'passive',
        key: 'darkvision',
        name: 'Vision dans le noir',
        description: 'Vision dans le noir : portée 18 m (60 ft).',
      },
      {
        kind: 'choice',
        key: 'elven_lineage',
        name: 'Lignée elfique',
        description:
          'Choisissez une lignée. Vous gagnez le bénéfice de niveau 1. Aux niveaux de personnage 3 et 5, vous apprenez le sort indiqué, toujours préparé, lançable 1 fois sans emplacement (récupéré au repos long). Vous pouvez aussi le lancer avec vos emplacements. Caractéristique d’incantation : INT, SAG ou CHA (au choix lors de la sélection).',
        options: [
          {
            key: 'drow',
            name: 'Drow',
            description:
              'Portée de Vision dans le noir augmentée à 36 m (120 ft). Vous connaissez aussi le tour de magie Dancing Lights.',
            spells: [
              { level: 3, name: 'Faerie Fire' },
              { level: 5, name: 'Darkness' },
            ],
          },
          {
            key: 'high_elf',
            name: 'Haut Elfe',
            description:
              'Vous connaissez Prestidigitation. À chaque repos long, vous pouvez remplacer ce tour par un autre tour de magie de la liste de sorts de Magicien.',
            spells: [
              { level: 3, name: 'Detect Magic' },
              { level: 5, name: 'Misty Step' },
            ],
          },
          {
            key: 'wood_elf',
            name: 'Elfe des bois',
            description:
              'Votre vitesse augmente à 35 ft. Vous connaissez Druidcraft.',
            spells: [
              { level: 3, name: 'Longstrider' },
              { level: 5, name: 'Pass without Trace' },
            ],
          },
        ],
      },
      {
        kind: 'passive',
        key: 'fey_ancestry',
        name: 'Ascendance féerique',
        description:
          'Avantage aux jets de sauvegarde pour éviter ou mettre fin à la condition Charmé.',
      },
      {
        kind: 'choice',
        key: 'keen_senses',
        name: 'Sens aiguisés',
        description:
          'Vous avez la maîtrise de la compétence Insight, Perception ou Survival (au choix).',
      },
      {
        kind: 'passive',
        key: 'trance',
        name: 'Transe',
        description:
          'Vous n’avez pas besoin de dormir, et la magie ne peut pas vous endormir. Vous terminez un repos long en 4 heures si vous méditez en transe tout ce temps en restant conscient.',
      },
    ],
  },

  {
    key: 'gnome',
    name: 'Gnome',
    description:
      'Curieux et astucieux, tu combines ingéniosité et magie mineure, avec une lignée qui façonne tes talents.',
    creatureType: 'Humanoid',
    size: 'Small',
    speed: 30,
    sizeOptions: ['Small'],
    traits: [
      {
        kind: 'passive',
        key: 'darkvision',
        name: 'Vision dans le noir',
        description: 'Vision dans le noir : portée 18 m (60 ft).',
      },
      {
        kind: 'passive',
        key: 'gnomish_cunning',
        name: 'Ruse gnome',
        description:
          'Avantage aux jets de sauvegarde d’Intelligence, de Sagesse et de Charisme.',
      },
      {
        kind: 'choice',
        key: 'gnomish_lineage',
        name: 'Lignée gnome',
        description:
          'Choisissez une lignée. Pour les sorts de ce trait, votre caractéristique d’incantation est INT, SAG ou CHA (au choix à la sélection).',
        options: [
          {
            key: 'forest_gnome',
            name: 'Gnome des forêts',
            description:
              'Vous connaissez Minor Illusion. Vous avez toujours Speak with Animals préparé. Vous pouvez le lancer sans emplacement un nombre de fois égal à votre bonus de maîtrise par repos long. Vous pouvez aussi utiliser vos emplacements.',
            spells: [
              {
                level: 1,
                name: 'Speak with Animals',
                notes: 'Toujours préparé.',
              },
            ],
          },
          {
            key: 'rock_gnome',
            name: 'Gnome des roches',
            description:
              'Vous connaissez Mending et Prestidigitation. En plus, vous pouvez passer 10 minutes à lancer Prestidigitation pour créer un minuscule appareil d’horlogerie (CA 5, 1 PV) basé sur un effet de Prestidigitation, activable en action bonus au toucher. Vous pouvez en avoir 3 à la fois. Il se désagrège après 8 heures ou si vous le démontez au toucher (action Utilize).',
          },
        ],
      },
    ],
  },

  {
    key: 'goliath',
    name: 'Goliath',
    description:
      'Héritier d’un sang de géant, tu déploies une puissance surnaturelle et une carrure impressionnante sur le champ de bataille.',
    creatureType: 'Humanoid',
    size: 'Medium',
    speed: 35,
    sizeOptions: ['Medium'],
    traits: [
      {
        kind: 'choice',
        key: 'giant_ancestry',
        name: 'Ascendance des géants',
        description:
          'Choisissez un don surnaturel. Utilisations = bonus de maîtrise par repos long.',
        options: [
          {
            key: 'clouds_jaunt',
            name: 'Pas des Nuages (Géant des nuages)',
            description:
              'Action bonus : vous vous téléportez magiquement jusqu’à 9 m (30 ft) vers un espace inoccupé visible.',
          },
          {
            key: 'fires_burn',
            name: 'Brûlure du Feu (Géant du feu)',
            description:
              'Quand vous touchez avec un jet d’attaque et infligez des dégâts, vous pouvez aussi infliger 1d10 dégâts de Feu à la cible.',
          },
          {
            key: 'frosts_chill',
            name: 'Morsure du Givre (Géant du givre)',
            description:
              'Quand vous touchez avec un jet d’attaque et infligez des dégâts, vous pouvez aussi infliger 1d6 dégâts de Froid et réduire la vitesse de la cible de 10 ft jusqu’au début de votre prochain tour.',
          },
          {
            key: 'hills_tumble',
            name: 'Culbute des Collines (Géant des collines)',
            description:
              'Quand vous touchez une créature Large ou plus petite avec un jet d’attaque et infligez des dégâts, vous pouvez lui donner la condition Prone.',
          },
          {
            key: 'stones_endurance',
            name: 'Endurance de Pierre (Géant des pierres)',
            description:
              'Quand vous subissez des dégâts, en réaction, lancez 1d12 + mod. CON et réduisez les dégâts de ce total.',
          },
          {
            key: 'storms_thunder',
            name: 'Tonnerre de Tempête (Géant des tempêtes)',
            description:
              'Quand vous subissez des dégâts d’une créature à 60 ft, en réaction, vous lui infligez 1d8 dégâts de Tonnerre.',
          },
        ],
      },
      {
        kind: 'active',
        key: 'large_form',
        name: 'Forme imposante',
        description:
          'À partir du niveau de personnage 5, en action bonus, si vous avez assez de place, vous devenez Large pendant 10 minutes (ou jusqu’à y mettre fin, sans action). Pendant ce temps, Avantage aux tests de Force, et votre vitesse augmente de 10 ft. Une fois utilisé, indisponible jusqu’au repos long.',
        scaling: [{ atCharacterLevel: 5, description: 'Débloque le trait.' }],
      },
      {
        kind: 'passive',
        key: 'powerful_build',
        name: 'Carrure puissante',
        description:
          'Avantage à tout test visant à mettre fin à la condition Grappled. Vous comptez comme une taille au-dessus pour la capacité de port.',
      },
    ],
  },

  {
    key: 'halfling',
    name: 'Halfelin',
    description:
      'Petit mais intrépide, ta chance et ta discrétion te tirent d’affaire, même face aux plus grands dangers.',
    creatureType: 'Humanoid',
    size: 'Small',
    speed: 30,
    sizeOptions: ['Small'],
    traits: [
      {
        kind: 'passive',
        key: 'brave',
        name: 'Courageux',
        description:
          'Avantage aux jets de sauvegarde pour éviter ou mettre fin à la condition Frightened.',
      },
      {
        kind: 'passive',
        key: 'halfling_nimbleness',
        name: 'Agilité halfeline',
        description:
          'Vous pouvez traverser l’espace de toute créature d’une taille au-dessus de la vôtre, mais vous ne pouvez pas terminer votre mouvement dans cet espace.',
      },
      {
        kind: 'passive',
        key: 'luck',
        name: 'Chance',
        description:
          'Quand vous obtenez un 1 sur le d20 lors d’un D20 Test, vous pouvez relancer ce dé, et vous devez utiliser le nouveau résultat.',
      },
      {
        kind: 'passive',
        key: 'naturally_stealthy',
        name: 'Naturellement discret',
        description:
          'Vous pouvez faire l’action Hide même si vous n’êtes obscurci que par une créature d’au moins une taille supérieure.',
      },
    ],
  },

  {
    key: 'human',
    name: 'Humain',
    description:
      'Polyvalent et débrouillard, tu te distingues par ton adaptabilité, tes compétences variées et ton potentiel de progression.',
    creatureType: 'Humanoid',
    size: 'Medium',
    speed: 30,
    sizeOptions: ['Small', 'Medium'],
    traits: [
      {
        kind: 'passive',
        key: 'resourceful',
        name: 'Débrouillard',
        description:
          'Vous gagnez une Inspiration héroïque à chaque repos long.',
      },
      {
        kind: 'choice',
        key: 'skillful',
        name: 'Compétent',
        description: 'Vous gagnez la maîtrise d’une compétence de votre choix.',
      },
      {
        kind: 'choice',
        key: 'versatile',
        name: 'Polyvalent',
        description:
          'Vous gagnez un don d’Origine de votre choix (Skilled est recommandé dans le SRD).',
      },
    ],
  },

  {
    key: 'orc',
    name: 'Orque',
    description:
      'Féroce et tenace, tu puises dans une poussée d’adrénaline et une endurance implacable pour rester debout quand tout vacille.',
    creatureType: 'Humanoid',
    size: 'Medium',
    speed: 30,
    sizeOptions: ['Medium'],
    traits: [
      {
        kind: 'active',
        key: 'adrenaline_rush',
        name: 'Poussée d’adrénaline',
        description:
          'Vous pouvez faire l’action Dash en action bonus. Quand vous le faites, vous gagnez des points de vie temporaires égaux à votre bonus de maîtrise. Utilisations = bonus de maîtrise, récupérées au repos court ou long.',
      },
      {
        kind: 'passive',
        key: 'darkvision',
        name: 'Vision dans le noir',
        description: 'Vision dans le noir : portée 36 m (120 ft).',
      },
      {
        kind: 'passive',
        key: 'relentless_endurance',
        name: 'Endurance implacable',
        description:
          'Quand vous tombez à 0 PV sans être tué sur le coup, vous tombez à 1 PV à la place. Une fois utilisé, indisponible jusqu’au repos long.',
      },
    ],
  },

  {
    key: 'tiefling',
    name: 'Tieffelin',
    description:
      'Marqué par un héritage infernal, tu portes des dons ésotériques et une résistance liée au type de lignée que tu revendiques.',
    creatureType: 'Humanoid',
    size: 'Medium',
    speed: 30,
    sizeOptions: ['Small', 'Medium'],
    traits: [
      {
        kind: 'passive',
        key: 'darkvision',
        name: 'Vision dans le noir',
        description: 'Vision dans le noir : portée 18 m (60 ft).',
      },
      {
        kind: 'choice',
        key: 'fiendish_legacy',
        name: 'Héritage infernal',
        description:
          'Choisissez un héritage. Vous gagnez le bénéfice de niveau 1. Aux niveaux de personnage 3 et 5, vous apprenez le sort indiqué (toujours préparé, 1 lancement sans emplacement par repos long, lançable aussi avec emplacements). Caractéristique d’incantation : INT, SAG ou CHA (au choix lors de la sélection).',
        options: [
          {
            key: 'abyssal',
            name: 'Abyssal',
            description:
              'Résistance aux dégâts de Poison. Vous connaissez aussi Poison Spray.',
            spells: [
              { level: 1, name: 'Poison Spray', notes: 'Tour de magie.' },
              { level: 3, name: 'Ray of Sickness' },
              { level: 5, name: 'Hold Person' },
            ],
          },
          {
            key: 'chthonic',
            name: 'Chthonien',
            description:
              'Résistance aux dégâts nécrotiques. Vous connaissez aussi Chill Touch.',
            spells: [
              { level: 1, name: 'Chill Touch', notes: 'Tour de magie.' },
              { level: 3, name: 'False Life' },
              { level: 5, name: 'Ray of Enfeeblement' },
            ],
          },
          {
            key: 'infernal',
            name: 'Infernal',
            description:
              'Résistance aux dégâts de Feu. Vous connaissez aussi Fire Bolt.',
            spells: [
              { level: 1, name: 'Fire Bolt', notes: 'Tour de magie.' },
              { level: 3, name: 'Hellish Rebuke' },
              { level: 5, name: 'Darkness' },
            ],
          },
        ],
      },
      {
        kind: 'passive',
        key: 'otherworldly_presence',
        name: 'Présence d’outre-monde',
        description:
          'Vous connaissez le tour de magie Thaumaturgy. Quand vous le lancez via ce trait, il utilise la même caractéristique d’incantation que votre Héritage infernal.',
      },
    ],
  },
];

export async function seedSpecies(prisma: PrismaClient) {
  console.log('🌱 Seeding SRD species (FR + traits)...');

  for (const data of srdSpecies) {
    await prisma.species.upsert({
      where: { key: data.key },
      update: {
        name: data.name,
        description: data.description,
        creatureType: data.creatureType,
        size: data.size,
        speed: data.speed,
        sizeOptions: data.sizeOptions,
        traits: data.traits,
      },
      create: {
        key: data.key,
        name: data.name,
        description: data.description,
        creatureType: data.creatureType,
        size: data.size,
        speed: data.speed,
        sizeOptions: data.sizeOptions,
        traits: data.traits,
      },
    });

    console.log(`  ✅ Species upserted: ${data.key}`);
  }
}
