import { Module } from '@nestjs/common';
import { SrdClientModule } from '../srd-client/srd-client.module';
import { BackgroundsService } from './backgrounds.service';
import { BackgroundsController } from './backgrounds.controller';

@Module({
  imports: [SrdClientModule],
  providers: [BackgroundsService],
  controllers: [BackgroundsController],
})
export class BackgroundsModule {}
