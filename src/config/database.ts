import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL!,
    },
  },
});

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('PostgreSQL connected via Prisma');
  } catch (error) {
    console.error('DB connection error:', error);
    process.exit(1);
  }
};

