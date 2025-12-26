import { Module } from '@nestjs/common';
import { RacesController } from './races.controller';
import { RacesService } from './races.service';
import { SrdClientModule } from '../srd-client/srd-client.module';

@Module({
  imports: [SrdClientModule],
  controllers: [RacesController],
  providers: [RacesService],
})
export class RacesModule {}
