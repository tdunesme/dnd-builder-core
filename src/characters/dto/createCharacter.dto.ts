import {
  IsIn,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateCharacterDto {
  @IsOptional()
  @IsString()
  name?: string;
}

export class UpdateCharacterDto {
  // Meta
  @IsOptional()
  @IsString()
  name?: string;

  // Level (future-proof, mais contrôlé)
  @IsOptional()
  @IsInt()
  @Min(1)
  level?: number;

  // === STEP 1 — Species ===
  @IsOptional()
  @IsString()
  speciesKey?: string;

  // === STEP 2 — Class ===
  @IsOptional()
  @IsString()
  classKey?: string;

  // === STEP 3 — Background ===
  @IsOptional()
  @IsString()
  backgroundKey?: string;

  // === STEP 4 — Ability Scores ===
  @IsOptional()
  @IsObject()
  abilityScores?: Record<string, number>;

  @IsOptional()
  @IsIn(['STANDARD_ARRAY', 'POINT_BUY', 'ROLL'])
  abilityMethod?: string;

  // === STEP 5 — Equipment ===
  @IsOptional()
  equipment?: unknown;

  // === STEP 6 — Spells ===
  @IsOptional()
  spells?: unknown;

  // Notes / future
  @IsOptional()
  notes?: unknown;
}
