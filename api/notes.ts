import express from "express"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const router = express.Router()

// ============================= GET =============================

router.get('/', async (_, res) => {
  prisma.note.findMany().then((note) => {
    res.status(200).json(note)
  }).catch((err) => {
    res.status(400).json(err)
  })
})


router.get('/:id', async (req, res) => {
  const { id } = req.params

  prisma.note
    .findUnique({
      where: { id },
    }).then((note) => {
      res.status(200).json(note)
    }).catch((err) => {
      res.status(400).json(err)
    })
})

// ============================= POST =============================

router.post('/', async (req, res) => {
  const { context, userId } = req.body
  prisma.note.create({
    data: {
      context, userId
    },
  }).then((note) => {
    res.status(200).json(note)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

// ============================= PUT =============================

router.put('/context/:id', async (req, res) => {
  const { id } = req.params
  let { context } = req.body

  prisma.note.update({
    where: { id },
    data: { context },
  }).then((note) => {
    res.status(200).json(note)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

// ============================= DELETE =============================

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  prisma.note.delete({
    where: { id },
  }).then((note) => {
    res.status(200).json(note)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

export default router
