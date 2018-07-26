const router = require('koa-router')()
const user = require('../controllers/user')

//router.prefix('/users')

//获取所有user
router.get('/allUser', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
