import express from "express"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const router = express.Router()

// ============================= GET =============================

// get all users
router.get('/', async (_, res) => {
  prisma.user.findMany().then((user) => {
    res.status(200).json(user)
  }).catch((err) => {
    res.status(400).json(err)
  })
})


// get user by id
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
      res.status(200).json(note)
    }).catch((err) => {
      res.status(400).json(err)
    })
})

// get users tag adjacency list
router.get('/:id/adj_list', async (req, res) => {
  const { id } = req.params

  prisma.user
    .findUnique({
      where: { id },
      select: {
        tag_adjacency_list: true
      }
    }).then((adj_list) => {
      res.status(200).json(adj_list)
    }).catch((err) => {
      res.status(400).json(err)
    })
})


// ============================= POST =============================

// create a user
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

// get a user by email (POST request because body is needed with axios by request of frontend team)
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

// get a user's adjacency list (POST request because body is needed with axios by request of frontend team)
router.post('/:id/adj_list', async (req, res) => {
  const { id } = req.params
  const { adj_list } = req.body

  prisma.user
    .update({
      where: { id },
      data: {
        tag_adjacency_list: adj_list
      }
    }).then((user) => {
      res.status(200).json(user)
    }).catch((err) => {
      res.status(400).json(err)
    })
})

// ============================= PUT =============================

// update a user's password
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

// update a user's email
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

// update a user's name
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

// delete a user by id
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
