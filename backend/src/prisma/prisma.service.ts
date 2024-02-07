import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  async cleanDatabase() {
    if (process.env.NODE_ENV === 'test') {
      await this.$executeRaw`TRUNCATE TABLE user RESTART IDENTITY CASCADE;`;
      await this.$executeRaw`TRUNCATE TABLE quiz RESTART IDENTITY CASCADE;`;
      await this.$executeRaw`TRUNCATE TABLE question RESTART IDENTITY CASCADE;`;
    } else {
      console.warn('Database cleanup is only allowed in the test environment.');
    }
  }
}
