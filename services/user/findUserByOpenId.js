const dbUtils = require('../../common/db') 
module.exports = async (openId) => {
    let _sql = "SELECT * from user where open_id = '" + openId + "'"
    console.log(_sql)
    return await dbUtils.query( _sql );
}