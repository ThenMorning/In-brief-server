const wechatService = require('../services/wechat/index')
const userService = require('../services/user/index')
const User = require('../models/User')
const Result = require('../common/_result')

const user = {};
user.findUserByOpenId = async (ctx) => {
  const wechatResult = await wechatService.getOpenId(ctx.request.body.code);
  let open_id = JSON.parse(wechatResult).openid;
  let user_id;
  let queryResult = await userService.findUserByOpenId(open_id);
  if (queryResult.length) {
    const result = new Result(1, queryResult, '')
    ctx.body = result
    user_id = queryResult[0].user_id;
  } else {
    let user_name = ctx.request.body.name;
    let avatar_url = ctx.request.body.avatarUrl;
    let city = ctx.request.body.city;
    let province = ctx.request.body.province;
    let country = ctx.request.body.country;
    let gender = ctx.request.body.gender;
    let new_user = new User(user_name, open_id, null, avatar_url, city, province, country, gender)
    let insertResult = await userService.insertUser(new_user)
    if (insertResult.affectedRows) {
      let queryResult = await userService.findUserByOpenId(open_id);
      const result = new Result(1, queryResult, '')
      ctx.body = result
      user_id = queryResult[0].user_id;
    } else {
      //创建用户失败
    }
  }
  if(user_id) ctx.session.user_id = user_id;
}
user.findUserByUserId = async (ctx) => {
  let queryResult = await userService.findUserByUserId(ctx.query.user_id);
  console.log(queryResult)
  if(queryResult.length){
    const result = new Result(1, queryResult, '')
    ctx.body = result
    user_id = queryResult[0].user_id;
  }else{
    const result = new Result(0, {}, '登陆失效，请重新登陆!')
    ctx.body = result
  }
}

module.exports = user