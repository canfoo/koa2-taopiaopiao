const Koa = require('koa')
const serve = require('koa-static')

const app = new Koa()
const port = 3030

app.use( async ( ctx ) => {
  ctx.body = 'hello koa2'
})

app.listen(port)

console.log(`node service listening on port ${port}...`)