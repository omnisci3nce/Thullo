import Router from 'koa-router'
import { StatusCodes } from 'http-status-codes'
import { createList } from './lists.service'

const router = new Router()

router.post('/', async (ctx) => {
    const { name }: any = ctx.request.body
    const list = await createList(name)

    console.log(list)

    ctx.status = StatusCodes.CREATED
    ctx.body = { id: list.$id}
})

export default router