class User{
    constructor(user_name,open_id,motto,avatar_url,city,province,country,gender){
        this.user_name = user_name;
        this.open_id = open_id;
        this.motto = motto || '';
        this.avatar_url = avatar_url || '';
        this.city = city || '';
        this.province = province || '';
        this.country = country || '';
        this.gender = gender || '';
    }
    setUserName(user_name){
        this.user_name = user_name;
    }
    getUserName(){
        return this.user_name;
    }
    setOpenId(open_id){
        this.open_id = open_id;
    }
    getOpenId(){
        return this.open_id;
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
    setCity(city){
        this.city = city;
    }
    getCity(){
        return this.city;
    }
    setProvince(province){
        this.province = province;
    }
    getProvince(){
        return this.province;
    }
    setCountry(country){
        this.country = country;
    }
    getCountry(){
        return this.country;
    }
    setGender(gender){
        this.gender = gender;
    }
    getGender(){
        return this.gender;
    }
}

module.exports = User