const accountid=12345
let accountemail="suhani@123"
var accountpassword=123
accountcity="jaipur"
let acc;

//accountid=678 //as it is const
console.log(accountemail)

//returns in tabular format
//acc will be undefined
console.table([accountid,accountemail,accountpassword,accountcity,acc])

"use strict";//treat all code as newer version

//datatypes-number,bigint,string,boolean,null(standalone value),undefined,symbol
console.log(typeof("suhani")) //string
console.log(typeof null)//Object
console.log(typeof undefined)//undefined

//type conversion in js
let score=true;
console.log(typeof score);
let modified=Number(score);
//to convert to boolean-Boolean
//to convert to string-String
console.log(typeof modified);
console.log(modified)  //if we have something as 33abc it will be converted as number type but give us NaN value
//if anything cannot be converted to number returns NaN

console.log("1"+2+2)//print 122
console.log(1+2+"2")//print 32
console.log(1+2+"3"+4+5)//print 3345

//Strings 
const name="suhani";
const roll="214"
console.log(`my name is ${name} and my roll no is ${roll}`);

const balance=new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const othernumber=123.8966;
console.log(othernumber.toPrecision(4));