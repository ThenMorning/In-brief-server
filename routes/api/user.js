const router = require('koa-router')()
const user = require('../../controllers/user')


router.post('/', user.findUserByOpenId)

module.exports = router