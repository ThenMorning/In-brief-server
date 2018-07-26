const router = require('koa-router')()
const home = require('../controllers/home')

router.get('/', home)
module.exports = router
