const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const static = require('koa-static')
const views = require('koa-views')

const app = new Koa()
const router = new Router()

app.use(static(__dirname + '/static'))
app.use(koaBody({
  multipart: true
}))
app.use(views(__dirname + '/views', {
  extension: 'html'
}))

// views routers
router.get('/photo', async (ctx) => {
  await ctx.render('photo')
})
router.get('/login', async (ctx) => {
  await ctx.render('login.html')
})

// api routers
router.post('/upload', async (ctx, next) => {
  console.log(ctx.request.files.img.name)
  ctx.body = 'ok'
})

app.use(router.routes())

app.listen(8888)