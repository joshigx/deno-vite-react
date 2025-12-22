//seed with: npx prisma db seed


import { PrismaClient, Prisma } from "../app/generated/prisma/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";;
import process from "node:process";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Seedwennsgehtistgeil",
    email: "test@test.test",
    posts: {
      create: [
        {
          title: "Join tasdfrd",
          content: "https:/discord",
          published: true,
        },
        {
          title: "PrismauTube",
          content: "httpis.ly/youtube",
        },
      ],
    },
  },

];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();