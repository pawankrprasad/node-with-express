const jwt = require('jsonwebtoken');
const { SIGNATURE_KEY } = require('../constant/constant');

module.exports = (req, resp, next)=>{
    
    const { authorization } = req.headers;
    if(authorization){
        try{
            const decoced =  jwt.verify(authorization, SIGNATURE_KEY);
            req.userContext = { ...decoced }
            next();
        }catch(error){
            resp.status(401).send({error: "Invalide authentication token"});
        }
    }else{
        resp.status(401).send({error: "Token is missing in request header"})
    }  

}