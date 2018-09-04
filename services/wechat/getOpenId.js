const _GET = require('../../common/_request')._GET
const config = require('../../config')

module.exports = async (code) => {
    const APPID = config.APP.APPID;
    const SECRET = config.APP.SECRET;
    const authorization_code = config.APP.authorization_code;
    const JSCODE = code;
    const url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + APPID + '&secret=' + SECRET + '&js_code=' + JSCODE + '&grant_type=' + authorization_code;
    return _GET(url);
}