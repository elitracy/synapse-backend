import express from "express"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const router = express.Router()

router.get('/', async (_, res) => {
  prisma.group.findMany({
    include:{users: true}
  }).then((group) => {
    res.status(200).json(group)
  }).catch((err) => {
    res.status(400).json(err)
  })
})


router.get('/:id', async (req, res) => {
  const { id } = req.params

  prisma.group
    .findMany({
      where: {id: id},
      include: { users: true }, 
    }).then((group) => {
      res.status(200).json(group)
    }).catch((err) => {
      res.status(400).json(err)
    })
})

router.post('/', async (req, res) => {
  const { name } = req.body
  prisma.group.create({
    data: {
      name
    },
  }).then((group) => {
    res.status(200).json(group)
  }).catch((err) => {
    res.status(400).json(err)
  })
})


router.delete('/:id', async (req, res) => {
  const { id } = req.params
  prisma.group.delete({
    where: { id },
  }).then((group) => {
    res.status(200).json(group)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

export default router
