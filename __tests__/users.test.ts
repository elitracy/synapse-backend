import request from 'supertest'
import app from 'app'

let userID: string 
describe('Backend User Operations', () => {
  it('Make a user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        'name': 'jest',
        'email': 'jest@gmail.com',
        'password': 'jestPass'
      }).expect(200)
    userID = response.body.id
  })

  it('Query a user by ID', async () => {
    const response = await request(app)
      .get(`/api/users/${userID}`)
      .expect(200)
    expect(response.body.name).toBe('jest')
    expect(response.body.email).toBe('jest@gmail.com')
  })

  it('Delete a user by ID', async () => {
    await request(app)
      .delete(`/api/users/${userID}`)
      .expect(200)
  })

})


let noteID: string 
describe('Backend User-Note Operations', () => {
  it('Make a user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        'name': 'bob',
        'email': 'bob@gmail.com',
        'password': 'bobPass'
      }).expect(200)
    userID = response.body.id
  })

  it('User should have no notes', async () => {
    const response = await request(app)
      .get(`/api/users/${userID}/notes`)
      .expect(200)
    expect(response.body.length).toBe(0)
  })

  it('Add notes to a user', async () => {
    const response = await request(app)
      .post(`/api/notes`)
      .send({
        'title': 'Test Note',
        'isPublic': false,
        'userId': `${userID}`,
        'content': 'I am a test content for this note'
      })
      .expect(200)
    expect(response.body.title).toBe('Test Note')
    expect(response.body.isPublic).toBe(false)
    expect(response.body.userId).toBe(userID)
    expect(response.body.content).toBe('I am a test content for this note')
    noteID = response.body.id
  })

  it('User should have one note', async () => {
    const response = await request(app).get(`/api/users/${userID}/notes`).expect(200)
    expect(response.body.length).toBe(1)
  })

  it('Delete a note by ID', async () => {
    await request(app)
      .delete(`/api/notes/${noteID}`)
      .expect(200)
  })

  it('User should have no notes', async () => {
    const response = await request(app)
      .get(`/api/users/${userID}/notes`)
      .expect(200)
    expect(response.body.length).toBe(0)
  })

  it('Delete a user by ID', async () => {
    const response = await request(app)
      .delete(`/api/users/${userID}`)
    expect(response.statusCode).toBe(200)
  })
})
