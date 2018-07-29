const dbUtils = require('../../common/db') 
module.exports = async (dynamics) => {
    // let _sql = 
    // "INSERT into dynamics (user_id,user_name,user_motto,avatar_url,content,like_count,unlike_count,comment_count) values ('"+
    // dynamics.user_name+"','"+
    // dynamics.open_id+"','"+
    // dynamics.motto+"','"+
    // dynamics.avatar_url+"','"+
    // dynamics.city+"','"+
    // dynamics.gender+"')";
    return await dbUtils.query( _sql );
}