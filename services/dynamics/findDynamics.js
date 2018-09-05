const dbUtils = require('../../common/db') 
module.exports = async (options) => {
    var _sql;
    if(JSON.stringify(options) === '{}'){
         _sql = "SELECT * from dynamics ORDER BY dynamics.create_time desc";
    }else{
        let conditionStr = "where ";
        for(let key in options){
            conditionStr += key + ' = ' + options[key]
        }
        _sql = "SELECT * from dynamics " + conditionStr
    }
    return await dbUtils.query( _sql );
}