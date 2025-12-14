export class BackgroundDto {
  id: number;
  key: string;
  name: string;
  description: string;

  abilityScores: string[];
  originFeatKey: string;

  skillProficiencies: string[];
  toolProficiency: unknown;
  equipmentOptions: unknown;
}
