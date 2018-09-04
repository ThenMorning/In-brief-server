const dynamicsService = require('../services/dynamics/index')
const userService = require('../services/user/index')
const likeService = require('../services/like/index')
const Dynamics = require('../models/Dynamics')
const DynamicsEntity = require('../entities/Dynamics')
const Result = require('../common/_result')
const dynamics = {};
dynamics.findAllDynamics = async (ctx) => {
    let allDynamics = await dynamicsService.findAllDynamics()
    let dynamicsList = []
    for (let dynamics of allDynamics) {
        await userService.findUserByUserId(dynamics.user_id).then(async (res) => {
            // 判断当前用户是否点赞了该动态
            var is_current_user_like = 0;
            if(ctx.session.user_id){
                is_current_user_like = await likeService.findLikeByDynamicsIdAndUserId(dynamics.dynamics_id,ctx.session.user_id)
            }
            const _dynamics = await generateDynamics(res[0], dynamics,is_current_user_like)
            dynamicsList.push(_dynamics)
        })
    }
    const result = new Result(1, dynamicsList, '')
    ctx.body = result
}


const generateDynamics = async (user, dynamics,is_current_user_like) => {
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
    dynamicsEntity.setCreateTime(dynamics.create_time)
    dynamicsEntity.setIsCurrentUserLike(is_current_user_like)
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
        const result = new Result(queryResult.insertId ? 1 : 0, {}, queryResult.insertId ? '发布成功!' : '发布失败!请重试!')
        ctx.body = result
    }
}
module.exports = dynamics