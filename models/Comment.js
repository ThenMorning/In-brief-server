class Comment{
    constructor(user_id,content,like_count,unlike_count,comment_count){
        this.user_id = user_id;
        this.content = content;
        this.like_count = like_count;
        this.unlike_count = unlike_count;
        this.comment_count = comment_count;
    }

    setUserId(user_id){
        this.user_id = user_id;
    }
    getUserId(){
        return this.user_id;
    }
}

module.exports = Comment