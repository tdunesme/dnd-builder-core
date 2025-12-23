export class CharacterListItemDto {
  id: string;
  name: string;
  level: number;

  raceIndex: string | null;
  classIndex: string | null;

  createdAt: Date;
}
