import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

async function clearDatabase() {
  await prisma.$transaction(async (tx) => {
    await tx.organizationMembership.deleteMany();
    await tx.organization.deleteMany();
    await tx.user.deleteMany();
  });
}

async function main() {
  await clearDatabase();

  const [john, jane, organization] = await prisma.$transaction(
    async (prisma) => {
      const john = await prisma.user.create({
        data: {
          email: 'john.doe@email.com',
          firstname: 'John',
          lastname: 'Doe',
          password: 'qwerty',
          type: 'USER',
          telephone: '1234567890',
        },
      });

      const jane = await prisma.user.create({
        data: {
          email: 'jane.doe@email.com',
          firstname: 'Jane',
          lastname: 'Doe',
          password: 'qwerty',
          type: 'USER',
          telephone: '1234567890',
        },
      });

      const organization = await prisma.organization.create({
        data: {
          name: 'Test Org',
          memberships: {
            create: [
              { userId: john.id, role: 'MANAGER' }, // Usar un valor válido según la migración
              { userId: jane.id, role: 'REGULAR' }  // Usar un valor válido según la migración
            ],
          },
        },
      });
      return [john, jane, organization];
    },
  );
  console.log([john, jane, organization]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
