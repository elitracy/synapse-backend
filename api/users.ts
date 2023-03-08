import express from "express"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const router = express.Router()

// ============================= GET =============================

router.get('/', async (_, res) => {
  prisma.user.findMany().then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err)
  })
})


router.get('/:id', async (req, res) => {
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

// Get all notes for a particular user
router.get('/:userId/notes', async (req, res) => {
  const { userId } = req.params

  prisma.note
    .findMany({
      where: { userId },
    }).then((note) => {
      console.log(note)
      res.status(200).json(note)
    }).catch((err) => {
      console.error(err)
      res.status(400).json(err)
    })
})

router.get('/:id/groups', async (req, res) => {
  const { id } = req.params

  prisma.user
    .findMany({
      where: { id },
      include: { groups: true},
    }).then((user) => {
      res.status(200).json(user)
    }).catch((err) => {
      res.status(400).json(err)
    })
})

// ============================= POST =============================

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

// ============================= PUT =============================


router.put('/:id/password', async (req, res) => {
  const { id } = req.params
  const { password } = req.body

  prisma.user.update({
    where: { id },
    data: { password },
  }).then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

router.put('/:id/email', async (req, res) => {
  const { id } = req.params
  const { email } = req.body

  prisma.user.update({
    where: { id },
    data: { email },
  }).then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

router.put('/:id/name', async (req, res) => {
  const { id } = req.params
  const { name } = req.body

  prisma.user.update({
    where: { id },
    data: { name },
  }).then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

// ============================= DELETE =============================

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

export default router
