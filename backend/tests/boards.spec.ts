import request from 'supertest'
import app from '../src/app'


describe('Boards routes', () => {
    test('GET /boards', async () => {

        await request(app.callback())
            .get('/boards')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((res) => {
                console.log(res.body)
                expect(res.body).toHaveLength(1)
            })
    })
})