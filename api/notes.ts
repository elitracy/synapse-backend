import express from "express"
import { PrismaClient } from '@prisma/client'
import keyword_extractor from 'keyword-extractor'
import { askQuestion, getReferences } from "../utils/gpt"

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

// get all notes with a specific tag given the tagID
router.get('/tag/:id', async (req, res) => {
  const { id } = req.params

  prisma.note
    .findMany({
      where: { tags: { some: { id: id } } },
    }).then((note) => {
      res.status(200).json(note)
    }).catch((err) => {
      res.status(400).json(err)
    })
})

// get count of notes with a specific tag that are public
router.get('/tag/:id/count', async (req, res) => {
  const { id } = req.params

  prisma.note.groupBy({
    by: ['isPublic'],
    where: { tags: { some: { id: id } } },
    _count: {
      id: true
    }


  }).then((note) => {
    res.status(200).json(note)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

// get a note by id and include all of its tags
router.get('/:id/tags', async (req, res) => {
  const { id } = req.params

  prisma.note
    .findFirst({
      where: { id },
      include: { tags: true },
    }).then((note) => {
      res.status(200).json(note)
    }).catch((err) => {
      res.status(400).json(err)
    })
})

router.get('/tags/recommend', async (req, res) => {

  const { content }: { content: string } = req.body

  const recommended_tags = keyword_extractor.extract(content, {
    language: "english", remove_digits: true,
    return_changed_case: true,
    remove_duplicates: false,
  })

  // get count of keywords
  const tag_counts = recommended_tags.reduce((acc: { [key: string]: number }, curr: string) => {
    if (curr in acc) acc[curr]++
    else acc[curr] = 1
    return acc
  }, {})


  // sort keywords by highest count
  const sorted_tag_counts = Object.entries(tag_counts)
    .sort((a, b) => b[1] - a[1])
    .map(pair => pair[0])

  res.status(200).json({ recommended_tags: sorted_tag_counts })
})


router.get('/gpt/question', async (req, res) => {
  const { question } = req.body

  const gpt_response = await askQuestion(question)

  if (gpt_response.choices.length == 0) {
    res.status(400).send({ data: "error, invalid request" })
  } else {
    res.status(200).send({ data: gpt_response.choices })
  }
})

router.get('/gpt/getReferences', async (req, res) => {
  const { content } = req.body

  const gpt_response = await getReferences(content)

  if (gpt_response.choices.length == 0) {
    res.status(400).send({ data: "error, invalid request" })
  } else {
    res.status(200).send({ data: gpt_response.choices })
  }
})

// ============================= POST =============================

router.post('/', async (req, res) => {
  const { content, userId, title, isPublic } = req.body
  prisma.note.create({
    data: {
      content, userId, title, isPublic
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

router.put('/title/:id', async (req, res) => {
  const { id } = req.params
  let { title } = req.body

  prisma.note.update({
    where: { id },
    data: { title },
  }).then((note) => {
    res.status(200).json(note)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

router.put('/isPublic/:id', async (req, res) => {
  const { id } = req.params
  let { isPublic } = req.body

  prisma.note.update({
    where: { id },
    data: { isPublic },
  }).then((note) => {
    res.status(200).json(note)
  }).catch((err) => {
    res.status(400).json(err)
  })
})

router.put('/tags/:id', async (req, res) => {
  const { id } = req.params
  let { tags }: { tags: string[] } = req.body

  await prisma.note.update({
    where: { id },
    data: {
      tags: { set: [] }
    }
  })

  await prisma.note.update({
    where: { id },
    data: {
      tags: {
        connectOrCreate: tags.map(tag => {
          return {
            where: { name: tag },
            create: { name: tag }
          }
        })
      }
    }
  }).catch(err => console.error(err))

  prisma.note.findUnique({
    where: { id },
  }).then((note) => {
    res.status(200).json(note)
  }).catch((err) => {
    console.log(err)
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
