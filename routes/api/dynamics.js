const router = require('koa-router')()
const dynamics = require('../../controllers/dynamics')


router.get('/', dynamics.findAllDynamics)
router.post('/', dynamics.insertDynamics)

module.exports = router