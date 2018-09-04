const router = require('koa-router')()
const user = require('../../controllers/user')


router.post('/', user.findUserByOpenId)
router.get('/', user.findUserByUserId)

module.exports = router