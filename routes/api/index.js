const router = require('koa-router')()
const user = require('./user')
const dynamics = require('./dynamics')

router.use('/user', user.routes(), user.allowedMethods())
router.use('/dynamics', dynamics.routes(), dynamics.allowedMethods())

module.exports = router
