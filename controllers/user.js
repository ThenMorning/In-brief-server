const wechatService = require('../services/wechat/index')
const userService = require('../services/user/index')

const user = {};
user.findUserByOpenId = async (ctx) => {
  const wechatResult = await wechatService.getOpenId(ctx.request.body.code);

  let dbResult = await userService.findUserByOpenId(JSON.parse(wechatResult).openid);
  console.log(dbResult)
  ctx.body = dbResult;
}
module.exports = user