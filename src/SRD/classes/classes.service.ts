import { Injectable } from '@nestjs/common';
import { SrdClientService } from '../srd-client/srd-client.service';
import { SrdRessourcesDto } from '../dto/srd-ressources.dto';

@Injectable()
export class ClassesService {
  constructor(private readonly srdClient: SrdClientService) {}

  async getAll(): Promise<SrdRessourcesDto[]> {
    const response = await this.srdClient.get('/classes');

    return response.results.map((item) => ({
      index: item.index,
      name: item.name,
      url: item.url,
    }));
  }

  async getById(index: string): Promise<any> {
    return await this.srdClient.get(`/classes/${index}`);
  }
}
