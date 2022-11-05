import request from 'supertest'
import app from '../src/app'


describe('Boards routes', () => {
    test('GET /boards', async () => {

        await request(app.callback())
            .get('/boards')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err: any, res: any) {
                if (err) throw err
            })
    })
})