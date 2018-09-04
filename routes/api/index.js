const router = require('koa-router')()
const user = require('./user')
const dynamics = require('./dynamics')
const likes = require('./likes')

router.use('/user', user.routes(), user.allowedMethods())
router.use('/dynamics', dynamics.routes(), dynamics.allowedMethods())
router.use('/likes', likes.routes(), likes.allowedMethods())


module.exports = router
