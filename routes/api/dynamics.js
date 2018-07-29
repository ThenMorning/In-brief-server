const router = require('koa-router')()
const dynamics = require('../../controllers/dynamics')


router.get('/', dynamics.getAllDynamics)

module.exports = router