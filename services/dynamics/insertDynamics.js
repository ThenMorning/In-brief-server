const dbUtils = require('../../common/db') 
module.exports = async (dynamics) => {
    let _sql = 
    "INSERT into dynamics (user_id,content) values ('"+
    dynamics.user_id+"','"+
    dynamics.content+"')";
    return await dbUtils.query( _sql );
}