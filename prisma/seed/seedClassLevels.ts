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
    features: ['Rage', 'Défense sans armure', 'Maîtrise des armes'],
    rages: 2,
    rageDamage: 2,
    weaponMasteryCount: 2,
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Sens du danger', 'Attaque téméraire'],
    rages: 2,
    rageDamage: 2,
    weaponMasteryCount: 2,
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Voie barbare', 'Connaissance primordiale'],
    rages: 3,
    rageDamage: 2,
    weaponMasteryCount: 2,
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Amélioration de caractéristique'],
    rages: 3,
    rageDamage: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Attaque supplémentaire', 'Déplacement rapide'],
    rages: 3,
    rageDamage: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Aptitude de voie'],
    rages: 4,
    rageDamage: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Instinct farouche', 'Bond instinctif'],
    rages: 4,
    rageDamage: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Amélioration de caractéristique'],
    rages: 4,
    rageDamage: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: ['Frappe brutale'],
    rages: 4,
    rageDamage: 3,
    weaponMasteryCount: 3,
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Aptitude de voie'],
    rages: 4,
    rageDamage: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: ['Rage implacable'],
    rages: 4,
    rageDamage: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Amélioration de caractéristique'],
    rages: 5,
    rageDamage: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: ['Frappe brutale améliorée'],
    rages: 5,
    rageDamage: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Aptitude de voie'],
    rages: 5,
    rageDamage: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Rage persistante'],
    rages: 5,
    rageDamage: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Amélioration de caractéristique'],
    rages: 5,
    rageDamage: 4,
    weaponMasteryCount: 4,
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: ['Frappe brutale améliorée'],
    rages: 6,
    rageDamage: 4,
    weaponMasteryCount: 4,
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Puissance indomptable'],
    rages: 6,
    rageDamage: 4,
    weaponMasteryCount: 4,
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Don épique'],
    rages: 6,
    rageDamage: 4,
    weaponMasteryCount: 4,
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Champion primordial'],
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
    features: [
      'Expertise',
      'Attaque sournoise',
      'Jargon des voleurs',
      'Maîtrise des armes',
    ],
    sneakAttackDice: 1,
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Action rusée'],
    sneakAttackDice: 1,
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Archétype de roublard', 'Visée assurée'],
    sneakAttackDice: 2,
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Amélioration de caractéristique'],
    sneakAttackDice: 2,
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Frappe rusée', 'Esquive instinctive'],
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
    features: ['Évasion', 'Talent fiable'],
    sneakAttackDice: 4,
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Amélioration de caractéristique'],
    sneakAttackDice: 4,
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: ['Aptitude d’archétype'],
    sneakAttackDice: 5,
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Amélioration de caractéristique'],
    sneakAttackDice: 5,
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: ['Frappe rusée améliorée'],
    sneakAttackDice: 6,
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Amélioration de caractéristique'],
    sneakAttackDice: 6,
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: ['Aptitude d’archétype'],
    sneakAttackDice: 7,
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Frappes sournoises'],
    sneakAttackDice: 7,
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Esprit fuyant'],
    sneakAttackDice: 8,
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Amélioration de caractéristique'],
    sneakAttackDice: 8,
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: ['Aptitude d’archétype'],
    sneakAttackDice: 9,
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Insaisissable'],
    sneakAttackDice: 9,
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Don épique'],
    sneakAttackDice: 10,
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Coup de chance'],
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
    features: ['Incantation', 'Ennemi juré', 'Maîtrise des armes'],
    favoredEnemyUses: 2,
    preparedSpells: 2,
    spellSlots: [2, 0, 0, 0, 0],
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Explorateur aguerri', 'Style de combat'],
    favoredEnemyUses: 2,
    preparedSpells: 3,
    spellSlots: [2, 0, 0, 0, 0],
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Archétype de rôdeur'],
    favoredEnemyUses: 2,
    preparedSpells: 4,
    spellSlots: [3, 0, 0, 0, 0],
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Amélioration de caractéristique'],
    favoredEnemyUses: 2,
    preparedSpells: 5,
    spellSlots: [3, 0, 0, 0, 0],
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Attaque supplémentaire'],
    favoredEnemyUses: 3,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0],
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Itinérance'],
    favoredEnemyUses: 3,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0],
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Aptitude d’archétype'],
    favoredEnemyUses: 3,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0],
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Amélioration de caractéristique'],
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
    features: ['Infatigable'],
    favoredEnemyUses: 4,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0],
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: ['Aptitude d’archétype'],
    favoredEnemyUses: 4,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0],
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Amélioration de caractéristique'],
    favoredEnemyUses: 4,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0],
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: ['Chasseur implacable'],
    favoredEnemyUses: 5,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0],
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Voile de la nature'],
    favoredEnemyUses: 5,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0],
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Aptitude d’archétype'],
    favoredEnemyUses: 5,
    preparedSpells: 12,
    spellSlots: [4, 3, 3, 2, 0],
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Amélioration de caractéristique'],
    favoredEnemyUses: 5,
    preparedSpells: 12,
    spellSlots: [4, 3, 3, 2, 0],
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: ['Chasseur précis'],
    favoredEnemyUses: 6,
    preparedSpells: 14,
    spellSlots: [4, 3, 3, 3, 1],
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Sens farouches'],
    favoredEnemyUses: 6,
    preparedSpells: 14,
    spellSlots: [4, 3, 3, 3, 1],
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Don épique'],
    favoredEnemyUses: 6,
    preparedSpells: 15,
    spellSlots: [4, 3, 3, 3, 2],
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Tueur d’ennemis'],
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
    features: ['Imposition des mains', 'Incantation', 'Maîtrise des armes'],
    channelDivinityUses: 0,
    preparedSpells: 2,
    spellSlots: [2, 0, 0, 0, 0],
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Style de combat', 'Châtiment du paladin'],
    channelDivinityUses: 0,
    preparedSpells: 3,
    spellSlots: [2, 0, 0, 0, 0],
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Canalisation divine', 'Serment sacré'],
    channelDivinityUses: 2,
    preparedSpells: 4,
    spellSlots: [3, 0, 0, 0, 0],
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Amélioration de caractéristique'],
    channelDivinityUses: 2,
    preparedSpells: 5,
    spellSlots: [3, 0, 0, 0, 0],
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Attaque supplémentaire', 'Monture fidèle'],
    channelDivinityUses: 2,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0],
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Aura de protection'],
    channelDivinityUses: 2,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0],
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Aptitude de serment'],
    channelDivinityUses: 2,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0],
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Amélioration de caractéristique'],
    channelDivinityUses: 2,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0],
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: ['Abjurer les ennemis'],
    channelDivinityUses: 2,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0],
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Aura de courage'],
    channelDivinityUses: 2,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0],
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: ['Frappes rayonnantes'],
    channelDivinityUses: 3,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0],
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Amélioration de caractéristique'],
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
    features: ['Toucher restaurateur'],
    channelDivinityUses: 3,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0],
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Aptitude de serment'],
    channelDivinityUses: 3,
    preparedSpells: 12,
    spellSlots: [4, 3, 3, 2, 0],
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Amélioration de caractéristique'],
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
    features: ['Extension d’aura'],
    channelDivinityUses: 3,
    preparedSpells: 14,
    spellSlots: [4, 3, 3, 3, 1],
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Don épique'],
    channelDivinityUses: 3,
    preparedSpells: 15,
    spellSlots: [4, 3, 3, 3, 2],
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Aptitude de serment'],
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
    features: ['Inspiration bardique', 'Incantation'],
    bardicDie: 6,
    preparedSpells: 4,
    spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Expertise', 'Touche-à-tout'],
    bardicDie: 6,
    preparedSpells: 5,
    spellSlots: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Collège bardique'],
    bardicDie: 6,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Amélioration de caractéristique'],
    bardicDie: 6,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Fontaine d’inspiration'],
    bardicDie: 8,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Aptitude de collège'],
    bardicDie: 8,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Contre-charme'],
    bardicDie: 8,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0, 0, 0, 0, 0],
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Amélioration de caractéristique'],
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
    features: ['Secrets magiques'],
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
    features: ['Amélioration de caractéristique'],
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
    features: ['Aptitude de collège'],
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
    features: ['Amélioration de caractéristique'],
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
    features: ['Inspiration supérieure'],
    bardicDie: 12,
    preparedSpells: 20,
    spellSlots: [4, 3, 3, 3, 3, 1, 1, 1, 1],
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Don épique'],
    bardicDie: 12,
    preparedSpells: 21,
    spellSlots: [4, 3, 3, 3, 3, 2, 1, 1, 1],
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Mots de création'],
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
    features: ['Incantation', 'Ordre divin'],
    channelDivinityUses: 0,
    cantrips: 3,
    preparedSpells: 4,
    spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Canalisation divine'],
    channelDivinityUses: 2,
    cantrips: 3,
    preparedSpells: 5,
    spellSlots: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Domaine divin'],
    channelDivinityUses: 2,
    cantrips: 3,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Amélioration de caractéristique'],
    channelDivinityUses: 2,
    cantrips: 4,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Consumer les morts-vivants'],
    channelDivinityUses: 2,
    cantrips: 4,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Aptitude de domaine'],
    channelDivinityUses: 3,
    cantrips: 4,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Frappes bénies'],
    channelDivinityUses: 3,
    cantrips: 4,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0, 0, 0, 0, 0],
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Amélioration de caractéristique'],
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
    features: ['Intervention divine'],
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
    features: ['Amélioration de caractéristique'],
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
    features: ['Frappes bénies améliorées'],
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
    features: ['Amélioration de caractéristique'],
    channelDivinityUses: 3,
    cantrips: 5,
    preparedSpells: 18,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: ['Aptitude de domaine'],
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
    features: ['Don épique'],
    channelDivinityUses: 4,
    cantrips: 5,
    preparedSpells: 21,
    spellSlots: [4, 3, 3, 3, 3, 2, 1, 1, 1],
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Intervention divine supérieure'],
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
    features: ['Incantation', 'Druidique', 'Ordre primordial'],
    wildShapeUses: 0, // "-"
    cantrips: 2,
    preparedSpells: 4,
    spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Forme sauvage', 'Compagnon sauvage'],
    wildShapeUses: 2,
    cantrips: 2,
    preparedSpells: 5,
    spellSlots: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Cercle druidique'],
    wildShapeUses: 2,
    cantrips: 2,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Amélioration de caractéristique'],
    wildShapeUses: 2,
    cantrips: 3,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Renouveau sauvage'],
    wildShapeUses: 2,
    cantrips: 3,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Aptitude de cercle'],
    wildShapeUses: 3,
    cantrips: 3,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Fureur élémentaire'],
    wildShapeUses: 3,
    cantrips: 3,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0, 0, 0, 0, 0],
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Amélioration de caractéristique'],
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
    features: ['Aptitude de cercle'],
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
    features: ['Amélioration de caractéristique'],
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
    features: ['Aptitude de cercle'],
    wildShapeUses: 3,
    cantrips: 4,
    preparedSpells: 17,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Fureur élémentaire améliorée'],
    wildShapeUses: 3,
    cantrips: 4,
    preparedSpells: 18,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Amélioration de caractéristique'],
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
    features: ['Sorts bestiaux'],
    wildShapeUses: 4,
    cantrips: 4,
    preparedSpells: 20,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 1],
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Don épique'],
    wildShapeUses: 4,
    cantrips: 4,
    preparedSpells: 21,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 1],
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Archidruide'],
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
    features: ['Arts martiaux', 'Défense sans armure'],
    martialArtsDie: '1d6',
    focusPoints: 0,
    unarmoredMovementBonusFt: 0,
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: [
      'Focalisation du moine',
      'Déplacement sans armure',
      'Métabolisme extraordinaire',
    ],
    martialArtsDie: '1d6',
    focusPoints: 2,
    unarmoredMovementBonusFt: 10,
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Déviation d’attaques', 'Tradition monastique'],
    martialArtsDie: '1d6',
    focusPoints: 3,
    unarmoredMovementBonusFt: 10,
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Amélioration de caractéristique', 'Chute ralentie'],
    martialArtsDie: '1d6',
    focusPoints: 4,
    unarmoredMovementBonusFt: 10,
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Attaque supplémentaire', 'Frappe étourdissante'],
    martialArtsDie: '1d8',
    focusPoints: 5,
    unarmoredMovementBonusFt: 10,
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Frappes renforcées', 'Aptitude de tradition'],
    martialArtsDie: '1d8',
    focusPoints: 6,
    unarmoredMovementBonusFt: 15,
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Évasion'],
    martialArtsDie: '1d8',
    focusPoints: 7,
    unarmoredMovementBonusFt: 15,
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Amélioration de caractéristique'],
    martialArtsDie: '1d8',
    focusPoints: 8,
    unarmoredMovementBonusFt: 15,
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: ['Déplacement acrobatique'],
    martialArtsDie: '1d8',
    focusPoints: 9,
    unarmoredMovementBonusFt: 15,
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Focalisation accrue', 'Auto-restauration'],
    martialArtsDie: '1d8',
    focusPoints: 10,
    unarmoredMovementBonusFt: 20,
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: ['Aptitude de tradition'],
    martialArtsDie: '1d10',
    focusPoints: 11,
    unarmoredMovementBonusFt: 20,
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Amélioration de caractéristique'],
    martialArtsDie: '1d10',
    focusPoints: 12,
    unarmoredMovementBonusFt: 20,
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: ['Déviation d’énergie'],
    martialArtsDie: '1d10',
    focusPoints: 13,
    unarmoredMovementBonusFt: 20,
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Survivant discipliné'],
    martialArtsDie: '1d10',
    focusPoints: 14,
    unarmoredMovementBonusFt: 25,
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Focalisation parfaite'],
    martialArtsDie: '1d10',
    focusPoints: 15,
    unarmoredMovementBonusFt: 25,
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Amélioration de caractéristique'],
    martialArtsDie: '1d10',
    focusPoints: 16,
    unarmoredMovementBonusFt: 25,
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: ['Aptitude de tradition'],
    martialArtsDie: '1d12',
    focusPoints: 17,
    unarmoredMovementBonusFt: 25,
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Défense supérieure'],
    martialArtsDie: '1d12',
    focusPoints: 18,
    unarmoredMovementBonusFt: 30,
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Don épique'],
    martialArtsDie: '1d12',
    focusPoints: 19,
    unarmoredMovementBonusFt: 30,
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Corps et esprit'],
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
    features: ['Style de combat', 'Second souffle', 'Maîtrise des armes'],
    secondWindUses: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Sursaut d’action (1 utilisation)', 'Esprit tactique'],
    secondWindUses: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Archétype martial'],
    secondWindUses: 2,
    weaponMasteryCount: 3,
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Amélioration de caractéristique'],
    secondWindUses: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Attaque supplémentaire', 'Déplacement tactique'],
    secondWindUses: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Amélioration de caractéristique'],
    secondWindUses: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Aptitude d’archétype'],
    secondWindUses: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Amélioration de caractéristique'],
    secondWindUses: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: ['Indomptable (1 utilisation)', 'Maître tacticien'],
    secondWindUses: 3,
    weaponMasteryCount: 4,
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Aptitude d’archétype'],
    secondWindUses: 4,
    weaponMasteryCount: 5,
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: ['Deux attaques supplémentaires'],
    secondWindUses: 4,
    weaponMasteryCount: 5,
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Amélioration de caractéristique'],
    secondWindUses: 4,
    weaponMasteryCount: 5,
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: ['Indomptable (2 utilisations)', 'Attaques étudiées'],
    secondWindUses: 4,
    weaponMasteryCount: 5,
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Amélioration de caractéristique'],
    secondWindUses: 4,
    weaponMasteryCount: 5,
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Aptitude d’archétype'],
    secondWindUses: 4,
    weaponMasteryCount: 5,
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Amélioration de caractéristique'],
    secondWindUses: 4,
    weaponMasteryCount: 6,
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: [
      'Sursaut d’action (2 utilisations)',
      'Indomptable (3 utilisations)',
    ],
    secondWindUses: 4,
    weaponMasteryCount: 6,
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Aptitude d’archétype'],
    secondWindUses: 4,
    weaponMasteryCount: 6,
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Don épique'],
    secondWindUses: 4,
    weaponMasteryCount: 6,
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Trois attaques supplémentaires'],
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
    features: ['Incantation', 'Sorcellerie innée'],
    sorceryPoints: 0,
    cantrips: 4,
    preparedSpells: 2,
    spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Fontaine de magie', 'Métamagie'],
    sorceryPoints: 2,
    cantrips: 4,
    preparedSpells: 4,
    spellSlots: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Lignée sorcière'],
    sorceryPoints: 3,
    cantrips: 4,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Amélioration de caractéristique'],
    sorceryPoints: 4,
    cantrips: 5,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Restauration sorcière'],
    sorceryPoints: 5,
    cantrips: 5,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Aptitude de lignée'],
    sorceryPoints: 6,
    cantrips: 5,
    preparedSpells: 10,
    spellSlots: [4, 3, 3, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 7,
    proficiencyBonus: 3,
    features: ['Sorcellerie incarnée'],
    sorceryPoints: 7,
    cantrips: 5,
    preparedSpells: 11,
    spellSlots: [4, 3, 3, 1, 0, 0, 0, 0, 0],
  },
  {
    level: 8,
    proficiencyBonus: 3,
    features: ['Amélioration de caractéristique'],
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
    features: ['Métamagie'],
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
    features: ['Amélioration de caractéristique'],
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
    features: ['Aptitude de lignée'],
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
    features: ['Amélioration de caractéristique'],
    sorceryPoints: 16,
    cantrips: 6,
    preparedSpells: 18,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: ['Métamagie'],
    sorceryPoints: 17,
    cantrips: 6,
    preparedSpells: 19,
    spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 1],
  },
  {
    level: 18,
    proficiencyBonus: 6,
    features: ['Aptitude de lignée'],
    sorceryPoints: 18,
    cantrips: 6,
    preparedSpells: 20,
    spellSlots: [4, 3, 3, 3, 3, 1, 1, 1, 1],
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Don épique'],
    sorceryPoints: 19,
    cantrips: 6,
    preparedSpells: 21,
    spellSlots: [4, 3, 3, 3, 3, 2, 1, 1, 1],
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Apothéose arcanique'],
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
    features: ['Invocations occultes', 'Magie de pacte'],
    invocations: 1,
    cantrips: 2,
    preparedSpells: 2,
    spellSlots: 1,
    slotLevel: 1,
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Ruse magique'],
    invocations: 3,
    cantrips: 2,
    preparedSpells: 3,
    spellSlots: 2,
    slotLevel: 1,
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Patron'],
    invocations: 3,
    cantrips: 2,
    preparedSpells: 4,
    spellSlots: 2,
    slotLevel: 2,
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Amélioration de caractéristique'],
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
    features: ['Aptitude de patron'],
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
    features: ['Amélioration de caractéristique'],
    invocations: 6,
    cantrips: 3,
    preparedSpells: 9,
    spellSlots: 2,
    slotLevel: 4,
  },
  {
    level: 9,
    proficiencyBonus: 4,
    features: ['Contacter le patron'],
    invocations: 7,
    cantrips: 3,
    preparedSpells: 10,
    spellSlots: 2,
    slotLevel: 5,
  },
  {
    level: 10,
    proficiencyBonus: 4,
    features: ['Aptitude de patron'],
    invocations: 7,
    cantrips: 4,
    preparedSpells: 10,
    spellSlots: 2,
    slotLevel: 5,
  },
  {
    level: 11,
    proficiencyBonus: 4,
    features: ['Arcanum mystique (sort de niveau 6)'],
    invocations: 7,
    cantrips: 4,
    preparedSpells: 11,
    spellSlots: 3,
    slotLevel: 5,
  },
  {
    level: 12,
    proficiencyBonus: 4,
    features: ['Amélioration de caractéristique'],
    invocations: 8,
    cantrips: 4,
    preparedSpells: 11,
    spellSlots: 3,
    slotLevel: 5,
  },
  {
    level: 13,
    proficiencyBonus: 5,
    features: ['Arcanum mystique (sort de niveau 7)'],
    invocations: 8,
    cantrips: 4,
    preparedSpells: 12,
    spellSlots: 3,
    slotLevel: 5,
  },
  {
    level: 14,
    proficiencyBonus: 5,
    features: ['Aptitude de patron'],
    invocations: 8,
    cantrips: 4,
    preparedSpells: 12,
    spellSlots: 3,
    slotLevel: 5,
  },
  {
    level: 15,
    proficiencyBonus: 5,
    features: ['Arcanum mystique (sort de niveau 8)'],
    invocations: 9,
    cantrips: 4,
    preparedSpells: 13,
    spellSlots: 3,
    slotLevel: 5,
  },
  {
    level: 16,
    proficiencyBonus: 5,
    features: ['Amélioration de caractéristique'],
    invocations: 9,
    cantrips: 4,
    preparedSpells: 13,
    spellSlots: 3,
    slotLevel: 5,
  },
  {
    level: 17,
    proficiencyBonus: 6,
    features: ['Arcanum mystique (sort de niveau 9)'],
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
    features: ['Don épique'],
    invocations: 10,
    cantrips: 4,
    preparedSpells: 15,
    spellSlots: 4,
    slotLevel: 5,
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Maître occulte'],
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
    features: ['Incantation', 'Adepte des rituels', 'Récupération arcanique'],
    cantrips: 3,
    preparedSpells: 4,
    spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 2,
    proficiencyBonus: 2,
    features: ['Érudit'],
    cantrips: 3,
    preparedSpells: 5,
    spellSlots: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 3,
    proficiencyBonus: 2,
    features: ['Tradition arcanique'],
    cantrips: 3,
    preparedSpells: 6,
    spellSlots: [4, 2, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 4,
    proficiencyBonus: 2,
    features: ['Amélioration de caractéristique'],
    cantrips: 4,
    preparedSpells: 7,
    spellSlots: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 5,
    proficiencyBonus: 3,
    features: ['Mémoriser un sort'],
    cantrips: 4,
    preparedSpells: 9,
    spellSlots: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 6,
    proficiencyBonus: 3,
    features: ['Aptitude de tradition'],
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
    features: ['Amélioration de caractéristique'],
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
    features: ['Aptitude de tradition'],
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
    features: ['Amélioration de caractéristique'],
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
    features: ['Aptitude de tradition'],
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
    features: ['Amélioration de caractéristique'],
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
    features: ['Maîtrise des sorts'],
    cantrips: 5,
    preparedSpells: 23,
    spellSlots: [4, 3, 3, 3, 3, 1, 1, 1, 1],
  },
  {
    level: 19,
    proficiencyBonus: 6,
    features: ['Don épique'],
    cantrips: 5,
    preparedSpells: 24,
    spellSlots: [4, 3, 3, 3, 3, 2, 1, 1, 1],
  },
  {
    level: 20,
    proficiencyBonus: 6,
    features: ['Sorts signatures'],
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
