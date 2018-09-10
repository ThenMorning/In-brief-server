const dbUtils = require('../../common/db') 
module.exports = async (options) => {
    let _sql = 
    "INSERT into comment (user_id,dynamics_id,user_name,content) values ('"+
    options.user_id+"','"+
    options.dynamics_id+"','"+
    options.user_name+"','"+
    options.content+"')";
    return await dbUtils.query( _sql );
}