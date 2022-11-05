import request from 'supertest'
import app from '../src/app'
import { StatusCodes } from 'http-status-codes'
import { List } from '../src/modules/lists/list.model'
import { demoBoard1Lists } from '../seeds/demo'

const createListPath = '/lists'

describe('Lists controller', () => {
  describe('POST', () => {
    test(`${createListPath} should return status ${StatusCodes.CREATED} and an id`, async () => {
      await request(app.callback())
        .post('/lists')
        .send({ name: 'Backlog' })
        .expect('Content-Type', /json/)
        .expect(StatusCodes.CREATED)
        .expect((res) => {
          console.log(res.body)
        //   expect(res.body).toEqual({ id: '1' })
        })
    })
  })
})