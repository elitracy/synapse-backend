import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {


  await prisma.group.create({
    data: {
      Name: "Test Group",
      Users: {
        create: [{
          Name: 'Alice',
          Email: 'alice@example.com',
          Password: 'alicepass'
        },
        {
          Name: 'Bob',
          Email: 'bob@example.com',
          Password: 'bobpass'
        },
        {
          Name: 'Charlie',
          Email: 'charlie@example.com',
          Password: 'charliepass'
        },
        {
          Name: 'Professor',
          Email: 'professor@example.com',
          Password: 'professorpass',
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
