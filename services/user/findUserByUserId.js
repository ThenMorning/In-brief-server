const dbUtils = require('../../common/db') 
module.exports = async (userId) => {
    let _sql = "SELECT * from user where user_id = '" + userId + "'"
    const _arr = await dbUtils.query( _sql )
    return _arr[0];
}