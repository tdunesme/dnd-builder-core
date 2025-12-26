import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SrdRessourcesDto } from '../dto/srd-ressources.dto';
import { BackgroundsService } from './backgrounds.service';

@Controller('backgrounds')
@UseGuards(AuthGuard('jwt'))
export class BackgroundsController {
  constructor(private readonly backgroundsService: BackgroundsService) {}

  @Get()
  async findAll(): Promise<SrdRessourcesDto[]> {
    return this.backgroundsService.getAll();
  }

  @Get(':index')
  async findById(@Param('index') index: string): Promise<any> {
    return this.backgroundsService.getById(index);
  }
}
