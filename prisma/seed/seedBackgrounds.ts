import { PrismaClient } from '../../src/generated/prisma/client';

const srdBackgrounds = [
  {
    key: 'acolyte',
    name: 'Acolyte',
    abilityScores: ['Intelligence', 'Wisdom', 'Charisma'],
    originFeatKey: 'magic-initiate-cleric',
    skillProficiencies: ['Insight', 'Religion'],
    toolProficiency: {
      type: 'tool',
      value: "Calligrapher's Supplies",
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        gp: 8,
        items: [
          "Calligrapher's Supplies",
          'Book (prayers)',
          'Holy Symbol',
          'Parchment (10 sheets)',
          'Robe',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
  },
  {
    key: 'criminal',
    name: 'Criminal',
    abilityScores: ['Dexterity', 'Constitution', 'Intelligence'],
    originFeatKey: 'alert',
    skillProficiencies: ['Sleight of Hand', 'Stealth'],
    toolProficiency: {
      type: 'tool',
      value: "Thieves' Tools",
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        gp: 16,
        items: [
          'Dagger',
          'Dagger',
          "Thieves' Tools",
          'Crowbar',
          'Pouch',
          'Pouch',
          "Traveler's Clothes",
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
  },
  {
    key: 'sage',
    name: 'Sage',
    abilityScores: ['Constitution', 'Intelligence', 'Wisdom'],
    originFeatKey: 'magic-initiate-wizard',
    skillProficiencies: ['Arcana', 'History'],
    toolProficiency: {
      type: 'tool',
      value: "Calligrapher's Supplies",
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        gp: 8,
        items: [
          'Quarterstaff',
          "Calligrapher's Supplies",
          'Book (history)',
          'Parchment (8 sheets)',
          'Robe',
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
  },
  {
    key: 'soldier',
    name: 'Soldier',
    abilityScores: ['Strength', 'Dexterity', 'Constitution'],
    originFeatKey: 'savage-attacker',
    skillProficiencies: ['Athletics', 'Intimidation'],
    toolProficiency: {
      type: 'gaming-set-choice',
      note: 'Choose one kind of Gaming Set',
    },
    equipmentOptions: {
      optionA: {
        type: 'package',
        gp: 14,
        items: [
          'Spear',
          'Shortbow',
          'Arrows (20)',
          'Gaming Set (chosen)',
          "Healer's Kit",
          'Quiver',
          "Traveler's Clothes",
        ],
      },
      optionB: {
        type: 'gold',
        gp: 50,
      },
    },
  },
];

export async function seedBackgrounds(prisma: PrismaClient) {
  console.log('🌱 Seeding SRD backgrounds...');

  for (const data of srdBackgrounds) {
    await prisma.background.upsert({
      where: { key: data.key },
      update: {
        name: data.name,
        abilityScores: data.abilityScores,
        originFeatKey: data.originFeatKey,
        skillProficiencies: data.skillProficiencies,
        toolProficiency: data.toolProficiency,
        equipmentOptions: data.equipmentOptions,
      },
      create: {
        key: data.key,
        name: data.name,
        abilityScores: data.abilityScores,
        originFeatKey: data.originFeatKey,
        skillProficiencies: data.skillProficiencies,
        toolProficiency: data.toolProficiency,
        equipmentOptions: data.equipmentOptions,
      },
    });

    console.log(`  ✅ Background upserted: ${data.key}`);
  }
}
