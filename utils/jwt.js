const jwt = require('jsonwebtoken');
const { SIGNATURE_KEY } = require('../constant/constant');


const generateToken = (payload) =>{
    const token = jwt.sign(payload, SIGNATURE_KEY);
    return token;
}

const verifyToken = (token) =>{
    
    const payload =  jwt.verify(token, SIGNATURE_KEY);
    return payload;
}
// module.exports
module.exports = {
    generateToken,
    verifyToken
}