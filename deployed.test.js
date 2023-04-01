import request from "supertest";

const frontend = 'https://www.synapsenote.com';
const backend = 'https://api.synapsenote.com';

describe('Frontend Status', () => {
	it('should return a 200 status code', async () => {
		const response = await request(frontend)
			.get('/');

		expect(response.statusCode).toBe(200);
	});
});

describe('Backend Status', () => {
	it('should return a 200 status code', async () => {
		const response = await request(backend)
			.get('/');

		expect(response.statusCode).toBe(200);
	});
});

