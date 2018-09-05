const dbUtils = require('../../common/db') 
module.exports = async () => {
    const _sql = "SELECT * from dynamics order by like_count + comment_count DESC limit 3";
    return await dbUtils.query( _sql );
}