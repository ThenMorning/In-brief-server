const wechatService = require('../services/wechat/index')

const user = {};
user.getUserByOpenId = async (ctx) => {
  const openId = await wechatService.getOpenId(ctx.request.body.code);
  console.log(openId)
  ctx.body = openId;
}
module.exports = user