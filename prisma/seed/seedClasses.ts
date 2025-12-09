import { PrismaClient } from '../../src/generated/prisma/client';

const srdClasses = [
  // BARBARIAN
  {
    key: 'barbarian',
    name: 'Barbarian',
    hitDie: 12,
    primaryAbilities: ['Strength'],
    savingThrows: ['Strength', 'Constitution'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields'],
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    toolProficiencies: [],
    skillChoices: {
      choose: 2,
      from: [
        'Animal Handling',
        'Athletics',
        'Intimidation',
        'Nature',
        'Perception',
        'Survival',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Greataxe (or any martial melee weapon)',
          'Two handaxes (or any simple weapon)',
          'Explorer’s Pack',
          'Javelins (4)',
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

  // BARD
  {
    key: 'bard',
    name: 'Bard',
    hitDie: 8,
    primaryAbilities: ['Charisma'],
    savingThrows: ['Dexterity', 'Charisma'],
    armorProficiencies: ['Light armor'],
    weaponProficiencies: [
      'Simple weapons',
      'Hand crossbows',
      'Longswords',
      'Rapiers',
      'Shortswords',
    ],
    toolProficiencies: ['Musical instruments (choose 3)'],
    skillChoices: {
      choose: 3,
      from: [
        'Acrobatics',
        'Animal Handling',
        'Arcana',
        'Athletics',
        'Deception',
        'History',
        'Insight',
        'Intimidation',
        'Investigation',
        'Medicine',
        'Nature',
        'Perception',
        'Performance',
        'Persuasion',
        'Religion',
        'Sleight of Hand',
        'Stealth',
        'Survival',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Rapier (or longsword or any simple weapon)',
          'Diplomat’s Pack (or Entertainer’s Pack)',
          'Lute (or any musical instrument)',
          'Leather armor',
          'Dagger',
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

  // CLERIC
  {
    key: 'cleric',
    name: 'Cleric',
    hitDie: 8,
    primaryAbilities: ['Wisdom'],
    savingThrows: ['Wisdom', 'Charisma'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields'],
    weaponProficiencies: ['Simple weapons'],
    toolProficiencies: [],
    skillChoices: {
      choose: 2,
      from: ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion'],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Mace (or warhammer)',
          'Scale mail (or leather armor or chain mail)',
          'Light crossbow and 20 bolts (or any simple weapon)',
          'Priest’s Pack (or Explorer’s Pack)',
          'Shield',
          'Holy symbol',
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

  // DRUID
  {
    key: 'druid',
    name: 'Druid',
    hitDie: 8,
    primaryAbilities: ['Wisdom'],
    savingThrows: ['Intelligence', 'Wisdom'],
    armorProficiencies: [
      'Light armor (non-metal)',
      'Medium armor (non-metal)',
      'Shields (non-metal)',
    ],
    weaponProficiencies: [
      'Clubs',
      'Daggers',
      'Darts',
      'Javelins',
      'Maces',
      'Quarterstaffs',
      'Scimitars',
      'Sickles',
      'Slings',
      'Spears',
    ],
    toolProficiencies: ['Herbalism Kit'],
    skillChoices: {
      choose: 2,
      from: [
        'Arcana',
        'Animal Handling',
        'Insight',
        'Medicine',
        'Nature',
        'Perception',
        'Religion',
        'Survival',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Wooden shield (or any simple weapon)',
          'Scimitar (or any simple melee weapon)',
          'Explorer’s Pack',
          'Druidic focus',
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

  // FIGHTER
  {
    key: 'fighter',
    name: 'Fighter',
    hitDie: 10,
    primaryAbilities: ['Strength', 'Dexterity'],
    savingThrows: ['Strength', 'Constitution'],
    armorProficiencies: ['All armor', 'Shields'],
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    toolProficiencies: [],
    skillChoices: {
      choose: 2,
      from: [
        'Acrobatics',
        'Animal Handling',
        'Athletics',
        'History',
        'Insight',
        'Intimidation',
        'Perception',
        'Survival',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Chain mail (or leather armor, longbow, 20 arrows)',
          'Martial weapon and shield (or two martial weapons)',
          'Light crossbow and 20 bolts (or two handaxes)',
          'Dungeoneer’s Pack (or Explorer’s Pack)',
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

  // MONK
  {
    key: 'monk',
    name: 'Monk',
    hitDie: 8,
    primaryAbilities: ['Dexterity', 'Wisdom'],
    savingThrows: ['Strength', 'Dexterity'],
    armorProficiencies: [],
    weaponProficiencies: ['Simple weapons', 'Shortswords'],
    toolProficiencies: [
      'Artisan’s tools (one type)',
      'Musical instrument (one)',
    ],
    skillChoices: {
      choose: 2,
      from: [
        'Acrobatics',
        'Athletics',
        'History',
        'Insight',
        'Religion',
        'Stealth',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Shortsword (or any simple weapon)',
          'Dungeoneer’s Pack (or Explorer’s Pack)',
          '10 darts',
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
    hitDie: 10,
    primaryAbilities: ['Strength', 'Charisma'],
    savingThrows: ['Wisdom', 'Charisma'],
    armorProficiencies: ['All armor', 'Shields'],
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    toolProficiencies: [],
    skillChoices: {
      choose: 2,
      from: [
        'Athletics',
        'Insight',
        'Intimidation',
        'Medicine',
        'Persuasion',
        'Religion',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Martial weapon and shield (or two martial weapons)',
          'Five javelins (or any simple melee weapon)',
          'Priest’s Pack (or Explorer’s Pack)',
          'Chain mail',
          'Holy symbol',
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

  // RANGER
  {
    key: 'ranger',
    name: 'Ranger',
    hitDie: 10,
    primaryAbilities: ['Dexterity', 'Wisdom'],
    savingThrows: ['Strength', 'Dexterity'],
    armorProficiencies: ['Light armor', 'Medium armor', 'Shields'],
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    toolProficiencies: [],
    skillChoices: {
      choose: 3,
      from: [
        'Animal Handling',
        'Athletics',
        'Insight',
        'Investigation',
        'Nature',
        'Perception',
        'Stealth',
        'Survival',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Scale mail (or leather armor)',
          'Two shortswords (or two simple melee weapons)',
          'Dungeoneer’s Pack (or Explorer’s Pack)',
          'Longbow',
          'Arrows (20)',
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

  // ROGUE
  {
    key: 'rogue',
    name: 'Rogue',
    hitDie: 8,
    primaryAbilities: ['Dexterity'],
    savingThrows: ['Dexterity', 'Intelligence'],
    armorProficiencies: ['Light armor'],
    weaponProficiencies: [
      'Simple weapons',
      'Hand crossbows',
      'Longswords',
      'Rapiers',
      'Shortswords',
    ],
    toolProficiencies: ["Thieves' Tools"],
    skillChoices: {
      choose: 4,
      from: [
        'Acrobatics',
        'Athletics',
        'Deception',
        'Insight',
        'Intimidation',
        'Investigation',
        'Perception',
        'Performance',
        'Persuasion',
        'Sleight of Hand',
        'Stealth',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Rapier (or shortsword)',
          'Shortbow and 20 arrows (or shortsword)',
          'Burglar’s Pack (or Dungeoneer’s Pack or Explorer’s Pack)',
          'Leather armor',
          'Dagger',
          'Dagger',
          "Thieves' Tools",
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

  // SORCERER
  {
    key: 'sorcerer',
    name: 'Sorcerer',
    hitDie: 6,
    primaryAbilities: ['Charisma'],
    savingThrows: ['Constitution', 'Charisma'],
    armorProficiencies: [],
    weaponProficiencies: [
      'Daggers',
      'Darts',
      'Slings',
      'Quarterstaffs',
      'Light crossbows',
    ],
    toolProficiencies: [],
    skillChoices: {
      choose: 2,
      from: [
        'Arcana',
        'Deception',
        'Insight',
        'Intimidation',
        'Persuasion',
        'Religion',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Light crossbow and 20 bolts (or any simple weapon)',
          'Component pouch (or arcane focus)',
          'Dungeoneer’s Pack (or Explorer’s Pack)',
          'Dagger',
          'Dagger',
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

  // WARLOCK
  {
    key: 'warlock',
    name: 'Warlock',
    hitDie: 8,
    primaryAbilities: ['Charisma'],
    savingThrows: ['Wisdom', 'Charisma'],
    armorProficiencies: ['Light armor'],
    weaponProficiencies: ['Simple weapons'],
    toolProficiencies: [],
    skillChoices: {
      choose: 2,
      from: [
        'Arcana',
        'Deception',
        'History',
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
          'Light crossbow and 20 bolts (or any simple weapon)',
          'Component pouch (or arcane focus)',
          'Scholar’s Pack (or Dungeoneer’s Pack)',
          'Leather armor',
          'Simple weapon',
          'Dagger',
          'Dagger',
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

  // WIZARD
  {
    key: 'wizard',
    name: 'Wizard',
    hitDie: 6,
    primaryAbilities: ['Intelligence'],
    savingThrows: ['Intelligence', 'Wisdom'],
    armorProficiencies: [],
    weaponProficiencies: [
      'Daggers',
      'Darts',
      'Slings',
      'Quarterstaffs',
      'Light crossbows',
    ],
    toolProficiencies: [],
    skillChoices: {
      choose: 2,
      from: [
        'Arcana',
        'History',
        'Insight',
        'Investigation',
        'Medicine',
        'Religion',
      ],
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        items: [
          'Quarterstaff (or dagger)',
          'Component pouch (or arcane focus)',
          'Scholar’s Pack (or Explorer’s Pack)',
          'Spellbook',
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
