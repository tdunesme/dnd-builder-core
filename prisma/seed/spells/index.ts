import { PrismaClient } from '../../../src/generated/prisma/client';

import { seedSpellsLevel0 } from './seedSpellsLevel0';
import { seedSpellsLevel1 } from './seedSpellsLevel1';
import { seedSpellsLevel2 } from './seedSpellsLevel2';
import { seedSpellsLevel3 } from './seedSpellsLevel3';
import { seedSpellsLevel4 } from './seedSpellsLevel4';
import { seedSpellsLevel5 } from './seedSpellsLevel5';
import { seedSpellsLevel6 } from './seedSpellsLevel6';
import { seedSpellsLevel7 } from './seedSpellsLevel7';
import { seedSpellsLevel8 } from './seedSpellsLevel8';
import { seedSpellsLevel9 } from './seedSpellsLevel9';
export async function seedSpells(prisma: PrismaClient) {
  console.log('📚 Seeding SRD spells...');

  await seedSpellsLevel0(prisma);
  await seedSpellsLevel1(prisma);
  await seedSpellsLevel2(prisma);
  await seedSpellsLevel3(prisma);
  await seedSpellsLevel4(prisma);
  await seedSpellsLevel5(prisma);
  await seedSpellsLevel6(prisma);
  await seedSpellsLevel7(prisma);
  await seedSpellsLevel8(prisma);
  await seedSpellsLevel9(prisma);
  console.log('✅ SRD spells seeded');
}
