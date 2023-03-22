import express from "express"
import { PrismaClient } from '@prisma/client'
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

// ============================= POST =============================

// ============================= PUT =============================

// ============================= DELETE =============================

export default router
