const config = {

    port: 3000, //本地服务端口号

    database: { //数据库信息
        DATABASE: 'inbrief',
        USERNAME: 'root',
        PASSWORD: '123456',
        PORT: '3306',
        HOST: 'localhost'
    },
    APP:{
        APPID:'wx9557005ddf373291',
        SECRET:'a2e03a26e077ab7b82f41628e694e9c9',
        authorization_code:''
    }
}

module.exports = config