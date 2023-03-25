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


router.get('/tag/:id', async (req, res) => {
  const { id } = req.params

  prisma.note
    .findMany({
      where: { tags: {some: {id : id}} },
    }).then((note) => {
      res.status(200).json(note)
    }).catch((err) => {
      res.status(400).json(err)
    })
})


// ============================= POST =============================

router.post('/', async (req, res) => {
  const { content, userId } = req.body
  prisma.note.create({
    data: {
      content, userId
    },
  }).then((note) => {
    res.status(200).json(note)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

// ============================= PUT =============================

router.put('/content/:id', async (req, res) => {
  const { id } = req.params
  let { content } = req.body

  prisma.note.update({
    where: { id },
    data: { content },
  }).then((note) => {
    res.status(200).json(note)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

// router.put('/tags/:id', async (req, res) => {
//   const { id } = req.params
//   let { tags }: { tags: string[] } = req.body

//   await prisma.note.update({
//     where: { id },
//     data: {
//       tags: { set: [] }
//     }
//   })

//   await prisma.note.update({
//     where: { id },
//     data: {
//       tags: {
//         connectOrCreate: tags.map(tag => {
//           return {
//             where: { name: tag },
//             create: { name: tag }
//           }
//         })
//       }
//     }
//   }).catch(err => console.error(err))

//   prisma.note.findUnique({
//     where: { id },
//   }).then((note) => {
//     res.status(200).json(note)
//   }).catch((err) => {
//     console.log(err)
//     res.status(400).json(err)
//   })
// })


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
