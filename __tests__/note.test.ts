import request from "supertest"
import app from "app"

let noteID: string
describe('Backend Note Operations', () => {
  it('Make a note', async () => {
    const response = await request(app)
      .post('/api/notes').expect(200)
    expect(response.statusCode).toBe(200)
    noteID = response.body.id
  })

  it('Query a note by ID', async () => {
    const response = await request(app)
      .get(`/api/notes/${noteID}`).expect(200)
    expect(response.statusCode).toBe(200)
  })

  it('Update a note title by ID', async () => {
    const response = await request(app)
      .put(`/api/notes/title/${noteID}`)
      .send({ title: "Updated Title" })
      .expect(200)
    expect(response.body.title).toBe("Updated Title")
  })

  it('Update a note content by ID', async () => {
    const response = await request(app)
      .put(`/api/notes/content/${noteID}`)
      .send({ content: "Updated content" })
      .expect(200)
    expect(response.body.content).toBe("Updated content")
  })

  it('Update a note isPublic by ID', async () => {
    const response = await request(app)
      .put(`/api/notes/isPublic/${noteID}`)
      .send({ isPublic: true })
      .expect(200)
    expect(response.body.isPublic).toBe(true)
  })

  it('Delete a note by ID', async () => {
    const response = await request(app)
      .delete(`/api/notes/${noteID}`)
    expect(response.statusCode).toBe(200)
  })

})

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

  it('Update a note tags by note ID', async () => {
    await request(app)
      .put(`/api/notes/tags/${noteID}`)
      .send({ tags })
      .expect(200)
  })

  it('Note should have two tags', async () => {
    const response = await request(app)
      .get(`/api/notes/${noteID}/tags`)
      .expect(200)
    expect(response.body.tags.map((t: { id: string, name: string }) => t.name)).toStrictEqual(tags)
    expect(response.body.tags.length).toBe(2)
  })


  it('Delete a note by ID', async () => {
    const response = await request(app)
      .delete(`/api/notes/${noteID}`)
    expect(response.statusCode).toBe(200)
  })
})
