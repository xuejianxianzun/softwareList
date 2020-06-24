/* eslint-disable @typescript-eslint/no-var-requires */
const Koa = require('koa')
const router = require('koa-router')()
const cros = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

const { API } = require('./api')

app.use(
  cros({
    origin: (ctx) => {
      return '*' // 允许来自所有域名请求
      // if (ctx.url === '/api/v2/user/profile/avatar') {
      //   return '*'
      // }
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'HEAD', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  })
)

app.use(async (ctx, next) => {
  await next()
})

app.use(bodyParser())
app.use(router.routes())

router.get('/category/all', async (ctx, next) => {
  const categoryList = await API.getCategoryList().catch((err) => {
    console.log(err)
  })
  ctx.response.type = 'application/json'
  ctx.status = 200
  ctx.response.body = {
    error: false,
    message: '',
    body: {
      categoryList
    }
  }
})

router.get('/category/:name', async (ctx, next) => {
  const softwareList = await API.getCategory(ctx.params.name).catch((err) => {
    console.log(err)
  })
  ctx.response.type = 'application/json'
  ctx.status = 200
  ctx.response.body = {
    error: false,
    message: '',
    body: {
      softwareList
    }
  }
})

router.get('/default', async (ctx, next) => {
  const softwareList = await API.getDefaultList(6).catch((err) => {
    console.log(err)
  })
  ctx.response.type = 'application/json'
  ctx.status = 200
  ctx.response.body = {
    error: false,
    message: '',
    body: {
      softwareList
    }
  }
})

router.get('/:name', async (ctx, next) => {
  const software = await API.getSoftware(ctx.params.name).catch((err) => {
    console.log(err)
  })
  ctx.response.type = 'application/json'
  if (software === null) {
    ctx.status = 404
    ctx.response.body = {
      error: true,
      message: '404 not found',
      body: software
    }
  } else {
    ctx.status = 200
    ctx.response.body = {
      error: false,
      message: '',
      body: software
    }
  }
})

router.get('/search/:word', async (ctx, next) => {
  const softwareList = await API.search(ctx.params.word).catch((err) => {
    console.log(err)
  })
  ctx.response.type = 'application/json'
  ctx.status = 200
  ctx.response.body = {
    error: false,
    message: '',
    body: {
      softwareList
    }
  }
})

app.listen(3001)
