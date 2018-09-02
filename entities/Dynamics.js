class DynamicsEntity{
    constructor(user_id,user_name,motto,avatar_url,gender,content,like_count,unlike_count,comment_count,location){
        this.user_id = user_id;
        this.user_name = user_name;
        this.motto = motto;
        this.avatar_url = avatar_url;
        this.location = location || '';
        this.gender = gender;
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
    setUserName(user_name){
        this.user_name = user_name;
    }
    getUserName(){
        return this.user_name;
    }
    setMotto(motto){
        this.motto = motto;
    }
    getMotto(){
        return this.motto;
    }
    setAvatarUrl(avatar_url){
        this.avatar_url = avatar_url;
    }
    getAvatarUrl(){
        return this.avatar_url;
    }
    setLocation(location){
        this.location = location;
    }
    getLocation(){
        return this.location;
    }
    setGender(gender){
        this.gender = gender;
    }
    getGender(){
        return this.gender;
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

module.exports = DynamicsEntity