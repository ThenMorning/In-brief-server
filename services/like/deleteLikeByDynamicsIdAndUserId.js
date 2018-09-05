const dbUtils = require('../../common/db') 
module.exports = async (dynamics_id,user_id) => {
    let _sql = "DELETE  from likes where user_id = '" + user_id + "' and dynamics_id = '"  + dynamics_id + "'"
    const result = await dbUtils.query( _sql )
    return result.affectedRows?1:0;
}