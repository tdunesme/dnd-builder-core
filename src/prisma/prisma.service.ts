import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { config } from 'dotenv';

config();

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const databaseUrl = process.env.DATABASE_URL || 'file:./dev.db';
    // Extract file path from Prisma URL format (file:./dev.db -> ./dev.db)
    const filePath = databaseUrl.startsWith('file:')
      ? databaseUrl.replace('file:', '')
      : databaseUrl;

    const adapter = new PrismaBetterSqlite3({ url: filePath });
    super({ adapter });
  }
}
