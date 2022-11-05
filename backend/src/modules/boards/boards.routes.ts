import Router from "koa-router";
import { Board } from "./board.model";

const router = new Router()

router.get('/', async (ctx, next) => {
  const boards = await Board.query()
  ctx.body = boards
})

export default router