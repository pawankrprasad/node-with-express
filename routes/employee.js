const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/autherization');


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
router.get('/:id',authMiddleware('employee.view'), (req, res)=>{

    const { id } = req.params;
    const employee = employees.find(e => e.id==id)
    console.log(employee);
    res.send(employee)
});

router.post('/', authMiddleware('employee.edit'), (req, res)=>{

const{id,name,email,phone}=req.body;

try{
    if(!id){
      throw new Error("id must be require")
    }
    if(!name){
        throw new Error("name must be require")
      }
      if(!phone){
        throw new Error("phone must be require")
      }
      if(!email){
        throw new Error("email must be require")
      }
      if(id && name && phone && email  ){
           employees.push({ id:id,name:name,phone:phone,email:email});
            res.send({Message:"new data added.."})
        }

}catch(error){
 res.status(404).send({error: error.message});

}

   
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