const router = require('koa-router')()

module.exports = router.get('*',  async ( ctx ) => {
   const error  = ctx.response;
  await ctx.render('error', {
    error
  })
})