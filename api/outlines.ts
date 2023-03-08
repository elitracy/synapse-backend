import express from "express"
import { PrismaClient } from '@prisma/client'
import generateTranscript from "../utils/generateTranscript"
import generateOutline from "../utils/generateOutline"

const prisma = new PrismaClient()
const router = express.Router()

// ============================= GET =============================

router.get("/", (_, res) => {
  prisma.outline.findMany().then((outline) => {
    res.status(200).json(outline)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

// ============================= POST =============================

router.post('/', async (req, res) => {
  const { media, userId } = req.body

  const transcript = await generateTranscript(media)
  const contentTree = await generateOutline(transcript)

  prisma.outline.create({
    data: {
      contentTree, userId,
      lecture: {
        create:
        {
          transcript,
          userId
        }

      }
    },

  }).then((outline) => {
    res.status(200).json(outline)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

// ============================= PUT =============================

// ============================= DELETE =============================

export default router
