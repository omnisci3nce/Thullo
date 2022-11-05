import Koa from 'koa'
import Router from 'koa-router'
import json from 'koa-json'

import boardsRouter from './modules/boards/boards.routes'

const app = new Koa()

// middlewares
app.use(json())

// routes
const baseRouter = new Router()
baseRouter.use('/boards', boardsRouter.routes())

app.use(baseRouter.routes())

export default app