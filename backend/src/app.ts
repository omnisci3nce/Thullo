import Koa from 'koa'
import Router from 'koa-router'
import BodyParser from 'koa-bodyparser'

import boardsRouter from './modules/boards/boards.routes'

const app = new Koa()

// middlewares
app.use(BodyParser())

// routes
const baseRouter = new Router()
baseRouter.use('/boards', boardsRouter.routes())

app.use(baseRouter.routes())

export default app