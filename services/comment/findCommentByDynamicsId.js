const dbUtils = require('../../common/db') 
module.exports = async (dynamics_id,isAll) => {
    let conditionStr = isAll ? "limit 1" : "";
    let _sql = "SELECT * from comment where  dynamics_id = '"  + dynamics_id + "' " + conditionStr;
    console.log(_sql)
    return await dbUtils.query( _sql );
}