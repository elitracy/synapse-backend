import request from "supertest";
import app from "../app"

let noteID;
describe('Backend Note Operations', () => {
  it('Make a note', async () => {
    const response = await request(app)
      .post('/api/notes');
    expect(response.statusCode).toBe(200)
    noteID = response._body.id;
  });

  it('Query a note by ID', async () => {
    const response = await request(app)
      .get(`/api/notes/${noteID}`);
    expect(response.statusCode).toBe(200)
  });

  it('Update a note title by ID', async () => {
    const response = await request(app)
      .put(`/api/notes/title/${noteID}`)
      .send({ title: "Updated Title" })
      .expect(200)
    expect(response._body.title).toBe("Updated Title")
  });

  it('Update a note content by ID', async () => {
    const response = await request(app)
      .put(`/api/notes/content/${noteID}`)
      .send({ content: "Updated content" })
      .expect(200)
    expect(response._body.content).toBe("Updated content")
  });

  it('Update a note isPublic by ID', async () => {
    const response = await request(app)
      .put(`/api/notes/isPublic/${noteID}`)
      .send({ isPublic: true })
      .expect(200)
    expect(response._body.isPublic).toBe(true)
  });

  it('Delete a note by ID', async () => {
    const response = await request(app)
      .delete(`/api/notes/${noteID}`);
    expect(response.statusCode).toBe(200)
  });

});
