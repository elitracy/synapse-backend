import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/allUsers', async (_, res) => {
  prisma.user.findMany().then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

app.get('/users/:id', async (req, res) => {
  const { id } = req.params

  prisma.user
    .findUnique({
      where: { id },
    }).then((user) => {
      res.status(200).json(user)
    }).catch((err) => {
      res.status(400).json(err)
    })
})

app.post('/users', async (req, res) => {
  const { name, email, password } = req.body
  prisma.user.create({
    data: {
      name, email, password
    },
  }).then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
