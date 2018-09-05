const dbUtils = require('../../common/db') 
module.exports = async (options,dynamics_id) => {
    var setStr = "";
    for(let key in options){
        setStr +=  key + '=' + options[key]
    }
    let _sql = "UPDATE  dynamics SET " + setStr +" where dynamics_id = " + dynamics_id;
    return await dbUtils.query( _sql );
}