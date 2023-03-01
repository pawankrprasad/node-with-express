

const add = (a,b, callback) =>{
    setTimeout(()=>{
        const result = a+b;
        callback(result)
    }, 2000)
   
}



console.log("Add start.........");

const callback = (result) =>{
    console.log("Result is ======", result);
}

add(10,20, callback);

console.log("Add end.........")






// const getEmpDetail = ()=> {

//     setTimeout(()=>{
//         return {
//             empID: 100,
//             empName:"Rajesh Kumar",
//             dep:"Engeneering",
//             salary: 30000
//         }
//     }, 1000)
// }



// const getEmpDetail = (id)=> new Promise((resolve, reject)=>{
    
//     setTimeout(()=>{
//         if(id===100){
//             resolve({
//                 empID: 100,
//                 empName:"Rajesh Kumar",
//                 dep:"Engeneering",
//                 salary: 30000
//             });
//         }else{
//             reject("No Employee found")
//         }
//     }, 2000)

// });



// const getAddressFromGoogle = (pin)=> new Promise((resolve, reject)=>{
    
    

// });


// console.log("Getting employee information");

// getEmpDetail(100).then((emp)=>{
//     console.log(emp);
//     console.log("Task Completed");
// }).catch(error=>{
//     console.log("Error ", error)
// })



























// console.log("Application started..........");



// console.log("Dinner order taken....");
// setTimeout(()=>{
//     console.log("Dinner prepared....")
//     console.log("Water Bottle order taken....");
//     setTimeout(()=>{
//         console.log("A bottle of water...")
//         console.log("Coffee order taken....");
//         setTimeout(()=>{
//             console.log("coffee prepared...")
//         }, 1000)
//     }, 500)
// }, 5000)








