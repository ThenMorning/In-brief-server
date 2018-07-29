const dynamicsService = require('../services/dynamics/index')
const dynamics = {};
dynamics.getAllDynamics = async (ctx) => {
    let queryResult = await dynamicsService.getAllDynamics()
    ctx.body = queryResult
}
module.exports = dynamics