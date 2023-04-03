import request from "supertest";
import config from "../config"
import app from "../app"

//console.log(`NODE_ENV=${config.NODE_ENV}`);

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

	it('Delete a note by ID', async () => {
		const response = await request(app)
			.delete(`/api/notes/${noteID}`);
		expect(response.statusCode).toBe(200)
	});

});
