import Router from "koa-router";
import { getAll, getById } from "./boards.service";

const router = new Router()

router.get('/', async (ctx, next) => {
  const boards = await getAll()
  ctx.body = boards
})

router.get('/:id', async (ctx) => {
  const board = await getById(ctx.params['id'])
  ctx.body = board
})

export default router