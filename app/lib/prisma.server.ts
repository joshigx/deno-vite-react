// app/lib/prisma.server.ts
import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";
import process from "node:process";

const connectionString: string = `${process.env.DATABASE_URL}`;
const adapter: PrismaPg = new PrismaPg({ connectionString });
const adapterObject = { adapter: adapter };

export function createPrismaClient() {
  return (
    new PrismaClient(adapterObject)
  );
}
