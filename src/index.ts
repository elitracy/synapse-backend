import { PrismaClient } from '@prisma/client'
import express from 'express'
import path from 'path'

const prisma = new PrismaClient()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))

app.get('/', (_, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
})
app.get('/users', async (_, res) => {
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

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params
  prisma.user.delete({
    where: { id },
  }).then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

app.put('/users/name/:id', async (req, res) => {
  const { id } = req.params
  let { name } = req.body

  prisma.user.update({
    where: { id },
    data: { name },
  }).then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

app.put('/users/email/:id', async (req, res) => {
  const { id } = req.params
  let { email } = req.body

  prisma.user.update({
    where: { id },
    data: { email },
  }).then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

app.put('/users/password/:id', async (req, res) => {
  const { id } = req.params
  let { password } = req.body

  prisma.user.update({
    where: { id },
    data: { password },
  }).then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

app.listen(port, () =>
  console.log(`🦧 Server ready at: http://localhost:${port}`),
)

export default app
