const express = require('express');
const jwt = require('../utils/jwt');
const {ValidationError, UnAuthorizeError}  = require('../error')

const router = express.Router();

const _username = "waviz";
const _password = "waviz@123"

//Login api to validate user
router.post('/login', (req, resp, next)=>{

    const {username, password } = req.body;
    try{
        if(!username){
            throw new ValidationError("User name is missing");
        }
        if(!password){
            throw new ValidationError("Password is missing");
        }
    
        if(username === _username && password === _password){
           const payload = { username: 'waviz' , role:"employee", permission:['employee.view','employee.edit']}
           const token = jwt.generateToken(payload);
            resp.send({token, username: 'waviz'});
        }
        else{
            throw new UnAuthorizeError("username and password is not correct");
        }
        
    }catch(error){
        next(error)
    }
    
})

module.exports = router;