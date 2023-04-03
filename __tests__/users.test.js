import request from "supertest";
import app from "../app"

let userID;
describe('Backend User Operations', () => {
  it('Make a user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        "name": "jest",
        "email": "jest@gmail.com",
        "password": "jestPass"
      });
    expect(response.statusCode).toBe(200)
    userID = response._body.id;
  });

  it('Query a user by ID', async () => {
    const response = await request(app)
      .get(`/api/users/${userID}`);
    expect(response._body.name).toBe('jest')
    expect(response._body.email).toBe('jest@gmail.com')
    expect(response.statusCode).toBe(200)
  });

  it('Delete a user by ID', async () => {
    const response = await request(app)
      .delete(`/api/users/${userID}`);
    expect(response.statusCode).toBe(200)
  });

});


let noteID
describe('Backend User-Note Operations', () => {
  it('Make a user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        "name": "jest",
        "email": "jest@gmail.com",
        "password": "jestPass"
      });
    expect(response.statusCode).toBe(200)
    userID = response._body.id;
  });

  it('User should have no notes', async () => {
    const response = await request(app)
      .get(`/api/users/${userID}/notes`)
      .expect(200)
    expect(response._body.length).toBe(0)
  })

  it('Add notes to a user', async () => {
    const response = await request(app)
      .post(`/api/notes`)
      .send({
        'title': "Test Note",
        'isPublic': false,
        'userId': `${userID}`,
        'content': 'I am a test content for this note'
      })
      .expect(200)
    expect(response._body.title).toBe("Test Note")
    expect(response._body.isPublic).toBe(false)
    expect(response._body.userId).toBe(userID)
    expect(response._body.content).toBe("I am a test content for this note")
    noteID = response._body.id
  })

  it('User should have one note', async () => {
    const response = await request(app).get(`/api/users/${userID}/notes`).expect(200)
    expect(response._body.length).toBe(1)
  })

  it('Delete a note by ID', async () => {
    const response = await request(app)
      .delete(`/api/notes/${noteID}`);
    expect(response.statusCode).toBe(200)
  });

  it('User should have no notes', async () => {
    const response = await request(app)
      .get(`/api/users/${userID}/notes`)
      .expect(200)
    expect(response._body.length).toBe(0)
  })

  it('Delete a user by ID', async () => {
    const response = await request(app)
      .delete(`/api/users/${userID}`);
    expect(response.statusCode).toBe(200)
  });
})
