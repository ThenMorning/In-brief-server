class Result {
    constructor(status,data,message) {
        this.status = status || 1;
        this.data = data || {};
        this.message =message || '';
    }
    getStatus(){
        return this.status
    }
    setStatus(status){
        this.status = status
    }
    getData(){
        return this.data
    }
    setData(data){
        this.data = data
    }
    getMessage(){
        return this.message
    }
    setMessage(message){
        this.message = message
    }
}

module.exports =  Result;