const commentService = require('../services/comment')
const Comment = require('../models/Comment')
const Result = require('../common/_result')

const comment = {};
comment.insertComment = async (ctx) => {
  let res = await commentService.insertComment(ctx.request.body)
  const result = new Result(res.affectedRows?1:0, {}, res.affectedRows?'发表成功!':'发表失败，请重试!')
  ctx.body = result
}

module.exports = comment