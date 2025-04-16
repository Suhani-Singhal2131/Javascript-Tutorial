//video4const prompt=require("prompt-sync")();
//operators in javascript
let a=4
let b=2
console.log("a+b:", a+b)
console.log("a-b:", a-b)
console.log("a*b:", a*b)
console.log("a/b:", a/b)
console.log("a**b:", a**b)
console.log("a%b:", a%b)
console.log("a++:", a++)//a ki value 4 hi rahegi baadme assign hogi
console.log("a:", a) //yha par a ki value 5 hogi
console.log("a--:", a--)  //a ki vavue 5 hi rahegi baad me decrement hogi
console.log("a:", a) //yha par decrement ho jayegi

console.log("++b:", ++b)//pehle increment baad me assign
console.log("b:", b)
console.log("--b:", --b)//pehle decrement baad me assign
console.log("b:", b)

// //assignment operators 
let c=3
let d=4
console.log("c=d",c=d)    //c=d
console.log("c+=d", c+=d)  //c=c+d
console.log("c-=d:", c-=d)  //c=c-d
console.log("c*=d:", c*=d)  //c=c*d
console.log("c/=d", c/=d)   //c=c/d

//comparison operators
let c1=4
let c2="4"
console.log("c1==c2", c1==c2)
console.log("c1!=c2", c1!=c2)
console.log("c1===c2", c1===c2)
console.log("c1!==c2", c1!==c2)
//rest are greater than,less than etc etc

//logical operators
let k=4
let l=5
console.log(k>l && k==l) // F && F=F
console.log(k<l ||k==l)  //  T||F=T
console.log(!true)

//conditional statements

//prompt is used to take input from user
//const prompt=require("prompt-sync")();
let name=prompt("enter your name")
console.log(`Hello ${name}`)
let age=prompt("enter your age")
console.log(`Your age is ${age}`)
console.log(typeof age)//by default it is string type
age=Number.parseInt(age)//converting string to nuumber
if(age>0){  //if true then execute otherwise not
    console.log("this is valid age")
}
else{
   console.log("this is not valid age")
}

//switch statement
let fruitType='Papayas'
switch (fruitType) {
    case "Oranges":
      console.log("Oranges are $0.59 a pound.");
      break;
    case "Apples":
      console.log("Apples are $0.32 a pound.");
      break;
    case "Bananas":
      console.log("Bananas are $0.48 a pound.");
      break;
    case "Cherries":
      console.log("Cherries are $3.00 a pound.");
      break;
    case "Mangoes":
      console.log("Mangoes are $0.56 a pound.");
      break;
    case "Papayas":
      console.log("Mangoes and papayas are $2.79 a pound.");
      break;
    default:
      console.log(`Sorry, we are out of ${fruitType}.`);
  }
  console.log("Is there anything else you'd like?");
  
//Practice set

// let num=prompt("enter number")
// num=Number.parseInt(num)
// if(num%2==0 && num%3==0){
//     console.log("divisible")
// }
// else if(num%2==0 ||num%3==0){
//     console.log("either divisible")
// }
// else{
//     console.log("not divisible")
// }

//use of ternary operator
const prompt=require("prompt-sync")();
let age1=prompt("enter age")
age1=Number.parseInt(age1)
let a1=age1>18?"you can drive":"you cannot drive"
console.log(a1)