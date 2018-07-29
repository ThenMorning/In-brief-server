const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const MysqlStore = require('koa-mysql-session');
var session = require('koa-session-minimal');


const route = require('./routes/index')
const config = require('./config')

// error handler
onerror(app)

// session存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
}

//存放sessionId的cookie配置

let cookie = { // 与 cookie 相关的配置
  domain: 'localhost', // 写 cookie 所在的域名
  path: '/', // 写 cookie 所在的路径
  maxAge: 1000 * 30, // cookie 有效时长
  httpOnly: true, // 是否只用于 http 请求中获取
  overwrite: false // 是否允许重写
}

// 配置session中间件
app.use(session({
  key: 'SESSION_ID',
  store: new MysqlStore(sessionMysqlConfig),
  cookie: cookie
}))

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(route.routes(), route.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app