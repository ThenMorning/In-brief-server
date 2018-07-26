const wechatService = require('../services/wechat/index')

const wechat = {};
wechat.getOpenId = async (ctx) => {
    wechatService.getOpenId(ctx.request.body.code);
}

module.exports = wechat