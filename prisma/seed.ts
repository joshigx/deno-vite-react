import { PrismaClient, Prisma } from "../app/generated/prisma/client.ts";
import "dotenv/config"; 
import { PrismaPg } from "@prisma/adapter-pg";
import {  env } from "prisma/config";

const adapter = new PrismaPg({
  connectionString: "prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19OVDRDa2JKcEJXUkFPQkpHbWY3ajciLCJhcGlfa2V5IjoiMDFLRDM0NVFLUDYwWVo0OVE0UzlKQVdLTjciLCJ0ZW5hbnRfaWQiOiI1ZjI0OGQyNDMzMGY2YjliY2MyZmYyOWFhNmVjOTkzMzA1NGY5ZTA3ZTJjZDFiMjcwNzI3MzBhZjUxNjQ5YzFhIiwiaW50ZXJuYWxfc2VjcmV0IjoiNzllYzNmOWMtYzUxYy00MDY0LTk2MTAtYzJmYmRlNzE1ZDE4In0.KBRnJkWsXWMaM7j2-TPjmC77Hm7GQXxbXpCL1D0Ky20",
});

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          content: "https://pris.ly/discord",
          published: true,
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
        },
      ],
    },
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://www.twitter.com/prisma",
          published: true,
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