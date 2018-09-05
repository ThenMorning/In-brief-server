const router = require('koa-router')()
const dynamics = require('../../controllers/dynamics')


router.get('/', dynamics.findDynamics)
router.get('/hot', dynamics.findHotDynamics)
router.post('/', dynamics.insertDynamics)

module.exports = router