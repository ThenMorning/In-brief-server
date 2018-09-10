const router = require('koa-router')()
const comment = require('../../controllers/comment')


router.post('/', comment.insertComment)

module.exports = router