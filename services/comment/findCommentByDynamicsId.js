const dbUtils = require('../../common/db') 
module.exports = async (dynamics_id) => {
    let _sql = "SELECT * from comment where  dynamics_id = '"  + dynamics_id + "' limit 1";
    return await dbUtils.query( _sql );
}