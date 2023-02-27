class UnauthorizedError extends Error {
    constructor(messsage){
        super(messsage)
        this.message = messsage;
        this.statuCode = 401;
        this.name = "UnauthorizedError"
    }
}

module.exports = UnauthorizedError;