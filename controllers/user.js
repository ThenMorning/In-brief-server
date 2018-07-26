const wechatService = require('../services/wechat/index')
const userService = require('../services/user/index')
const User = require('../models/User')

const user = {};
user.findUserByOpenId = async (ctx) => {
  console.log(ctx.request.body)

  const wechatResult = await wechatService.getOpenId(ctx.request.body.code);
  let open_id = JSON.parse(wechatResult).openid;
  let dbResult = await userService.findUserByOpenId(open_id);
  if(dbResult.length){
    ctx.body = dbResult;
  }else{
    let user_name = ctx.request.body.name;
    let avatar_url = ctx.request.body.avatarUrl;
    let city = ctx.request.body.city;
    let province = ctx.request.body.province;
    let country = ctx.request.body.country;
    let gender = ctx.request.body.gender;
    let new_user = new User(user_name,open_id,null,avatar_url,city,province,country,gender)
    userService.insertuser(new_user) ? ctx.body = new_user : ctx.throw(500)
  }
}
module.exports = user