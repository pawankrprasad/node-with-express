class ValidationError extends Error {
    constructor(messsage){
        super(messsage)
        this.message = messsage;
        this.statuCode = 400;
        this.name = "ValidationError"
    }
}

module.exports = ValidationError;