const dbUtils = require('../../common/db') 
module.exports = async (user) => {
    let _sql = 
    "INSERT into user (user_name,open_id,motto,avatar_url,city,province,country,gender) values ('"+
    user.user_name+"','"+
    user.open_id+"','"+
    user.motto+"','"+
    user.avatar_url+"','"+
    user.city+"','"+
    user.province+"','"+
    user.country+"','"+
    user.gender+"')";
    return await dbUtils.query( _sql )
}