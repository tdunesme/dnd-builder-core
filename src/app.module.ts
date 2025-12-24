import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CharactersModule } from './builder/characters/characters.module';
import { ClassesModule } from './SRD/classes/classes.module';
import { RacesModule } from './SRD/races/races.module';
import { SrdClientModule } from './SRD/srd-client/srd-client.module';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    AuthModule,
    CharactersModule,
    ClassesModule,
    RacesModule,
    SrdClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
