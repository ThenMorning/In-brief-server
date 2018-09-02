const router = require('koa-router')()
const dynamics = require('../../controllers/dynamics')


router.get('/', dynamics.getAllDynamics)
router.post('/', dynamics.insertDynamics)

module.exports = router