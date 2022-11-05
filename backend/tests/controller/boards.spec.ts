import request from 'supertest'
import app from '../../src/app'
import { StatusCodes } from 'http-status-codes'

const getBoardsPath = '/boards'
const getBoardPath = '/boards/:id'
const createBoardPath = '/boards'

describe('Boards controller', () => {
  describe('GET', () => {
    test(`${getBoardsPath} should return status ${StatusCodes.OK} and a list of boards`, async () => {
      await request(app.callback())
        .get('/boards')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect((res) => {
          console.log(res.body)
          expect(res.body).toHaveLength(1)
        })
    })

    test(`${getBoardPath} should return status ${StatusCodes.NOT_FOUND} when no board is found with a message`, async () => {
      await request(app.callback())
        .get('/boards/999')
        .expect(StatusCodes.NOT_FOUND)
        .expect((res) => {
          console.log(res.body)
          expect(res.body).toBe('Could not find a board with that id')
        })
    })
  })

  describe('POST', () => {
    test(`${createBoardPath} should return status ${StatusCodes.CREATED} and an id when successful`, async () => {
      const board = {}
      await request(app.callback())
        .post('/boards', )
        .send(board)
        .expect(StatusCodes.CREATED)
        .expect((res) => {
          console.log(res.body)
          expect(res.body.id).toBeDefined()
        })
    })
  })
})