import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CharactersModule } from './characters/characters.module';
import { SpeciesModule } from './species/species.module';
import { BackgroundsModule } from './backgrounds/backgrounds.module';
import { ClassesModule } from './classes/classes.module';
import { SpellsModule } from './spells/spells.module';
import { CharactersModule } from './modules/characters/characters.module';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    AuthModule,
    CharactersModule,
    SpeciesModule,
    BackgroundsModule,
    ClassesModule,
    SpellsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
