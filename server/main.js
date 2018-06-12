const path = require('path')
const Koa = require('koa')
const koaStatic = require('koa-static')
const views = require('koa-views')
const routers = require('./routers')

const app = new Koa()
const port = process.env.SERVER_PORT && Number(process.env.SERVER_PORT)

app.use(koaStatic(
  path.join(__dirname , '../dist')
))

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))


app.use(routers.routes()).use(routers.allowedMethods())

app.listen(port)