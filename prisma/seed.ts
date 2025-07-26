import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const usersData: Prisma.UserCreateInput[] = [
    {
      workosId: "user_01h2x3y4z5",
      email: "alice@example.com",
      firstName: "Alice",
      lastName: "Johnson",
    },
    {
      workosId: "user_01h2x3y4z6",
      email: "bob@example.com",
      firstName: "Bob",
      lastName: "Smith",
    },
    {
      workosId: "user_01h2x3y4z7",
      email: "carol@example.com",
      firstName: "Carol",
      lastName: "Davis",
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
