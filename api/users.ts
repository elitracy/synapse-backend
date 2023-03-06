import express from "express"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const router = express.Router()

router.get('/', async (_, res) => {
  prisma.user.findMany().then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err)
  })
})


router.get('/user/:id', async (req, res) => {
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

router.post('/email', async (req, res) => {
  const { email } = req.body
  prisma.user
    .findUnique({
      where: { email },
    }).then((user) => {
      res.status(200).json(user)
    }).catch((err) => {
      res.status(400).json(err)
    })
})

router.post('/', async (req, res) => {
  const { name, email, password } = req.body
  prisma.user.create({
    data: {
      name, email, password
    }
  }).then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  prisma.user.delete({
    where: { id },
  }).then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

router.put('/name/:id', async (req, res) => {
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

router.put('/email/:id', async (req, res) => {
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

router.put('/password/:id', async (req, res) => {
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

// Get all notes for a particular user
router.get('/:userId/notes', async (req, res) => {
  const { userId } = req.params

  prisma.note
    .findMany({
      where: { userId },
    }).then((note) => {
      res.status(200).json(note)
    }).catch((err) => {
      res.status(400).json(err)
    })
})

export default router
