import Router from "koa-router";

const router = new Router()

// testing!
type Board = {
  id: number;
  name: string;
}

router.get('/', (ctx, next) => {
  ctx.body = <Board[]>[{ id: 1, name: 'My Kanban Board' }]
})

export default router