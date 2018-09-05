const dynamicsService = require('../services/dynamics/index')
const userService = require('../services/user/index')
const likeService = require('../services/like/index')
const commentService = require('../services/comment/index')
const Dynamics = require('../models/Dynamics')
const DynamicsEntity = require('../entities/Dynamics')
const Result = require('../common/_result')
const dynamics = {};
dynamics.findDynamics = async (ctx) => {
    let findDynamicsResult = await dynamicsService.findDynamics(ctx.query)
    let dynamicsList = []
    for (let dynamics of findDynamicsResult) {
        await userService.findUserByUserId(dynamics.user_id).then(async (res) => {
            // 判断当前用户是否点赞了该动态
            var is_current_user_like = 0;
            if (ctx.session.user_id) {
                is_current_user_like = await likeService.findLikeByDynamicsIdAndUserId(dynamics.dynamics_id, ctx.session.user_id)
            }
            const comments = await commentService.findCommentByDynamicsId(dynamics.dynamics_id,JSON.stringify(ctx.query) === '{}')
            let dynamicsEntity = new DynamicsEntity(dynamics.dynamics_id,res[0].user_id,res[0].user_name,res[0].motto,res[0].avatar_url,res[0].gender,dynamics.content,dynamics.like_count,dynamics.unlike_count,dynamics.comment_count,dynamics.location,new Date(dynamics.create_time).toLocaleString(),is_current_user_like,comments);
            dynamicsList.push(dynamicsEntity)
        })
    }
    const result = new Result(1, dynamicsList, '')
    ctx.body = result
}


dynamics.findHotDynamics = async (ctx) => {
    let findDynamicsResult = await dynamicsService.findHotDynamics()
    let dynamicsList = []
    for (let dynamics of findDynamicsResult) {
        await userService.findUserByUserId(dynamics.user_id).then(async (res) => {
            let dynamicsEntity = new DynamicsEntity(dynamics.dynamics_id,res[0].user_id,res[0].user_name,res[0].motto,res[0].avatar_url,res[0].gender,dynamics.content,dynamics.like_count,dynamics.unlike_count,dynamics.comment_count,dynamics.location,new Date(dynamics.create_time).toLocaleString(),null,null);
            dynamicsList.push(dynamicsEntity)
        })
    }
    const result = new Result(1, dynamicsList, '')
    ctx.body = result
}
dynamics.insertDynamics = async (ctx) => {
    if (!ctx.session.user_id) {
        const result = new Result(0, {}, '请先登录!')
        ctx.body = result
    } else {
        let dynamics = new Dynamics();
        dynamics.setUserId(ctx.session.user_id);
        dynamics.setContent(ctx.request.body.content);
        let queryResult = await dynamicsService.insertDynamics(dynamics)
        const result = new Result(queryResult.insertId ? 1 : 0, {}, queryResult.insertId ? '发布成功!' : '发布失败!请重试!')
        ctx.body = result
    }
}

module.exports = dynamics