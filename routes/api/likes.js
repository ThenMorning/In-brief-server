const router = require('koa-router')()
const likes = require('../../controllers/likes')


router.post('/', likes.insertOrDeleteLikes)

module.exports = router