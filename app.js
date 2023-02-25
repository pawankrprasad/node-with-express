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
//github example
//localhost:3000/employees/employees
app.use('/auth', authRouters)
app.use('/employees', authMiddleware, employeeRoutes)
app.use('/products', authMiddleware, productRoutes)


module.exports = app;
