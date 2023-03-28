import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {


  await prisma.user.createMany({
    data: [
      {
        id: "1",
        name: 'Alice',
        email: 'alice@example.com',
        password: 'alicepass'
      },
      {
        id: "2",
        name: 'Bob',
        email: 'bob@example.com',
        password: 'bobpass'
      },
      {
        id: "3",
        name: 'Charlie',
        email: 'charlie@example.com',
        password: 'charliepass'
      },
      {
        id: "4",
        name: 'Professor',
        email: 'professor@example.com',
        password: 'professorpass',
      }
    ]
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    // process.exit(1)
  })
