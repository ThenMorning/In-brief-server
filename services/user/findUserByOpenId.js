const dbUtils = require('../../common/db') 
module.exports = async (openId) => {
    let _sql = "SELECT * from user where open_id = '" + openId + "'"
    console.warn(_sql)
    let result = await dbUtils.query( _sql )
    //如果有这个用户，返回
    if(result.length){
        return result[0]
    }
    //否则初始化一个默认用户插入数据库
    else{
        
    }
    return '未找到该用户';
}