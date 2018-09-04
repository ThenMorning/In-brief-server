class Dynamics{
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
    setContent(content){
        this.content = content;
    }
    getContent(){
        return this.content;
    }
    setLikeCount(like_count){
        this.like_count = like_count;
    }
    getLikeCount(){
        return this.like_count;
    }
    setUnlikeCount(unlike_count){
        this.unlike_count = unlike_count;
    }
    getUnlikeCount(){
        return this.unlike_count;
    }
    setCommentCount(comment_count){
        this.comment_count = comment_count;
    }
    getCommentCount(){
        return this.comment_count;
    }
    
}

module.exports = Dynamics