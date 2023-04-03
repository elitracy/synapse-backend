import request from "supertest";
import config from "../config"
import app from "../app"

const frontend = 'https://www.synapsenote.com';
// const backend = 'https://api.synapsenote.com';

console.log(`NODE_ENV=${config.NODE_ENV}`);

describe('Frontend Status', () => {
	it('Home page 200 status code', async () => {
		const response = await request(frontend)
			.get('/');

		expect(response.statusCode).toBe(200);
	});
});

describe('Backend Status', () => {
	it('Api home page 200 status code', async () => {
		const response = await request(app)
			.get('/');

		expect(response.statusCode).toBe(200);
	});
});

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
