// const sym=Symbol("key1")
// const User={
//     name:"suhani",
//     age: 21,
//     location:"dadri",
//     lastlogin: ["monday","tuesday"],
//     "full name": "suhani singhal ",
//     [sym]:"hhjhwgfw" //to use it as symbol,[Symbol(key1)]: 'hhjhwgfw'

// }

// console.log(User["full name"])
// console.log(User.age)
// console.log(User["age"])
// console.log(User.sym)

// User.age= 22 //to change the value
// //Object.freeze(User)// so that  no one can change the value
// console.log(User)

// //adding function to object
// User.greeting= function(){
//     console.log(`hello ${this["full name"]}`);
// }
// console.log(User.greeting)//undefined when freezed ,[Function (anonymous)] when not freezed
// console.log(User.greeting())// error beacuse we freezed the object 
// // console.log(User)

// //const user=new Object()//singleton object
// const user={}//non singleton object

// user.id="1234"
// user.name="suhani"
// user.islogged=false
// console.log(user)

// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}

// //const obj3={obj1,obj2};
// //console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj4={...obj1,...obj2};  //spread operator
// console.log(obj4)

// const user1=[
//     {
//         name:"suhani",
//         email:"ccd@gmail.com"
//     },
//     {
//         name:"suhani1",
//         email:"ccd@gmail.com"
//     },
//     {
//         name:"suhani2",
//         email:"ccd@gmail.com"
//     }
// ] 
// console.log(user1[1].email)
// console.log(user1[2].name)

//iterating over objects
// console.log(User)
// console.log(Object.keys(User));
// console.log(Object.values(User))
// console.log(Object.entries(User))

// console.log(User.hasOwnProperty('name1'))//return boolean if exists

// const course={
//     coursename:"chai or code",
//     fee:400,
//     courseteacher:"Hitesh sir"
// }
// const {courseteacher:teacher}=course; //name courseteacher as taecher
// console.log(teacher)

//..............FUNCTIONS...................

//  function add(num1,num2){
//     console.log(num1+num2)
//  }

//  const result=add(1,2)
//  console.log(result)//undefined

 function add(num1,num2){
    return num1+num2
 }

 const result=add(1,2)
 console.log(result)//3

 function isloggedin(username="hitesh"){
    if(!username){
        console.log("enter valid username")
        return
    }
    return`${username} just logged in`
 }

 console.log(isloggedin())
 //rest operator
 function calculateprice(...num1){
    return num1
 }
 console.log(calculateprice(2,3,4,5,6)) //[ 2, 3, 4, 5, 6 ]

 const user={
    username:"suhani",
    price:7898
 }

 function handleobject(anyobject){
    console.log(`username is: ${anyobject.username} and price is: ${anyobject.price}`)
 }

 //handleobject(user)

 //can directly pass object
 handleobject({
    username:"suhani",
    price:7898
 })

 //.................SCOPE.....................
 function one(){
    const username="suhani"

    function two(){
        const website="chai aur code"
        console.log(username)
    }

    //console.log(website)

    two()
 }
 one()

 //any variable declared in outer function  is accessible inside the inner function 
 // but any variable declared in inner function  is not accessible in  the outer function 

 function add(num){
    return num+1
 }
 console.log(add(6))

 const add1=function(num){//expression
    return num+1
 }

 console.log(add1(7))

 //we can call the function before declaring but we cannot call the expression before declaring