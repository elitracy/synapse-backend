import express from "express"
import { PrismaClient } from '@prisma/client'
import { linkNodes } from "../utils/gpt"
const prisma = new PrismaClient()

const router = express.Router()

// ============================= GET =============================

router.get('/', async (_, res) => {
  prisma.tag.findMany().then((tag) => {
    res.status(200).json(tag)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

router.get('/gpt/linkNodes', async (req, res) => {
  const { node1, node2 } = req.body

  const gpt_response = await linkNodes(node1, node2)

  if (gpt_response.choices.length == 0) {
    res.status(400).send({ data: "error, invalid request" })
  } else {
    res.status(200).send({ data: gpt_response.choices })
  }
})

// ============================= POST =============================

// ============================= PUT =============================

// ============================= DELETE =============================

router.delete('/:id', async (req, res) => {
  const id = req.params

  prisma.tag.delete({
    where: id
  }).then((tag) => {
    res.status(200).json(tag)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

export default router
