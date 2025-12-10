// prisma/seed/seedClassLevels.ts
import { PrismaClient, Prisma } from '../../src/generated/prisma/client';

// ----------------------
// Types de base pour les progressions
// ----------------------

type BaseLevelProgression = {
  level: number;
  proficiencyBonus: number;
  features: string[];
};

// ----------------------
// BARBARIAN 1 → 20 (SRD 5.2 Barbarian Features table)
// ----------------------

type BarbarianLevelProgression = BaseLevelProgression & {
  rages: number;
  rageDamage: number;
  weaponMasteryCount: number;
};

const barbarianLevels: BarbarianLevelProgression[] = [
  {
    level: 1,
    proficiencyBonus: 2,
    features: ['Rage', 'Unarmored Defense', 'Weapon Mastery'],
    rages: 2,
    rageDamage: 2,
    weaponMasteryCount: 2,
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Danger Sense', 'Reckless Attack'],
    rages: 2,
    rageDamage: 2,
    weaponMasteryCount: 2,
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Barbarian Subclass', 'Primal Knowledge'],
    rages: 3,
    rageDamage: 2,
    weaponMasteryCount: 2,
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Ability Score Improvement'],
    rages: 3,
    rageDamage: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Extra Attack', 'Fast Movement'],
    rages: 3,
    rageDamage: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Subclass feature'],
    rages: 4,
    rageDamage: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Feral Instinct', 'Instinctive Pounce'],
    rages: 4,
    rageDamage: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Ability Score Improvement'],
    rages: 4,
    rageDamage: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: ['Brutal Strike'],
    rages: 4,
    rageDamage: 3,
    weaponMasteryCount: 3,
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Subclass feature'],
    rages: 4,
    rageDamage: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: ['Relentless Rage'],
    rages: 4,
    rageDamage: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Ability Score Improvement'],
    rages: 5,
    rageDamage: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: ['Improved Brutal Strike'],
    rages: 5,
    rageDamage: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Subclass feature'],
    rages: 5,
    rageDamage: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Persistent Rage'],
    rages: 5,
    rageDamage: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Ability Score Improvement'],
    rages: 5,
    rageDamage: 4,
    weaponMasteryCount: 4,
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: ['Improved Brutal Strike'],
    rages: 6,
    rageDamage: 4,
    weaponMasteryCount: 4,
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Indomitable Might'],
    rages: 6,
    rageDamage: 4,
    weaponMasteryCount: 4,
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Epic Boon'],
    rages: 6,
    rageDamage: 4,
    weaponMasteryCount: 4,
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Primal Champion'],
    rages: 6,
    rageDamage: 4,
    weaponMasteryCount: 4,
  },
];

// ----------------------
// ROGUE 1 → 20 (SRD 5.2 Rogue Features & Sneak Attack)
// ----------------------

type RogueLevelProgression = BaseLevelProgression & {
  sneakAttackDice: number; // nombre de d6
};

const rogueLevels: RogueLevelProgression[] = [
  {
    level: 1,
    proficiencyBonus: 2,
    features: ['Expertise', 'Sneak Attack', "Thieves' Cant", 'Weapon Mastery'],
    sneakAttackDice: 1,
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Cunning Action'],
    sneakAttackDice: 1,
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Rogue Subclass', 'Steady Aim'],
    sneakAttackDice: 2,
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Ability Score Improvement'],
    sneakAttackDice: 2,
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Cunning Strike', 'Uncanny Dodge'],
    sneakAttackDice: 3,
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Expertise'],
    sneakAttackDice: 3,
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Evasion', 'Reliable Talent'],
    sneakAttackDice: 4,
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Ability Score Improvement'],
    sneakAttackDice: 4,
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: ['Subclass feature'],
    sneakAttackDice: 5,
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Ability Score Improvement'],
    sneakAttackDice: 5,
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: ['Improved Cunning Strike'],
    sneakAttackDice: 6,
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Ability Score Improvement'],
    sneakAttackDice: 6,
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: ['Subclass feature'],
    sneakAttackDice: 7,
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Devious Strikes'],
    sneakAttackDice: 7,
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Slippery Mind'],
    sneakAttackDice: 8,
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Ability Score Improvement'],
    sneakAttackDice: 8,
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: ['Subclass feature'],
    sneakAttackDice: 9,
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Elusive'],
    sneakAttackDice: 9,
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Epic Boon'],
    sneakAttackDice: 10,
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Stroke of Luck'],
    sneakAttackDice: 10,
  },
];

// ----------------------
// RANGER 1 → 20 (SRD 5.2 Ranger Features table)
// ----------------------

type RangerLevelProgression = BaseLevelProgression & {
  favoredEnemyUses: number; // Favored Enemy column = Hunter's Mark sans slot
  preparedSpells: number;
  spellSlots: [number, number, number, number, number]; // 1→5
};

const rangerLevels: RangerLevelProgression[] = [
  {
    level: 1,
    proficiencyBonus: 2,
    features: ['Spellcasting', 'Favored Enemy', 'Weapon Mastery'],
    favoredEnemyUses: 2,
    preparedSpells: 2,
    spellSlots: [2, 0, 0, 0, 0],
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Deft Explorer', 'Fighting Style'],
    favoredEnemyUses: 2,
    preparedSpells: 3,
    spellSlots: [2, 0, 0, 0, 0],
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Ranger Subclass'],
    favoredEnemyUses: 2,
    preparedSpells: 4,
    spellSlots: [3, 0, 0, 0, 0],
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Ability Score Improvement'],
    favoredEnemyUses: 2,
    preparedSpells: 5,
    spellSlots: [3, 0, 0, 0, 0],
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Extra Attack'],
    favoredEnemyUses: 3,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0],
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Roving'],
    favoredEnemyUses: 3,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0],
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Subclass feature'],
    favoredEnemyUses: 3,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0],
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Ability Score Improvement'],
    favoredEnemyUses: 3,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0],
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: ['Expertise'],
    favoredEnemyUses: 4,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0],
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Tireless'],
    favoredEnemyUses: 4,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0],
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: ['Subclass feature'],
    favoredEnemyUses: 4,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0],
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Ability Score Improvement'],
    favoredEnemyUses: 4,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0],
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: ['Relentless Hunter'],
    favoredEnemyUses: 5,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0],
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ["Nature's Veil"],
    favoredEnemyUses: 5,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0],
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Subclass feature'],
    favoredEnemyUses: 5,
    preparedSpells: 12,
    spellSlots: [4, 3, 3, 2, 0],
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Ability Score Improvement'],
    favoredEnemyUses: 5,
    preparedSpells: 12,
    spellSlots: [4, 3, 3, 2, 0],
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: ['Precise Hunter'],
    favoredEnemyUses: 6,
    preparedSpells: 14,
    spellSlots: [4, 3, 3, 3, 1],
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Feral Senses'],
    favoredEnemyUses: 6,
    preparedSpells: 14,
    spellSlots: [4, 3, 3, 3, 1],
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Epic Boon'],
    favoredEnemyUses: 6,
    preparedSpells: 15,
    spellSlots: [4, 3, 3, 3, 2],
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Foe Slayer'],
    favoredEnemyUses: 6,
    preparedSpells: 15,
    spellSlots: [4, 3, 3, 3, 2],
  },
];

// ----------------------
// PALADIN 1 → 20 (SRD 5.2 Paladin Features table)
// ----------------------

type PaladinLevelProgression = BaseLevelProgression & {
  channelDivinityUses: number;
  preparedSpells: number;
  spellSlots: [number, number, number, number, number]; // 1→5
};

const paladinLevels: PaladinLevelProgression[] = [
  {
    level: 1,
    proficiencyBonus: 2,
    features: ['Lay On Hands', 'Spellcasting', 'Weapon Mastery'],
    channelDivinityUses: 0,
    preparedSpells: 2,
    spellSlots: [2, 0, 0, 0, 0],
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Fighting Style', "Paladin's Smite"],
    channelDivinityUses: 0,
    preparedSpells: 3,
    spellSlots: [2, 0, 0, 0, 0],
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Channel Divinity', 'Paladin Subclass'],
    channelDivinityUses: 2,
    preparedSpells: 4,
    spellSlots: [3, 0, 0, 0, 0],
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Ability Score Improvement'],
    channelDivinityUses: 2,
    preparedSpells: 5,
    spellSlots: [3, 0, 0, 0, 0],
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Extra Attack', 'Faithful Steed'],
    channelDivinityUses: 2,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0],
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Aura of Protection'],
    channelDivinityUses: 2,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0],
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Subclass feature'],
    channelDivinityUses: 2,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0],
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Ability Score Improvement'],
    channelDivinityUses: 2,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0],
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: ['Abjure Foes'],
    channelDivinityUses: 2,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0],
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Aura of Courage'],
    channelDivinityUses: 2,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0],
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: ['Radiant Strikes'],
    channelDivinityUses: 3,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0],
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Ability Score Improvement'],
    channelDivinityUses: 3,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0],
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: [],
    channelDivinityUses: 3,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0],
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Restoring Touch'],
    channelDivinityUses: 3,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0],
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Subclass feature'],
    channelDivinityUses: 3,
    preparedSpells: 12,
    spellSlots: [4, 3, 3, 2, 0],
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Ability Score Improvement'],
    channelDivinityUses: 3,
    preparedSpells: 12,
    spellSlots: [4, 3, 3, 2, 0],
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: [],
    channelDivinityUses: 3,
    preparedSpells: 14,
    spellSlots: [4, 3, 3, 3, 1],
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Aura Expansion'],
    channelDivinityUses: 3,
    preparedSpells: 14,
    spellSlots: [4, 3, 3, 3, 1],
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Epic Boon'],
    channelDivinityUses: 3,
    preparedSpells: 15,
    spellSlots: [4, 3, 3, 3, 2],
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Subclass feature'],
    channelDivinityUses: 3,
    preparedSpells: 15,
    spellSlots: [4, 3, 3, 3, 2],
  },
];

// ----------------------
// BARD 1 → 20 (SRD 5.2 Bard Features table)
// ----------------------

type BardLevelProgression = BaseLevelProgression & {
  bardicDie: number; // taille du dé (6, 8, 10, 12)
  preparedSpells: number;
  spellSlots: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ]; // 1→9
};

const bardLevels: BardLevelProgression[] = [
  {
    level: 1,
    proficiencyBonus: 2,
    features: ['Bardic Inspiration', 'Spellcasting'],
    bardicDie: 6,
    preparedSpells: 4,
    spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Expertise', 'Jack of All Trades'],
    bardicDie: 6,
    preparedSpells: 5,
    spellSlots: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Bard Subclass'],
    bardicDie: 6,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Ability Score Improvement'],
    bardicDie: 6,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Font of Inspiration'],
    bardicDie: 8,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Subclass feature'],
    bardicDie: 8,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Countercharm'],
    bardicDie: 8,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0, 0, 0, 0, 0],
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Ability Score Improvement'],
    bardicDie: 8,
    preparedSpells: 12,
    spellSlots: [4, 3, 3, 2, 0, 0, 0, 0, 0],
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: ['Expertise'],
    bardicDie: 8,
    preparedSpells: 14,
    spellSlots: [4, 3, 3, 3, 1, 0, 0, 0, 0],
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Magical Secrets'],
    bardicDie: 10,
    preparedSpells: 15,
    spellSlots: [4, 3, 3, 3, 2, 0, 0, 0, 0],
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: [],
    bardicDie: 10,
    preparedSpells: 16,
    spellSlots: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Ability Score Improvement'],
    bardicDie: 10,
    preparedSpells: 16,
    spellSlots: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: [],
    bardicDie: 10,
    preparedSpells: 17,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Subclass feature'],
    bardicDie: 10,
    preparedSpells: 17,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: [],
    bardicDie: 12,
    preparedSpells: 18,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Ability Score Improvement'],
    bardicDie: 12,
    preparedSpells: 18,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: [],
    bardicDie: 12,
    preparedSpells: 19,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 1],
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Superior Inspiration'],
    bardicDie: 12,
    preparedSpells: 20,
    spellSlots: [4, 3, 3, 3, 3, 1, 1, 1, 1],
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Epic Boon'],
    bardicDie: 12,
    preparedSpells: 21,
    spellSlots: [4, 3, 3, 3, 3, 2, 1, 1, 1],
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Words of Creation'],
    bardicDie: 12,
    preparedSpells: 22,
    spellSlots: [4, 3, 3, 3, 3, 2, 2, 1, 1],
  },
];

// ----------------------
// CLERIC 1 → 20 (SRD 5.2 Cleric Features table)
// ----------------------

type ClericLevelProgression = BaseLevelProgression & {
  channelDivinityUses: number; // colonne "Channel Divinity" (— = 0)
  cantrips: number; // colonne "Cantrips"
  preparedSpells: number; // colonne "Prepared Spells"
  spellSlots: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ]; // 1→9
};

const clericLevels: ClericLevelProgression[] = [
  {
    level: 1,
    proficiencyBonus: 2,
    features: ['Spellcasting', 'Divine Order'],
    channelDivinityUses: 0,
    cantrips: 3,
    preparedSpells: 4,
    spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Channel Divinity'],
    channelDivinityUses: 2,
    cantrips: 3,
    preparedSpells: 5,
    spellSlots: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Cleric Subclass'],
    channelDivinityUses: 2,
    cantrips: 3,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Ability Score Improvement'],
    channelDivinityUses: 2,
    cantrips: 4,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Sear Undead'],
    channelDivinityUses: 2,
    cantrips: 4,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Subclass feature'],
    channelDivinityUses: 3,
    cantrips: 4,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Blessed Strikes'],
    channelDivinityUses: 3,
    cantrips: 4,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0, 0, 0, 0, 0],
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Ability Score Improvement'],
    channelDivinityUses: 3,
    cantrips: 4,
    preparedSpells: 12,
    spellSlots: [4, 3, 3, 2, 0, 0, 0, 0, 0],
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: [],
    channelDivinityUses: 3,
    cantrips: 4,
    preparedSpells: 14,
    spellSlots: [4, 3, 3, 3, 1, 0, 0, 0, 0],
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Divine Intervention'],
    channelDivinityUses: 3,
    cantrips: 5,
    preparedSpells: 15,
    spellSlots: [4, 3, 3, 3, 2, 0, 0, 0, 0],
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: [],
    channelDivinityUses: 3,
    cantrips: 5,
    preparedSpells: 16,
    spellSlots: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Ability Score Improvement'],
    channelDivinityUses: 3,
    cantrips: 5,
    preparedSpells: 16,
    spellSlots: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: [],
    channelDivinityUses: 3,
    cantrips: 5,
    preparedSpells: 17,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Improved Blessed Strikes'],
    channelDivinityUses: 3,
    cantrips: 5,
    preparedSpells: 17,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: [],
    channelDivinityUses: 3,
    cantrips: 5,
    preparedSpells: 18,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Ability Score Improvement'],
    channelDivinityUses: 3,
    cantrips: 5,
    preparedSpells: 18,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: ['Subclass feature'],
    channelDivinityUses: 3,
    cantrips: 5,
    preparedSpells: 19,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 1],
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: [],
    channelDivinityUses: 4,
    cantrips: 5,
    preparedSpells: 20,
    spellSlots: [4, 3, 3, 3, 3, 1, 1, 1, 1],
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Epic Boon'],
    channelDivinityUses: 4,
    cantrips: 5,
    preparedSpells: 21,
    spellSlots: [4, 3, 3, 3, 3, 2, 1, 1, 1],
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Greater Divine Intervention'],
    channelDivinityUses: 4,
    cantrips: 5,
    preparedSpells: 22,
    spellSlots: [4, 3, 3, 3, 3, 2, 2, 1, 1],
  },
];

// ----------------------
// DRUID 1 → 20 (SRD 5.2 / Druid Features table)
// ----------------------

type DruidLevelProgression = BaseLevelProgression & {
  wildShapeUses: number; // colonne "Wild Shape" (- = 0)
  cantrips: number; // colonne "Cantrips"
  preparedSpells: number; // colonne "Prepared Spells"
  spellSlots: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ]; // 1→9
};

const druidLevels: DruidLevelProgression[] = [
  {
    level: 1,
    proficiencyBonus: 2,
    features: ['Spellcasting', 'Druidic', 'Primal Order'],
    wildShapeUses: 0, // "-"
    cantrips: 2,
    preparedSpells: 4,
    spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Wild Shape', 'Wild Companion'],
    wildShapeUses: 2,
    cantrips: 2,
    preparedSpells: 5,
    spellSlots: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Druid Subclass'],
    wildShapeUses: 2,
    cantrips: 2,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Ability Score Improvement'],
    wildShapeUses: 2,
    cantrips: 3,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Wild Resurgence'],
    wildShapeUses: 2,
    cantrips: 3,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Subclass Feature'],
    wildShapeUses: 3,
    cantrips: 3,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Elemental Fury'],
    wildShapeUses: 3,
    cantrips: 3,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0, 0, 0, 0, 0],
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Ability Score Improvement'],
    wildShapeUses: 3,
    cantrips: 3,
    preparedSpells: 12,
    spellSlots: [4, 3, 3, 2, 0, 0, 0, 0, 0],
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: [],
    wildShapeUses: 3,
    cantrips: 3,
    preparedSpells: 14,
    spellSlots: [4, 3, 3, 3, 1, 0, 0, 0, 0],
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Subclass Feature'],
    wildShapeUses: 3,
    cantrips: 4,
    preparedSpells: 15,
    spellSlots: [4, 3, 3, 3, 2, 0, 0, 0, 0],
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: [],
    wildShapeUses: 3,
    cantrips: 4,
    preparedSpells: 16,
    spellSlots: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Ability Score Improvement'],
    wildShapeUses: 3,
    cantrips: 4,
    preparedSpells: 16,
    spellSlots: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: [],
    wildShapeUses: 3,
    cantrips: 4,
    preparedSpells: 17,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Subclass Feature'],
    wildShapeUses: 3,
    cantrips: 4,
    preparedSpells: 17,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Improved Elemental Fury'],
    wildShapeUses: 3,
    cantrips: 4,
    preparedSpells: 18,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Ability Score Improvement'],
    wildShapeUses: 3,
    cantrips: 4,
    preparedSpells: 18,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: [],
    wildShapeUses: 4,
    cantrips: 4,
    preparedSpells: 19,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 1],
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Beast Spells'],
    wildShapeUses: 4,
    cantrips: 4,
    preparedSpells: 20,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 1],
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Epic Boon'],
    wildShapeUses: 4,
    cantrips: 4,
    preparedSpells: 21,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 1],
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Archdruid'],
    wildShapeUses: 4,
    cantrips: 4,
    preparedSpells: 22,
    spellSlots: [4, 3, 3, 3, 2, 2, 1, 1, 1],
  },
];

// ----------------------
// MONK 1 → 20 (SRD 5.2 Monk Features table)
// ----------------------

type MonkLevelProgression = BaseLevelProgression & {
  martialArtsDie: string; // "1d6", "1d8", "1d10", "1d12"
  focusPoints: number; // colonne Focus Points ("—" = 0)
  unarmoredMovementBonusFt: number; // bonus de vitesse en pieds ("—" = 0)
};

const monkLevels: MonkLevelProgression[] = [
  {
    level: 1,
    proficiencyBonus: 2,
    features: ['Martial Arts', 'Unarmored Defense'],
    martialArtsDie: '1d6',
    focusPoints: 0, // "—"
    unarmoredMovementBonusFt: 0, // "—"
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ["Monk's Focus", 'Unarmored Movement', 'Uncanny Metabolism'],
    martialArtsDie: '1d6',
    focusPoints: 2,
    unarmoredMovementBonusFt: 10,
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Deflect Attacks', 'Monk Subclass'],
    martialArtsDie: '1d6',
    focusPoints: 3,
    unarmoredMovementBonusFt: 10,
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Ability Score Improvement', 'Slow Fall'],
    martialArtsDie: '1d6',
    focusPoints: 4,
    unarmoredMovementBonusFt: 10,
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Extra Attack', 'Stunning Strike'],
    martialArtsDie: '1d8',
    focusPoints: 5,
    unarmoredMovementBonusFt: 10,
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Empowered Strikes', 'Subclass feature'],
    martialArtsDie: '1d8',
    focusPoints: 6,
    unarmoredMovementBonusFt: 15,
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Evasion'],
    martialArtsDie: '1d8',
    focusPoints: 7,
    unarmoredMovementBonusFt: 15,
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Ability Score Improvement'],
    martialArtsDie: '1d8',
    focusPoints: 8,
    unarmoredMovementBonusFt: 15,
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: ['Acrobatic Movement'],
    martialArtsDie: '1d8',
    focusPoints: 9,
    unarmoredMovementBonusFt: 15,
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Heightened Focus', 'Self-Restoration'],
    martialArtsDie: '1d8',
    focusPoints: 10,
    unarmoredMovementBonusFt: 20,
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: ['Subclass feature'],
    martialArtsDie: '1d10',
    focusPoints: 11,
    unarmoredMovementBonusFt: 20,
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Ability Score Improvement'],
    martialArtsDie: '1d10',
    focusPoints: 12,
    unarmoredMovementBonusFt: 20,
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: ['Deflect Energy'],
    martialArtsDie: '1d10',
    focusPoints: 13,
    unarmoredMovementBonusFt: 20,
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Disciplined Survivor'],
    martialArtsDie: '1d10',
    focusPoints: 14,
    unarmoredMovementBonusFt: 25,
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Perfect Focus'],
    martialArtsDie: '1d10',
    focusPoints: 15,
    unarmoredMovementBonusFt: 25,
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Ability Score Improvement'],
    martialArtsDie: '1d10',
    focusPoints: 16,
    unarmoredMovementBonusFt: 25,
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: ['Subclass feature'],
    martialArtsDie: '1d12',
    focusPoints: 17,
    unarmoredMovementBonusFt: 25,
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Superior Defense'],
    martialArtsDie: '1d12',
    focusPoints: 18,
    unarmoredMovementBonusFt: 30,
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Epic Boon'],
    martialArtsDie: '1d12',
    focusPoints: 19,
    unarmoredMovementBonusFt: 30,
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Body and Mind'],
    martialArtsDie: '1d12',
    focusPoints: 20,
    unarmoredMovementBonusFt: 30,
  },
];

// ----------------------
// FIGHTER 1 → 20 (Fighter Features table 2024)
// ----------------------

type FighterLevelProgression = BaseLevelProgression & {
  secondWindUses: number; // colonne "Second Wind"
  weaponMasteryCount: number; // colonne "Weapon Mastery"
};

const fighterLevels: FighterLevelProgression[] = [
  {
    level: 1,
    proficiencyBonus: 2,
    features: ['Fighting Style', 'Second Wind', 'Weapon Mastery'],
    secondWindUses: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Action Surge (one use)', 'Tactical Mind'],
    secondWindUses: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Fighter Subclass'],
    secondWindUses: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Ability Score Improvement'],
    secondWindUses: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Extra Attack', 'Tactical Shift'],
    secondWindUses: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Ability Score Improvement'],
    secondWindUses: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Subclass feature'],
    secondWindUses: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Ability Score Improvement'],
    secondWindUses: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: ['Indomitable (one use)', 'Tactical Master'],
    secondWindUses: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Subclass feature'],
    secondWindUses: 4,
    weaponMasteryCount: 5,
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: ['Two Extra Attacks'],
    secondWindUses: 4,
    weaponMasteryCount: 5,
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Ability Score Improvement'],
    secondWindUses: 4,
    weaponMasteryCount: 5,
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: ['Indomitable (two uses)', 'Studied Attacks'],
    secondWindUses: 4,
    weaponMasteryCount: 5,
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Ability Score Improvement'],
    secondWindUses: 4,
    weaponMasteryCount: 5,
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Subclass feature'],
    secondWindUses: 4,
    weaponMasteryCount: 5,
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Ability Score Improvement'],
    secondWindUses: 4,
    weaponMasteryCount: 6,
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: ['Action Surge (two uses)', 'Indomitable (three uses)'],
    secondWindUses: 4,
    weaponMasteryCount: 6,
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Subclass feature'],
    secondWindUses: 4,
    weaponMasteryCount: 6,
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Epic Boon'],
    secondWindUses: 4,
    weaponMasteryCount: 6,
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Three Extra Attacks'],
    secondWindUses: 4,
    weaponMasteryCount: 6,
  },
];

// ----------------------
// SORCERER 1 → 20 (Sorcerer Features table, SRD 5.2)
// ----------------------

type SorcererLevelProgression = BaseLevelProgression & {
  sorceryPoints: number; // colonne "Sorcery Points" ("—" = 0)
  cantrips: number; // colonne "Cantrips"
  preparedSpells: number; // colonne "Prepared Spells"
  spellSlots: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ]; // 1→9
};

const sorcererLevels: SorcererLevelProgression[] = [
  {
    level: 1,
    proficiencyBonus: 2,
    features: ['Spellcasting', 'Innate Sorcery'],
    sorceryPoints: 0, // "—"
    cantrips: 4,
    preparedSpells: 2,
    spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Font of Magic', 'Metamagic'],
    sorceryPoints: 2,
    cantrips: 4,
    preparedSpells: 4,
    spellSlots: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Sorcerer Subclass'],
    sorceryPoints: 3,
    cantrips: 4,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Ability Score Improvement'],
    sorceryPoints: 4,
    cantrips: 5,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Sorcerous Restoration'],
    sorceryPoints: 5,
    cantrips: 5,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Subclass feature'],
    sorceryPoints: 6,
    cantrips: 5,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Sorcery Incarnate'],
    sorceryPoints: 7,
    cantrips: 5,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0, 0, 0, 0, 0],
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Ability Score Improvement'],
    sorceryPoints: 8,
    cantrips: 5,
    preparedSpells: 12,
    spellSlots: [4, 3, 3, 2, 0, 0, 0, 0, 0],
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: [],
    sorceryPoints: 9,
    cantrips: 5,
    preparedSpells: 14,
    spellSlots: [4, 3, 3, 3, 1, 0, 0, 0, 0],
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Metamagic'],
    sorceryPoints: 10,
    cantrips: 6,
    preparedSpells: 15,
    spellSlots: [4, 3, 3, 3, 2, 0, 0, 0, 0],
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: [],
    sorceryPoints: 11,
    cantrips: 6,
    preparedSpells: 16,
    spellSlots: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Ability Score Improvement'],
    sorceryPoints: 12,
    cantrips: 6,
    preparedSpells: 16,
    spellSlots: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: [],
    sorceryPoints: 13,
    cantrips: 6,
    preparedSpells: 17,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Subclass feature'],
    sorceryPoints: 14,
    cantrips: 6,
    preparedSpells: 17,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: [],
    sorceryPoints: 15,
    cantrips: 6,
    preparedSpells: 18,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Ability Score Improvement'],
    sorceryPoints: 16,
    cantrips: 6,
    preparedSpells: 18,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: ['Metamagic'],
    sorceryPoints: 17,
    cantrips: 6,
    preparedSpells: 19,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 1],
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Subclass feature'],
    sorceryPoints: 18,
    cantrips: 6,
    preparedSpells: 20,
    spellSlots: [4, 3, 3, 3, 3, 1, 1, 1, 1],
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Epic Boon'],
    sorceryPoints: 19,
    cantrips: 6,
    preparedSpells: 21,
    spellSlots: [4, 3, 3, 3, 3, 2, 1, 1, 1],
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Arcane Apotheosis'],
    sorceryPoints: 20,
    cantrips: 6,
    preparedSpells: 22,
    spellSlots: [4, 3, 3, 3, 3, 2, 2, 1, 1],
  },
];

// ----------------------
// WARLOCK 1 → 20 (Warlock Features table, SRD 5.2)
// ----------------------

type WarlockLevelProgression = BaseLevelProgression & {
  invocations: number; // Eldritch Invocations
  cantrips: number; // Cantrips
  preparedSpells: number; // Prepared Spells
  spellSlots: number; // Spell Slots
  slotLevel: number; // Slot Level (1–5)
};

const warlockLevels: WarlockLevelProgression[] = [
  {
    level: 1,
    proficiencyBonus: 2,
    features: ['Eldritch Invocations', 'Pact Magic'],
    invocations: 1,
    cantrips: 2,
    preparedSpells: 2,
    spellSlots: 1,
    slotLevel: 1,
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Magical Cunning'],
    invocations: 3,
    cantrips: 2,
    preparedSpells: 3,
    spellSlots: 2,
    slotLevel: 1,
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Warlock Subclass'],
    invocations: 3,
    cantrips: 2,
    preparedSpells: 4,
    spellSlots: 2,
    slotLevel: 2,
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Ability Score Improvement'],
    invocations: 3,
    cantrips: 3,
    preparedSpells: 5,
    spellSlots: 2,
    slotLevel: 2,
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: [],
    invocations: 5,
    cantrips: 3,
    preparedSpells: 6,
    spellSlots: 2,
    slotLevel: 3,
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Subclass feature'],
    invocations: 5,
    cantrips: 3,
    preparedSpells: 7,
    spellSlots: 2,
    slotLevel: 3,
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: [],
    invocations: 6,
    cantrips: 3,
    preparedSpells: 8,
    spellSlots: 2,
    slotLevel: 4,
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Ability Score Improvement'],
    invocations: 6,
    cantrips: 3,
    preparedSpells: 9,
    spellSlots: 2,
    slotLevel: 4,
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: ['Contact Patron'],
    invocations: 7,
    cantrips: 3,
    preparedSpells: 10,
    spellSlots: 2,
    slotLevel: 5,
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Subclass feature'],
    invocations: 7,
    cantrips: 4,
    preparedSpells: 10,
    spellSlots: 2,
    slotLevel: 5,
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: ['Mystic Arcanum (level 6 spell)'],
    invocations: 7,
    cantrips: 4,
    preparedSpells: 11,
    spellSlots: 3,
    slotLevel: 5,
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Ability Score Improvement'],
    invocations: 8,
    cantrips: 4,
    preparedSpells: 11,
    spellSlots: 3,
    slotLevel: 5,
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: ['Mystic Arcanum (level 7 spell)'],
    invocations: 8,
    cantrips: 4,
    preparedSpells: 12,
    spellSlots: 3,
    slotLevel: 5,
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Subclass feature'],
    invocations: 8,
    cantrips: 4,
    preparedSpells: 12,
    spellSlots: 3,
    slotLevel: 5,
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Mystic Arcanum (level 8 spell)'],
    invocations: 9,
    cantrips: 4,
    preparedSpells: 13,
    spellSlots: 3,
    slotLevel: 5,
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Ability Score Improvement'],
    invocations: 9,
    cantrips: 4,
    preparedSpells: 13,
    spellSlots: 3,
    slotLevel: 5,
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: ['Mystic Arcanum (level 9 spell)'],
    invocations: 9,
    cantrips: 4,
    preparedSpells: 14,
    spellSlots: 4,
    slotLevel: 5,
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: [],
    invocations: 10,
    cantrips: 4,
    preparedSpells: 14,
    spellSlots: 4,
    slotLevel: 5,
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Epic Boon'],
    invocations: 10,
    cantrips: 4,
    preparedSpells: 15,
    spellSlots: 4,
    slotLevel: 5,
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Eldritch Master'],
    invocations: 10,
    cantrips: 4,
    preparedSpells: 15,
    spellSlots: 4,
    slotLevel: 5,
  },
];

// ----------------------
// WIZARD 1 → 20 (Wizard Features table, SRD 5.2)
// ----------------------

type WizardLevelProgression = BaseLevelProgression & {
  cantrips: number;
  preparedSpells: number;
  spellSlots: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ]; // 1→9
};

const wizardLevels: WizardLevelProgression[] = [
  {
    level: 1,
    proficiencyBonus: 2,
    features: ['Spellcasting', 'Ritual Adept', 'Arcane Recovery'],
    cantrips: 3,
    preparedSpells: 4,
    spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Scholar'],
    cantrips: 3,
    preparedSpells: 5,
    spellSlots: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Wizard Subclass'],
    cantrips: 3,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Ability Score Improvement'],
    cantrips: 4,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Memorize Spell'],
    cantrips: 4,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Subclass Feature'],
    cantrips: 4,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: [],
    cantrips: 4,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0, 0, 0, 0, 0],
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Ability Score Improvement'],
    cantrips: 4,
    preparedSpells: 12,
    spellSlots: [4, 3, 3, 2, 0, 0, 0, 0, 0],
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: [],
    cantrips: 4,
    preparedSpells: 14,
    spellSlots: [4, 3, 3, 3, 1, 0, 0, 0, 0],
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Subclass Feature'],
    cantrips: 5,
    preparedSpells: 15,
    spellSlots: [4, 3, 3, 3, 2, 0, 0, 0, 0],
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: [],
    cantrips: 5,
    preparedSpells: 16,
    spellSlots: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Ability Score Improvement'],
    cantrips: 5,
    preparedSpells: 16,
    spellSlots: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: [],
    cantrips: 5,
    preparedSpells: 17,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Subclass Feature'],
    cantrips: 5,
    preparedSpells: 18,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: [],
    cantrips: 5,
    preparedSpells: 19,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Ability Score Improvement'],
    cantrips: 5,
    preparedSpells: 21,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: [],
    cantrips: 5,
    preparedSpells: 22,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 1],
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Spell Mastery'],
    cantrips: 5,
    preparedSpells: 23,
    spellSlots: [4, 3, 3, 3, 3, 1, 1, 1, 1],
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Epic Boon'],
    cantrips: 5,
    preparedSpells: 24,
    spellSlots: [4, 3, 3, 3, 3, 2, 1, 1, 1],
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Signature Spells'],
    cantrips: 5,
    preparedSpells: 25,
    spellSlots: [4, 3, 3, 3, 3, 2, 2, 1, 1],
  },
];

// ----------------------
// Fonction générique pour le seed
// ----------------------

type LevelProgression = BaseLevelProgression & Record<string, unknown>;

async function seedClassLevelsGeneric<T extends LevelProgression>(
  prisma: PrismaClient,
  className: string,
  classDisplayName: string,
  levels: T[],
  getProgression: (level: T) => Prisma.InputJsonValue,
  logFormatter?: (level: T) => string,
) {
  console.log(`🌱 Seeding ClassLevels: ${classDisplayName}…`);

  const classRecord = await prisma.class.findUnique({
    where: { key: className },
  });

  if (!classRecord) {
    console.warn(
      `⚠️ Impossible de seeder ${classDisplayName} ClassLevels: classe "${className}" introuvable. Assure-toi que seedClasses est exécuté avant.`,
    );
    return;
  }

  for (const lvl of levels) {
    await prisma.classLevel.upsert({
      where: {
        classId_level: {
          classId: classRecord.id,
          level: lvl.level,
        },
      },
      update: {
        proficiencyBonus: lvl.proficiencyBonus,
        features: lvl.features,
        progression: getProgression(lvl),
      },
      create: {
        classId: classRecord.id,
        level: lvl.level,
        proficiencyBonus: lvl.proficiencyBonus,
        features: lvl.features,
        progression: getProgression(lvl),
      },
    });

    if (logFormatter) {
      console.log(
        `  ✅ ${classDisplayName} level ${lvl.level} ${logFormatter(lvl)}`,
      );
    }
  }
}

// ----------------------
// Fonctions de seed par classe
// ----------------------

async function seedBarbarianLevels(prisma: PrismaClient) {
  await seedClassLevelsGeneric(
    prisma,
    'barbarian',
    'Barbarian',
    barbarianLevels,
    (lvl) => ({
      rages: lvl.rages,
      rageDamage: lvl.rageDamage,
      weaponMasteryCount: lvl.weaponMasteryCount,
    }),
  );
}

async function seedRogueLevels(prisma: PrismaClient) {
  await seedClassLevelsGeneric(
    prisma,
    'rogue',
    'Rogue',
    rogueLevels,
    (lvl) => ({
      sneakAttackDice: lvl.sneakAttackDice,
    }),
  );
}

async function seedRangerLevels(prisma: PrismaClient) {
  await seedClassLevelsGeneric(
    prisma,
    'ranger',
    'Ranger',
    rangerLevels,
    (lvl) => ({
      favoredEnemyUses: lvl.favoredEnemyUses,
      preparedSpells: lvl.preparedSpells,
      spellSlots: lvl.spellSlots,
    }),
  );
}

async function seedPaladinLevels(prisma: PrismaClient) {
  await seedClassLevelsGeneric(
    prisma,
    'paladin',
    'Paladin',
    paladinLevels,
    (lvl) => ({
      channelDivinityUses: lvl.channelDivinityUses,
      preparedSpells: lvl.preparedSpells,
      spellSlots: lvl.spellSlots,
    }),
  );
}

async function seedBardLevels(prisma: PrismaClient) {
  await seedClassLevelsGeneric(
    prisma,
    'bard',
    'Bard',
    bardLevels,
    (lvl) => ({
      bardicDie: lvl.bardicDie,
      preparedSpells: lvl.preparedSpells,
      spellSlots: lvl.spellSlots,
    }),
    (lvl) =>
      `(PB +${lvl.proficiencyBonus}, d${lvl.bardicDie}, prepared ${lvl.preparedSpells})`,
  );
}

async function seedClericLevels(prisma: PrismaClient) {
  await seedClassLevelsGeneric(
    prisma,
    'cleric',
    'Cleric',
    clericLevels,
    (lvl) => ({
      channelDivinityUses: lvl.channelDivinityUses,
      cantrips: lvl.cantrips,
      preparedSpells: lvl.preparedSpells,
      spellSlots: lvl.spellSlots,
    }),
    (lvl) =>
      `(PB +${lvl.proficiencyBonus}, CD ${lvl.channelDivinityUses}, cantrips ${lvl.cantrips}, prepared ${lvl.preparedSpells})`,
  );
}

async function seedDruidLevels(prisma: PrismaClient) {
  await seedClassLevelsGeneric(
    prisma,
    'druid',
    'Druid',
    druidLevels,
    (lvl) => ({
      wildShapeUses: lvl.wildShapeUses,
      cantrips: lvl.cantrips,
      preparedSpells: lvl.preparedSpells,
      spellSlots: lvl.spellSlots,
    }),
    (lvl) =>
      `(PB +${lvl.proficiencyBonus}, WS ${lvl.wildShapeUses}, cantrips ${lvl.cantrips}, prepared ${lvl.preparedSpells})`,
  );
}

async function seedMonkLevels(prisma: PrismaClient) {
  await seedClassLevelsGeneric(
    prisma,
    'monk',
    'Monk',
    monkLevels,
    (lvl) => ({
      martialArtsDie: lvl.martialArtsDie,
      focusPoints: lvl.focusPoints,
      unarmoredMovementBonusFt: lvl.unarmoredMovementBonusFt,
    }),
    (lvl) =>
      `(PB +${lvl.proficiencyBonus}, ${lvl.martialArtsDie}, FP ${lvl.focusPoints}, +${lvl.unarmoredMovementBonusFt} ft)`,
  );
}

async function seedFighterLevels(prisma: PrismaClient) {
  await seedClassLevelsGeneric(
    prisma,
    'fighter',
    'Fighter',
    fighterLevels,
    (lvl) => ({
      secondWindUses: lvl.secondWindUses,
      weaponMasteryCount: lvl.weaponMasteryCount,
    }),
    (lvl) =>
      `(PB +${lvl.proficiencyBonus}, SW ${lvl.secondWindUses}, WM ${lvl.weaponMasteryCount})`,
  );
}

async function seedSorcererLevels(prisma: PrismaClient) {
  await seedClassLevelsGeneric(
    prisma,
    'sorcerer',
    'Sorcerer',
    sorcererLevels,
    (lvl) => ({
      sorceryPoints: lvl.sorceryPoints,
      cantrips: lvl.cantrips,
      preparedSpells: lvl.preparedSpells,
      spellSlots: lvl.spellSlots,
    }),
    (lvl) =>
      `(PB +${lvl.proficiencyBonus}, SP ${lvl.sorceryPoints}, cantrips ${lvl.cantrips}, prepared ${lvl.preparedSpells})`,
  );
}

async function seedWarlockLevels(prisma: PrismaClient) {
  await seedClassLevelsGeneric(
    prisma,
    'warlock',
    'Warlock',
    warlockLevels,
    (lvl) => ({
      invocations: lvl.invocations,
      cantrips: lvl.cantrips,
      preparedSpells: lvl.preparedSpells,
      spellSlots: lvl.spellSlots,
      slotLevel: lvl.slotLevel,
    }),
    (lvl) =>
      `(PB +${lvl.proficiencyBonus}, invocations ${lvl.invocations}, cantrips ${lvl.cantrips}, prepared ${lvl.preparedSpells}, slots ${lvl.spellSlots} lvl ${lvl.slotLevel})`,
  );
}

async function seedWizardLevels(prisma: PrismaClient) {
  await seedClassLevelsGeneric(
    prisma,
    'wizard',
    'Wizard',
    wizardLevels,
    (lvl) => ({
      cantrips: lvl.cantrips,
      preparedSpells: lvl.preparedSpells,
      spellSlots: lvl.spellSlots,
    }),
    (lvl) =>
      `(PB +${lvl.proficiencyBonus}, cantrips ${lvl.cantrips}, prepared ${lvl.preparedSpells})`,
  );
}

// ----------------------
// Export global appelé par prisma/seed/index.ts
// ----------------------

export async function seedClassLevels(prisma: PrismaClient) {
  await seedBarbarianLevels(prisma);
  await seedRogueLevels(prisma);
  await seedRangerLevels(prisma);
  await seedPaladinLevels(prisma);
  await seedBardLevels(prisma);
  await seedClericLevels(prisma);
  await seedDruidLevels(prisma);
  await seedMonkLevels(prisma);
  await seedFighterLevels(prisma);
  await seedSorcererLevels(prisma);
  await seedWarlockLevels(prisma);
  await seedWizardLevels(prisma);
}
