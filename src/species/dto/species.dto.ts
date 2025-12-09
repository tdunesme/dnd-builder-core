export class SpeciesDto {
  id: number;
  key: string;
  name: string;
  creatureType: string;
  size: string;
  speed: number;
  sizeOptions?: string[];
  traits?: unknown;
}
