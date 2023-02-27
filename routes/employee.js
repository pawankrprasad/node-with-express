const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/autherization');
const {AppError} = require('../error');

let employees = [
    {id:101, name:"Employee1", phone:"1234567", email:"emp1@gmail.com"},
    {id:102, name:"Employee1", phone:"1234567", email:"emp1@gmail.com"},
    {id:103, name:"Employee1", phone:"1234567", email:"emp1@gmail.com"},
    {id:104, name:"Employee1", phone:"1234567", email:"emp1@gmail.com"}
]

router.get('/', authMiddleware('employee.view'), (req, res)=>{

    console.log("req.userContext", req.userContext)
    res.send(employees)
});


// GET pathparameter
router.get('/:id',authMiddleware('employee.view'), (req, res, next)=>{
    try{
        const { id } = req.params;
        const employee = employees.find(e => e.id==id);
        if(!employee){
            throw new AppError("Employee Not Found", 404)
        }else{
            res.send(employee)
        }
    }catch(error){
        next(error)
    }
   
});

router.post('/', authMiddleware('employee.edit'), (req, res)=>{
    const data = req.body;
    employees.push(data);
    res.send(data);
});

router.delete('/:id',authMiddleware('employee.edit'), (req, res)=>{
    const {id} = req.params;
    employees = employees.filter(e => e.id!=id);
    res.send("Employee deleted");
});

router.put('/:id', authMiddleware('employee.edit'),(req, res)=>{
    const {id} = req.params;
    const data = req.body;
    employees.forEach(emp => {
        if(emp.id==id){
            Object.keys(emp).forEach(key=>{
                if(data[key]){
                    emp[key] = data[key]
                }
                
            })
        }
    })
    res.send("Employee updated");
});



module.exports = router;