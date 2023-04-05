import request from "supertest"
import app from "app"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

let noteID: string
describe("Backend Note-Tag Operations", () => {
  const tags = ["tag1", "tag2"]

  it('Make a note', async () => {
    const response = await request(app)
      .post('/api/notes')
    expect(response.statusCode).toBe(200)
    noteID = response.body.id
  })

  it('Note should have no tags', async () => {
    const response = await request(app)
      .get(`/api/notes/${noteID}/tags`)
      .expect(200)
    expect(response.body.tags.length).toBe(0)
  })

  it('Update a note to have multiple tags', async () => {
    await request(app)
      .put(`/api/notes/tags/${noteID}`)
      .send({ tags })
      .expect(200)
  })

  it('Note should have multiple tags', async () => {
    const response = await request(app)
      .get(`/api/notes/${noteID}/tags`)
      .expect(200)
    expect(response.body.tags.map((t: { id: string, name: string }) => t.name)).toStrictEqual(tags)
    expect(response.body.tags.length).toBe(2)
  })

  it('There should be 2 tags in the database', async () => {
    const response = await request(app)
      .get(`/api/tags`)
      .expect(200)
    expect(response.body.length).toBe(2)
  })

  it('Update a note to have one new tag', async () => {
    await request(app)
      .put(`/api/notes/tags/${noteID}`)
      .send({ tags: ["single test tag"] })
      .expect(200)
  })

  it('Note should have one new tag', async () => {
    const response = await request(app)
      .get(`/api/notes/${noteID}/tags`)
      .expect(200)
    expect(response.body.tags.map((t: { id: string, name: string }) => t.name)).toStrictEqual(["single test tag"])
    expect(response.body.tags.length).toBe(1)
  })

  it('There should be 3 tags in the database', async () => {
    const response = await request(app)
      .get(`/api/tags`)
      .expect(200)
    expect(response.body.length).toBe(3)
  })

  const newTags = tags.concat(["single test tag", "new test tag"])
  it('Update a note to have all three tags and a new tag', async () => {
    await request(app)
      .put(`/api/notes/tags/${noteID}`)
      .send({ tags: newTags })
      .expect(200)
  })

  it('Note should have all four tags', async () => {
    const response = await request(app)
      .get(`/api/notes/${noteID}/tags`)
      .expect(200)
    expect(response.body.tags
      .map((t: { id: string, name: string }) => t.name))
      .toStrictEqual(newTags)
    expect(response.body.tags.length).toBe(4)
  })

  it('There should be 4 tags in the database', async () => {
    const response = await request(app)
      .get(`/api/tags`)
      .expect(200)
    expect(response.body.length).toBe(4)
  })


  it('Delete a note by ID', async () => {
    const response = await request(app)
      .delete(`/api/notes/${noteID}`)
    expect(response.statusCode).toBe(200)
  })

  it('Drop all tags from database', async () => {
    await prisma.tag.deleteMany()
    const response = await request(app)
      .get(`/api/tags`)
      .expect(200)
    expect(response.body.length).toBe(0)
  })
})
