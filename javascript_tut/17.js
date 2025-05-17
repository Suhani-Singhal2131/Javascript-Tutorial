// const promise=new Promise(function(resolve,reject){
//     //Do an async task,db calls,network,crytography
//     setTimeout(function(){
//         console.log("async task is completed");
//         resolve()
//     },1000);

// })

// promise.then(function(){
//     console.log("promise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("task resolved");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("promise resolved");
// })

// const promisethree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         //console.log("something");
//         resolve({username: "suhani",email:"1234@.com"})
//     },1000)
// })

// promisethree.then(function(user){
//     console.log(user);
// })

// const promisefour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username: "suhani",email:"1234@.com"})
//         }
//         else{
//             reject("error:something went wrong")
//         }
//     },1000)
// })
// promisefour
// .then(function(user){
//     console.log(user);
//     return user.username;
// }).
// then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>{
//     console.log("promise either resolved or rejected")
// })


// const promisefive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username: "javascript",password:"1234"});
//         }
//         else{
//             reject("error:something went wrong")
//         }
//     },1000)
// })

// async function consumePromise(){
//     try {
//         const response=await promisefive;
//         console.log(response);
//     } 
//     catch (error) {
//         console.log(error);
//     }
    
// }

// consumePromise();

// async function getusers(){
//     try {
//        const response =await fetch('https://jsonplaceholder.typicode.com/users') ;
//       const data=await response.json();
//       console.log(data);
//     } 
//     catch (error) {
//         console.log('E:',error);
//     }
// }

// getusers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})