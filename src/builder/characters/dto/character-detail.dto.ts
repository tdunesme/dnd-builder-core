export class AbilityScoresDto {
  strength: number | null;
  dexterity: number | null;
  constitution: number | null;
  intelligence: number | null;
  wisdom: number | null;
  charisma: number | null;
}

export class CharacterDetailDto {
  id: string;
  name: string;
  level: number;

  raceIndex: string | null;
  subraceIndex: string | null;

  classIndex: string | null;
  subclassIndex: string | null;

  backgroundIndex: string | null;
  alignmentIndex: string | null;

  abilityScores: AbilityScoresDto;

  skillIndexes: string[];
  proficiencyIndexes: string[];
  languageIndexes: string[];
  spellIndexes: string[];
  equipmentIndexes: string[];

  createdAt: Date;
  updatedAt: Date;
}
