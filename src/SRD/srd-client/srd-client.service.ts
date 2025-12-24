import { Injectable } from '@nestjs/common';

@Injectable()
export class SrdClientService {
  constructor() {}

  async get<T = any>(path: string): Promise<T> {
    const response = await fetch(`https://www.dnd5eapi.co/api/2014${path}`);
    return response.json();
  }
}
