const dbUtils = require('../../common/db') 
module.exports = async () => {
    let _sql = "SELECT * from dynamics";
    return await dbUtils.query( _sql );
}