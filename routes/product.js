const express = require('express');
const router = express.Router();


router.get('/products', (req, res)=>{
    res.send([{}])
});


router.get('/products/sku', (req, res)=>{
    res.send({})
});

router.post('/products', (req, res)=>{
    res.send({})
});

module.exports = router;
