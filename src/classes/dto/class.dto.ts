export class ClassDto {
  id: number;
  key: string;
  name: string;

  hitDie: number;

  primaryAbilities: string[];
  savingThrows: string[];

  armorProficiencies: string[];
  weaponProficiencies: string[];
  toolProficiencies: string[];

  skillChoices: unknown;

  equipmentOptions: unknown;

  hasSpellcasting: boolean;
  spellcastingType?: string | null;

  levels: ClassLevelDto[];
}

export class ClassLevelDto {
  level: number;
  proficiencyBonus: number;
  features: string[];
  progression: Record<string, unknown> | null;
}
