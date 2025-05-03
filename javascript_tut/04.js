// const user={
//     username:"suhani",
//     price: 6788,
//     welcomemessage:function(){
//         console.log(`${this.username} welcome to the website`)
//         console.log(this)//it will print the schema of object user
//         // {
//         //     username: 'suhani',
//         //     price: 6788,
//         //     welcomemessage: [Function: welcomemessage]
//         //   }

//         //this refer to current context
//     }
// }
//  user.welcomemessage()//suhani welcome to the website

// // user.username="hitesh"//changes the current context
// // user.welcomemessage()//hitesh welcome to the website

// console.log(this)//{}

// //jab hum node environment ke andar hai koi global context nhi hai isliye empty print kiya
// //lekin browser ke andar global context windows hota hai

// //arrow function

// const user1=()=>{
//     let username="suhani"
//     console.log(this.username)//undefined
//     console.log(this)//{}
// }
// user1()

// const add2=(num1,num2)=>{
//     return  num1+num2
// }
// console.log(add2(1,2))

// const add3=(num1,num2)=>num1+num2
// console.log(add3(3,4))

//IIFE -Immediately invoked function expression
(function chai(){
    //named IIFE
    console.log("DB CONNECTED")
})();
//function that execute immediately
//global scope ke variable se jo pollution hota hai uslo remove karne ke lie IIFE ka use kiya
//to write another IIFE function we have to end the previos with semi colon
((name)=>{
    //unnamed IIFE
    console.log(`${name}`)
})("suhani")

//............
/*🔵The working of the JavaScript works on three phases:
1. Global Execution Context
2. Memory phase / Creation phase
3. Execution phase

🔵Phase 1: Global Execution Context
The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

🔵Phase 2: Memory phase
During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

🔵Phase 3: Execution phase
After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
1. Memory phase 
2. Execution phase 
📝The return value of the 'Function Execution' context is passed to the Global Execution Context*/