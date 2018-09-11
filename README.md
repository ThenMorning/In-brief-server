# In-brief-server

* > 简说
* > 一个使用mpvue构建的小程序
* > 旨在学习全栈式开发

# Function

* 发布，点赞，评论的一整套流程
* 登录校验
* 即围绕"`动态`"这一实体的CURD

# Doc
[[实践]mpvue及koa2全栈开发小程序](https://segmentfault.com/a/1190000016354488)

# Client

To run the Client , look at it [In-brief](https://github.com/WinwardZ/In-brief)

# Build Setup

``` bash
# install dependencies
npm install

# edit config
修改根目录下的config.js包括数据信息和小程序信息

# serve with hot reload at localhost:8080
npm start
```

# design
该项目作为api服务程序，我将它设计成3层
* route 作为路由拦截请求，根据不同的请求类型，分发给不同的controller
* controller 作为控制器回应请求，调用不同的service，拼凑出view想要的数据结构
* service 作为服务，操作数据库，获得数据

< 在此之外，
* 创建model对应数据库表实体，
* 创建entities对应view展示的数据结构
* 创建result作为response规范
