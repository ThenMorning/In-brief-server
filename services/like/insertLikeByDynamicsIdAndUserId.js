const dbUtils = require('../../common/db') 
module.exports = async (dynamics_id,user_id,user_name) => {
    let _sql = 
    "INSERT into likes (dynamics_id,user_id,user_name) values ('"+
    dynamics_id+"','"+
    user_id+"','"+
    user_name+"')";
    const result = await dbUtils.query( _sql )
    return result.affectedRows?1:0;
}