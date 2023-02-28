class unauthorize extends Error{
    constructor(message){
        super(message);
        this.message=message;
        this.statuscode=401;
    }

}

module.exports=unauthorize;