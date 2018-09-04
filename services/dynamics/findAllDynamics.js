const dbUtils = require('../../common/db') 
module.exports = async () => {
    let _sql = "SELECT * from dynamics ORDER BY dynamics.create_time desc";
    return await dbUtils.query( _sql );
}