import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const usersData: Prisma.UserCreateInput[] = [
    {
      email: "alice@example.com",
      password: "password123", // In production, use hashed passwords!
    },
    {
      email: "bob@example.com",
      password: "password456",
    },
    {
      email: "carol@example.com",
      password: "password789",
    },
  ];

  for (const userData of usersData) {
    await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: userData,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
