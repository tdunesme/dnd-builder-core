export class SpellDto {
  id: number;
  key: string;
  name: string;
  level: number;
  school: string;
  source?: string;
  castingTime: string;
  range: string;
  components: string;
  duration: string;
  classes: string;
  description: string;
  atHigherLevels?: string;
}

export class SpellListDto {
  spells: SpellDto[];
}

export class SpellLightDto {
  id: number;
  key: string;
  name: string;
  level: number;
  school: string;
  range: string;
  components: string;
}
