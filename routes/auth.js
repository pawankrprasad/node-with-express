const express = require('express');
const jwt = require('jsonwebtoken');
const { SIGNATURE_KEY } = require('../constant/constant');
const router = express.Router();

const _username = "waviz";
const _password = "waviz@123"


router.post('/login', (req, resp)=>{

    const {username, password } = req.body;
    if(username === _username && password === _password){
       const payload = { username: 'waviz' , role:"employee", permission:['employee.view','employee.edit']}
        const token = jwt.sign(payload, SIGNATURE_KEY);
        const userInfo = {
            username,
            token
        }
        resp.send(userInfo);
    }
    else{
        resp.status(401).send("username and password is not correct");
    }
})

module.exports = router;