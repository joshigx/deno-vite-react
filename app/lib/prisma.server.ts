// app/lib/prisma.server.ts
import 'dotenv/config';
import { PrismaClient } from "../generated/prisma/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";
import process from "node:process";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({connectionString});

export function createPrismaClient() {
  return new PrismaClient({
    adapter,
  });
}
