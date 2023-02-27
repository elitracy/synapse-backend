import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {


  await prisma.group.create({
    data: {
      name: "Test Group",
      users: {
        create: [{
          name: 'Alice',
          email: 'alice@example.com',
          password: 'alicepass'
        },
        {
          name: 'Bob',
          email: 'bob@example.com',
          password: 'bobpass'
        },
        {
          name: 'Charlie',
          email: 'charlie@example.com',
          password: 'charliepass'
        },
        {
          name: 'Professor',
          email: 'professor@example.com',
          password: 'professorpass',
        }
        ]
      }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
