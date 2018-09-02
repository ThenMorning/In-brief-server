const dynamicsService = require('../services/dynamics/index')
const userService = require('../services/user/index')
const Dynamics = require('../models/Dynamics')
const DynamicsEntity = require('../entities/Dynamics')
const Result = require('../common/_result')
const dynamics = {};
dynamics.getAllDynamics = async (ctx) => {
    let allDynamics = await dynamicsService.getAllDynamics()
    let dynamicsList = await Promise.all(allDynamics.map(async (dynamics) => {
        let user = await userService.findUserByUserId(dynamics.user_id)
        console.log(user)
        return await generateDynamics(user)
    }))
    console.log(dynamicsList)
    const result = new Result(1, dynamicsList, '')
    ctx.body = result
}

const generateDynamics = async (user) => {
        let dynamicsEntity = new DynamicsEntity();
        dynamicsEntity.setUserId(user.user_id)
        dynamicsEntity.setUserName(user.user_name)
        dynamicsEntity.setMotto(user.motto)
        dynamicsEntity.setAvatarUrl(user.avatar_url)
        dynamicsEntity.setLocation('')
        dynamicsEntity.setGender(user.gender)
        dynamicsEntity.setContent(dynamics.content)
        dynamicsEntity.setLikeCount(dynamics.like_count)
        dynamicsEntity.setUnlikeCount(dynamics.unlike_count)
        dynamicsEntity.setCommentCount(dynamics.comment_count)
        return dynamicsEntity
}
dynamics.insertDynamics = async (ctx) => {
    if (!ctx.session.user_id) {
        const result = new Result(0, {}, '请先登录!')
        ctx.body = result
    } else {
        // 拿到session 的user_id 查询用户信息
        // let user = await userService.findUserByUserId(ctx.session.user_id);
        let dynamics = new Dynamics();
        dynamics.setUserId(ctx.session.user_id);
        dynamics.setContent(ctx.request.body.content);
        let queryResult = await dynamicsService.insertDynamics(dynamics)
        const result = new Result(queryResult.insertId?1:0, {}, queryResult.insertId?'发布成功!':'发布失败!请重试!')
        ctx.body = result
    }
}
module.exports = dynamics