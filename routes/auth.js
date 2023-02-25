const express = require('express');
const jwt = require('../utils/jwt');

const router = express.Router();

const _username = "waviz";
const _password = "waviz@123"

//Login api to validate user
router.post('/login', (req, resp)=>{

    const {username, password } = req.body;
    try{
        if(!username){
            throw new Error("User name is missing");
        }
        if(!password){
            throw new Error("Password is missing");
        }
    
        if(username === _username && password === _password){
           const payload = { username: 'waviz' , role:"employee", permission:['employee.view','employee.edit']}
           const token = jwt.generateToken(payload);
            resp.send({token, username: 'waviz'});
        }
        else{
            throw new Error("username and password is not correct");
        }
        
    }catch(error){

        resp.status(401).send({error: error.message} );
    }

    
})

module.exports = router;