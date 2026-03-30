import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '../../../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private static readonly prisma: PrismaClient = new PrismaClient();

  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL!,
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
    Logger.log('Prisma connected');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    Logger.log('Prisma disconnected');
  }

  async $connect() {
    return super.$connect();
  }

  async $disconnect() {
    return super.$disconnect();
  }
}
