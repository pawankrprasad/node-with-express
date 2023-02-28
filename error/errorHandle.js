class validateError extends Error{
    constructor(message){
        super(message);
        this.message=message;
        this.statuscode=400;

    }
    
}
module.exports=validateError