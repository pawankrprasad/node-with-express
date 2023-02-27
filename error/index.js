const ValidationError = require('./validationError');
const UnAuthorizeError = require('./unauthorize');


class AppError extends Error {
    constructor(messsage, statusCode){
        super(messsage)
        this.message = messsage;
        this.statuCode = statusCode || 400;
        this.name = "AppError"
    }
}



module.exports = {
    ValidationError,
    UnAuthorizeError,
    AppError
}