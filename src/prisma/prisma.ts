import { PrismaClient } from '@prisma/client';

interface GlobalWithPrisma {
  prisma?: PrismaClient;
}

declare const global: GlobalWithPrisma;

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export default prisma;
