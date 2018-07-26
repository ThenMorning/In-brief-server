const router = require('koa-router')()
const wechat = require('../controllers/wechat')


router.post('/getOpenId', wechat.getOpenId)

module.exports = router