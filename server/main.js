const path = require('path')
const Koa = require('koa')
const serve = require('koa-static')
const views = require('koa-views')
const routers = require('./routers')

const app = new Koa()
const port = 3030

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))


app.use(routers.routes()).use(routers.allowedMethods())

app.listen(port)