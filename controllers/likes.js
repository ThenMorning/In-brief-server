const likeService = require('../services/like')
const Result = require('../common/_result')
const likes = {};
likes.insertOrDeleteLikes = async (ctx) => {
    console.log(ctx.request.body)
    const isExist = await likeService.findLikeByDynamicsIdAndUserId(ctx.request.body.dynamics_id,ctx.request.body.user_id)
    // 如果存在就取消点赞，也就是删除这条记录
    if(isExist){

    }
    // 如果不存在就点赞，插入一条新纪录
    else{}
}
module.exports = likes