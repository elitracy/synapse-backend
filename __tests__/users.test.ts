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
        'password': 'jestPass',
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

  it('Query user by email', async () => {
    const response = await request(app)
      .post(`/api/users/email`)
      .send({ email: 'jest@gmail.com' })
      .expect(200)
    expect(response.body.name).toBe('jest')
    expect(response.body.email).toBe('jest@gmail.com')
  })

  it('Change a users password', async () => {
    const response = await request(app)
      .put(`/api/users/${userID}/password`)
      .send({ password: 'newpassword' })
      .expect(200)
    expect(response.body.password).toBe('newpassword')
  })

  it('Change a users email', async () => {
    const response = await request(app)
      .put(`/api/users/${userID}/email`)
      .send({ email: 'new@email.com' })
      .expect(200)
    expect(response.body.email).toBe('new@email.com')
  })

  it('Change a users name', async () => {
    const response = await request(app)
      .put(`/api/users/${userID}/name`)
      .send({ name: 'New Name' })
      .expect(200)
    expect(response.body.name).toBe('New Name')
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

  it('User can edit the content of their note', async () => {
    const response = await request(app)
      .put(`/api/notes/content/${noteID}`)
      .send({
        content: "I am updated note content"
      })
      .expect(200)
    expect(response.body.content).toBe("I am updated note content")
  })

  it('User can edit the title of their note', async () => {
    const response = await request(app)
      .put(`/api/notes/title/${noteID}`)
      .send({
        title: "Updated Title"
      })
      .expect(200)
    expect(response.body.title).toBe("Updated Title")
  })

  it('User can edit the privacy of their note', async () => {
    const response = await request(app)
      .put(`/api/notes/isPublic/${noteID}`)
      .send({
        isPublic: true
      })
      .expect(200)
    expect(response.body.isPublic).toBe(true)
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

  it('User should no longer exist', async () => {
    const response = await request(app)
      .get(`/api/users/${userID}`)
      .expect(200)
    expect(response.body).toBeNull()
  })
})
