const dbUtils = require('../../common/db') 
module.exports = async (dynamics_id,user_id) => {
    let _sql = "SELECT 1 from likes where user_id = '" + user_id + "' and dynamics_id = '"  + dynamics_id + "'  limit 1"
    const count = await dbUtils.query( _sql )
    return count.length?1:0;
}