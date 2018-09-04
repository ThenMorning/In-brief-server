const user = {};
user.findUserByOpenId = require('./findUserByOpenId')
user.findUserByUserId = require('./findUserByUserId')
user.insertUser = require('./insertUser')
module.exports = user