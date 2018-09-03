const dbUtils = require('../../common/db') 
module.exports = async (userId) => {
    let _sql = "SELECT * from user where user_id = '" + userId + "'"
    return await dbUtils.query( _sql )
}