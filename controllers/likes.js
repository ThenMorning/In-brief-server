const likeService = require('../services/like')
const dynamicsService = require('../services/dynamics')
const Result = require('../common/_result')
const likes = {};
likes.insertOrDeleteLikes = async (ctx) => {
    var res = 0;
    const isExist = await likeService.findLikeByDynamicsIdAndUserId(ctx.request.body.dynamics_id,ctx.request.body.user_id)
    // 如果存在就取消点赞，删除这条记录
    if(isExist){
        res = await likeService.deleteLikeByDynamicsIdAndUserId(ctx.request.body.dynamics_id,ctx.request.body.user_id)
    }
    // 如果不存在就点赞，插入一条新纪录
    else{
        res = await likeService.insertLikeByDynamicsIdAndUserId(ctx.request.body.dynamics_id,ctx.request.body.user_id,ctx.request.body.user_name)
    }
    //如果操作成功
    if(res){
        // 更新这条动态的点赞数量 +1 或 -1
        const te = await dynamicsService.updateDynamicsByDynamicsId({like_count:"like_count"+(isExist?"-'1'":"+'1'")},ctx.request.body.dynamics_id)

    }
    const result = new Result(res ? 1 : 0, {likeStatus:!isExist?1:0}, res ? '操作成功!' : '操作失败!请检查网络重试!')
    ctx.body = result
}
module.exports = likes