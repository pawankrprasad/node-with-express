const jwt = require('../utils/jwt');

module.exports = (req, resp, next)=>{
    
    const { authorization } = req.headers;
    if(authorization){
        try{
            const payload =  jwt.verifyToken(authorization);
            req.userContext = { ...payload }
            next();
        }catch(error){
            resp.status(401).send({error: "Invalide authentication token"});
        }
    }else{
        resp.status(401).send({error: "Token is missing in request header"})
    }  

}