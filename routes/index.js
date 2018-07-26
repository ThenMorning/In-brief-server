/**
 * 整合所有子路由
 */

const router = require('koa-router')()

const home = require('./home')
const wechat = require('./wechat')
const user = require('./user')
const error = require('./error')

router.use('/', home.routes(), home.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())
router.use('/wechat', wechat.routes(), wechat.allowedMethods())

//捕获所有的404
router.use('*', error.routes(), error.allowedMethods())

module.exports = router
