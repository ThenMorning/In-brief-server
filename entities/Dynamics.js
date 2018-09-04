class DynamicsEntity{
    constructor(dynamics_id,user_id,user_name,motto,avatar_url,gender,content,like_count,unlike_count,comment_count,location,create_time,is_current_user_like,comments){
        this.dynamics_id = dynamics_id;
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
        this.create_time = create_time;
        this.is_current_user_like = is_current_user_like;
        this.comments = comments || [];
    }

    setDynamicsId(dynamics_id){
        this.dynamics_id = dynamics_id;
    }
    getDynamicsId(){
        return this.dynamics_id;
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
    setCreateTime(create_time){
        this.create_time = create_time;
    }
    getCreateTime(){
        return this.create_time;
    }
    setIsCurrentUserLike(is_current_user_like){
        this.is_current_user_like = is_current_user_like;
    }
    getIsCurrentUserLike(){
        return this.is_current_user_like;
    }
    setComments(comments){
        this.comments = comments;
    }
    getComments(){
        return this.comments;
    }
    
}

module.exports = DynamicsEntity