//faulty calculator
/*
function sum(a,b){
    result=a+b;
    console.log("result of addition is"+result);
}
function subtract(a,b){
    result=a-b;
    console.log("result of subtraction is"+result);
}
function multiply(a,b){
    result=a*b;
    console.log("result of multiplication is"+result);
}
function divide(a,b){
    result=a/b;
    console.log("result of division is"+result);
}
function exponentiation(a,b){
    result=a**b;
    console.log("result of exponentiation is"+result);
}
const prompt=require("prompt-sync")();
let a=prompt("enter number 1: ")
a=Number.parseInt(a);

let b=prompt("enter number 2: ");
b=Number.parseInt(b);
if(Math.random()<0.1){
    console.log("Addition is two number is")
    subtract(a,b);
    console.log("Multiplication is two number is")
    sum(a,b);
    console.log("Subration is two number is")
    divide(a,b);
    console.log("division is two number is")
    exponentiation(a,b);
}
else{
    console.log("Addition is two number is")
    sum(a,b);
    console.log("Multiplication is two number is")
    multiply(a,b);
    console.log("Subraction is two number is")
    subtract(a,b);
    console.log("division is two number is")
    divide(a,b)
}
    */

//genertes business name
let obj1={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
let obj2={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}
let obj3={
    1:"Bros",
    2:"Limited",
    3:"Hub"
}
let ran1=Math.floor(Math.random()*3)+1;
let ran2=Math.floor(Math.random()*3)+1;
let ran3=Math.floor(Math.random()*3)+1;
console.log(obj1[ran1]+" "+obj2[ran2]+" "+obj3[ran3]);
