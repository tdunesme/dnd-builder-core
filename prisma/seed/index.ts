import { PrismaClient } from '../../src/generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { config } from 'dotenv';
import * as path from 'path';
import { seedBackgrounds } from './seedBackgrounds';
import { seedClasses } from './seedClasses';
import { seedSpecies } from './seedSpecies';

config();

const databaseUrl = process.env.DATABASE_URL || 'file:./dev.db';
const filePath = databaseUrl.startsWith('file:')
  ? path.resolve(process.cwd(), databaseUrl.replace('file:', ''))
  : databaseUrl;

const adapter = new PrismaBetterSqlite3({ url: filePath });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding SRD...');

  await seedSpecies(prisma);
  await seedBackgrounds(prisma);
  await seedClasses(prisma);

  console.log('✅ Seeding SRD terminé.');
}

main()
  .catch((e) => {
    console.error('❌ Erreur pendant le seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
