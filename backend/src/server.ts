import app from './app'

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log(`Koa listening on port ${port}`)
})

export default server