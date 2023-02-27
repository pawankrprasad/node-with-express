const express = require('express');
const app = express();
const middleWareWrapper = require('./middleware/logger-middleware');
const myLogger = require('./middleware/myLogger');
const authMiddleware = require('./middleware/authMiddleware');


const employeeRoutes = require('./routes/employee')
const productRoutes = require('./routes/product');
const authRouters = require('./routes/auth');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//git from terminal
//try git
//abcd
//github example
//localhost:3000/employees/employees
app.use('/auth', authRouters)
app.use('/employees', authMiddleware, employeeRoutes)
app.use('/products', authMiddleware, productRoutes)

const errorHandler = (error, req, resp, next)=> {
    console.log("Error occured ", error.message);
    resp.status(error.statuCode).send({statusCode: error.statuCode,  error: error.message});
}

app.use(errorHandler)


module.exports = app;
