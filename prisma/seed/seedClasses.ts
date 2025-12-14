import { PrismaClient } from '../../src/generated/prisma/client';

const srdClasses = [
  // BARBARE
  {
    key: 'barbarian',
    name: 'Barbare',
    description:
      'Combattant féroce porté par la rage, le barbare encaisse les coups et déchaîne une force brute au corps à corps.',
    hitDie: 12,
    primaryAbilities: ['Force'],
    savingThrows: ['Force', 'Constitution'],
    armorProficiencies: ['Armure légère', 'Armure intermédiaire', 'Boucliers'],
    weaponProficiencies: ['Armes simples', 'Armes de guerre'],
    toolProficiencies: [],
    skillChoices: {
      choose: 2,
      from: [
        'Soins aux animaux',
        'Athlétisme',
        'Intimidation',
        'Nature',
        'Perception',
        'Survie',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Hache à deux mains (ou n’importe quelle arme de guerre de mêlée)',
          'Deux hachettes (ou n’importe quelle arme simple)',
          'Paquetage d’explorateur',
          'Javelots (4)',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
    hasSpellcasting: false,
    spellcastingType: null,
  },

  // BARDE
  {
    key: 'bard',
    name: 'Barde',
    description:
      'Artiste et aventurier polyvalent, le barde inspire ses alliés, excelle en interactions sociales et manie la magie par la performance.',
    hitDie: 8,
    primaryAbilities: ['Charisme'],
    savingThrows: ['Dextérité', 'Charisme'],
    armorProficiencies: ['Armure légère'],
    weaponProficiencies: [
      'Armes simples',
      'Arbalètes de poing',
      'Épées longues',
      'Rapières',
      'Épées courtes',
    ],
    toolProficiencies: ['Instruments de musique (choisissez-en 3)'],
    skillChoices: {
      choose: 3,
      from: [
        'Acrobaties',
        'Soins aux animaux',
        'Arcanes',
        'Athlétisme',
        'Tromperie',
        'Histoire',
        'Perspicacité',
        'Intimidation',
        'Investigation',
        'Médecine',
        'Nature',
        'Perception',
        'Représentation',
        'Persuasion',
        'Religion',
        'Escamotage',
        'Discrétion',
        'Survie',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Rapière (ou épée longue, ou n’importe quelle arme simple)',
          'Paquetage de diplomate (ou paquetage d’artiste)',
          'Luth (ou n’importe quel instrument de musique)',
          'Armure de cuir',
          'Dague',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
    hasSpellcasting: true,
    spellcastingType: 'full',
  },

  // CLERC
  {
    key: 'cleric',
    name: 'Clerc',
    description:
      'Champion d’une puissance divine, le clerc soigne, protège et soutient le groupe tout en appelant des miracles contre les ennemis.',
    hitDie: 8,
    primaryAbilities: ['Sagesse'],
    savingThrows: ['Sagesse', 'Charisme'],
    armorProficiencies: ['Armure légère', 'Armure intermédiaire', 'Boucliers'],
    weaponProficiencies: ['Armes simples'],
    toolProficiencies: [],
    skillChoices: {
      choose: 2,
      from: ['Histoire', 'Perspicacité', 'Médecine', 'Persuasion', 'Religion'],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Masse (ou marteau de guerre)',
          'Chemise d’écailles (ou armure de cuir, ou cotte de mailles)',
          'Arbalète légère et 20 carreaux (ou n’importe quelle arme simple)',
          'Paquetage de prêtre (ou paquetage d’explorateur)',
          'Bouclier',
          'Symbole sacré',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
    hasSpellcasting: true,
    spellcastingType: 'full',
  },

  // DRUIDE
  {
    key: 'druid',
    name: 'Druide',
    description:
      'Gardien de la nature, le druide manie une magie primordiale et s’adapte à la situation grâce à ses pouvoirs et sa communion avec le vivant.',
    hitDie: 8,
    primaryAbilities: ['Sagesse'],
    savingThrows: ['Intelligence', 'Sagesse'],
    armorProficiencies: [
      'Armure légère (non métallique)',
      'Armure intermédiaire (non métallique)',
      'Boucliers (non métalliques)',
    ],
    weaponProficiencies: [
      'Gourdins',
      'Dagues',
      'Fléchettes',
      'Javelots',
      'Masses',
      'Bâtons',
      'Cimeterres',
      'Faucilles',
      'Frondes',
      'Lances',
    ],
    toolProficiencies: ['Kit d’herboriste'],
    skillChoices: {
      choose: 2,
      from: [
        'Arcanes',
        'Soins aux animaux',
        'Perspicacité',
        'Médecine',
        'Nature',
        'Perception',
        'Religion',
        'Survie',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Bouclier en bois (ou n’importe quelle arme simple)',
          'Cimeterre (ou n’importe quelle arme simple de mêlée)',
          'Paquetage d’explorateur',
          'Focaliseur druidique',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
    hasSpellcasting: true,
    spellcastingType: 'full',
  },

  // GUERRIER
  {
    key: 'fighter',
    name: 'Guerrier',
    description:
      'Maître des armes et des techniques martiales, le guerrier est fiable dans tous les combats et brille par sa polyvalence tactique.',
    hitDie: 10,
    primaryAbilities: ['Force', 'Dextérité'],
    savingThrows: ['Force', 'Constitution'],
    armorProficiencies: ['Toutes les armures', 'Boucliers'],
    weaponProficiencies: ['Armes simples', 'Armes de guerre'],
    toolProficiencies: [],
    skillChoices: {
      choose: 2,
      from: [
        'Acrobaties',
        'Soins aux animaux',
        'Athlétisme',
        'Histoire',
        'Perspicacité',
        'Intimidation',
        'Perception',
        'Survie',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Cotte de mailles (ou armure de cuir, arc long, 20 flèches)',
          'Arme de guerre et bouclier (ou deux armes de guerre)',
          'Arbalète légère et 20 carreaux (ou deux hachettes)',
          'Paquetage d’explorateur de donjons (ou paquetage d’explorateur)',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
    hasSpellcasting: false,
    spellcastingType: null,
  },

  // MOINE
  {
    key: 'monk',
    name: 'Moine',
    description:
      'Combattant discipliné, le moine canalise son énergie intérieure pour frapper vite, se déplacer avec agilité et dépasser les limites du corps.',
    hitDie: 8,
    primaryAbilities: ['Dextérité', 'Sagesse'],
    savingThrows: ['Force', 'Dextérité'],
    armorProficiencies: [],
    weaponProficiencies: ['Armes simples', 'Épées courtes'],
    toolProficiencies: [
      'Outils d’artisan (un type)',
      'Instrument de musique (un)',
    ],
    skillChoices: {
      choose: 2,
      from: [
        'Acrobaties',
        'Athlétisme',
        'Histoire',
        'Perspicacité',
        'Religion',
        'Discrétion',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Épée courte (ou n’importe quelle arme simple)',
          'Paquetage d’explorateur de donjons (ou paquetage d’explorateur)',
          'Fléchettes (10)',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
    hasSpellcasting: false,
    spellcastingType: null,
  },

  // PALADIN
  {
    key: 'paladin',
    name: 'Paladin',
    description:
      'Défenseur sacré lié à un serment, le paladin protège ses alliés, tient la ligne et frappe avec une puissance consacrée.',
    hitDie: 10,
    primaryAbilities: ['Force', 'Charisme'],
    savingThrows: ['Sagesse', 'Charisme'],
    armorProficiencies: ['Toutes les armures', 'Boucliers'],
    weaponProficiencies: ['Armes simples', 'Armes de guerre'],
    toolProficiencies: [],
    skillChoices: {
      choose: 2,
      from: [
        'Athlétisme',
        'Perspicacité',
        'Intimidation',
        'Médecine',
        'Persuasion',
        'Religion',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Arme de guerre et bouclier (ou deux armes de guerre)',
          'Javelots (5) (ou n’importe quelle arme simple de mêlée)',
          'Paquetage de prêtre (ou paquetage d’explorateur)',
          'Cotte de mailles',
          'Symbole sacré',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
    hasSpellcasting: true,
    spellcastingType: 'half',
  },

  // RÔDEUR
  {
    key: 'ranger',
    name: 'Rôdeur',
    description:
      'Éclaireur et chasseur, le rôdeur excelle en exploration, combat à distance ou en mêlée et soutient le groupe par sa survie et sa traque.',
    hitDie: 10,
    primaryAbilities: ['Dextérité', 'Sagesse'],
    savingThrows: ['Force', 'Dextérité'],
    armorProficiencies: ['Armure légère', 'Armure intermédiaire', 'Boucliers'],
    weaponProficiencies: ['Armes simples', 'Armes de guerre'],
    toolProficiencies: [],
    skillChoices: {
      choose: 3,
      from: [
        'Soins aux animaux',
        'Athlétisme',
        'Perspicacité',
        'Investigation',
        'Nature',
        'Perception',
        'Discrétion',
        'Survie',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Chemise d’écailles (ou armure de cuir)',
          'Deux épées courtes (ou deux armes simples de mêlée)',
          'Paquetage d’explorateur de donjons (ou paquetage d’explorateur)',
          'Arc long',
          'Flèches (20)',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
    hasSpellcasting: true,
    spellcastingType: 'half',
  },

  // ROUBLARD
  {
    key: 'rogue',
    name: 'Roublard',
    description:
      'Spécialiste de la discrétion et de la précision, le roublard frappe au bon moment, contourne les obstacles et maîtrise l’infiltration.',
    hitDie: 8,
    primaryAbilities: ['Dextérité'],
    savingThrows: ['Dextérité', 'Intelligence'],
    armorProficiencies: ['Armure légère'],
    weaponProficiencies: [
      'Armes simples',
      'Arbalètes de poing',
      'Épées longues',
      'Rapières',
      'Épées courtes',
    ],
    toolProficiencies: ['Outils de voleur'],
    skillChoices: {
      choose: 4,
      from: [
        'Acrobaties',
        'Athlétisme',
        'Tromperie',
        'Perspicacité',
        'Intimidation',
        'Investigation',
        'Perception',
        'Représentation',
        'Persuasion',
        'Escamotage',
        'Discrétion',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Rapière (ou épée courte)',
          'Arc court et 20 flèches (ou épée courte)',
          'Paquetage de cambrioleur (ou paquetage d’explorateur de donjons, ou paquetage d’explorateur)',
          'Armure de cuir',
          'Dague',
          'Dague',
          'Outils de voleur',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
    hasSpellcasting: false,
    spellcastingType: null,
  },

  // ENSORCELEUR
  {
    key: 'sorcerer',
    name: 'Ensorceleur',
    description:
      'Magicien inné, l’ensorceleur puise sa puissance dans une lignée ou un don naturel et façonne ses sorts avec une magie brute.',
    hitDie: 6,
    primaryAbilities: ['Charisme'],
    savingThrows: ['Constitution', 'Charisme'],
    armorProficiencies: [],
    weaponProficiencies: [
      'Dagues',
      'Fléchettes',
      'Frondes',
      'Bâtons',
      'Arbalètes légères',
    ],
    toolProficiencies: [],
    skillChoices: {
      choose: 2,
      from: [
        'Arcanes',
        'Tromperie',
        'Perspicacité',
        'Intimidation',
        'Persuasion',
        'Religion',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Arbalète légère et 20 carreaux (ou n’importe quelle arme simple)',
          'Bourse à composantes (ou focaliseur arcanique)',
          'Paquetage d’explorateur de donjons (ou paquetage d’explorateur)',
          'Dague',
          'Dague',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
    hasSpellcasting: true,
    spellcastingType: 'full',
  },

  // OCCULTISTE
  {
    key: 'warlock',
    name: 'Occultiste',
    description:
      'Occultiste lié par un pacte, le sorcier (warlock) obtient des pouvoirs surnaturels en échange d’un lien avec une entité mystérieuse.',
    hitDie: 8,
    primaryAbilities: ['Charisme'],
    savingThrows: ['Sagesse', 'Charisme'],
    armorProficiencies: ['Armure légère'],
    weaponProficiencies: ['Armes simples'],
    toolProficiencies: [],
    skillChoices: {
      choose: 2,
      from: [
        'Arcanes',
        'Tromperie',
        'Histoire',
        'Intimidation',
        'Investigation',
        'Nature',
        'Religion',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Arbalète légère et 20 carreaux (ou n’importe quelle arme simple)',
          'Bourse à composantes (ou focaliseur arcanique)',
          'Paquetage d’érudit (ou paquetage d’explorateur de donjons)',
          'Armure de cuir',
          'Arme simple',
          'Dague',
          'Dague',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
    hasSpellcasting: true,
    spellcastingType: 'pact',
  },

  // MAGICIEN
  {
    key: 'wizard',
    name: 'Magicien',
    description:
      'Érudit de l’arcane, le magicien apprend ses sorts par l’étude et adapte sa magie grâce à sa préparation et à son grimoire.',
    hitDie: 6,
    primaryAbilities: ['Intelligence'],
    savingThrows: ['Intelligence', 'Sagesse'],
    armorProficiencies: [],
    weaponProficiencies: [
      'Dagues',
      'Fléchettes',
      'Frondes',
      'Bâtons',
      'Arbalètes légères',
    ],
    toolProficiencies: [],
    skillChoices: {
      choose: 2,
      from: [
        'Arcanes',
        'Histoire',
        'Perspicacité',
        'Investigation',
        'Médecine',
        'Religion',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Bâton (ou dague)',
          'Bourse à composantes (ou focaliseur arcanique)',
          'Paquetage d’érudit (ou paquetage d’explorateur)',
          'Grimoire',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
    hasSpellcasting: true,
    spellcastingType: 'full',
  },
];

export async function seedClasses(prisma: PrismaClient) {
  console.log('🌱 Seeding SRD classes...');

  for (const data of srdClasses) {
    await prisma.class.upsert({
      where: { key: data.key },
      update: {
        name: data.name,
        description: data.description,
        hitDie: data.hitDie,
        primaryAbilities: data.primaryAbilities,
        savingThrows: data.savingThrows,
        armorProficiencies: data.armorProficiencies,
        weaponProficiencies: data.weaponProficiencies,
        toolProficiencies: data.toolProficiencies,
        skillChoices: data.skillChoices,
        equipmentOptions: data.equipmentOptions,
        hasSpellcasting: data.hasSpellcasting,
        spellcastingType: data.spellcastingType,
      },
      create: {
        key: data.key,
        name: data.name,
        description: data.description,
        hitDie: data.hitDie,
        primaryAbilities: data.primaryAbilities,
        savingThrows: data.savingThrows,
        armorProficiencies: data.armorProficiencies,
        weaponProficiencies: data.weaponProficiencies,
        toolProficiencies: data.toolProficiencies,
        skillChoices: data.skillChoices,
        equipmentOptions: data.equipmentOptions,
        hasSpellcasting: data.hasSpellcasting,
        spellcastingType: data.spellcastingType,
      },
    });

    console.log(`  ✅ Class upserted: ${data.key}`);
  }
}
