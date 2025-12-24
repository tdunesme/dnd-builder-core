import { Module } from '@nestjs/common';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';
import { SrdClientModule } from '../srd-client/srd-client.module';

@Module({
  imports: [SrdClientModule],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
