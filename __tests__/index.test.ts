import request from "supertest"
import app from "../app"

const frontend = 'https://www.synapsenote.com'
// const backend = 'https://api.synapsenote.com'

describe('Frontend Status', () => {
	it('Home page 200 status code', async () => {
		const response = await request(frontend)
			.get('/')

		expect(response.statusCode).toBe(200)
	})
})

describe('Backend Status', () => {
	it('Api home page 200 status code', async () => {
		const response = await request(app)
			.get('/')

		expect(response.statusCode).toBe(200)
	})
})
