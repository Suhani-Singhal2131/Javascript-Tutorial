//for loop
let sum=0;
for(let i=0;i<12;i++){
   sum+=i
}
console.log("sum is :"+ sum)

//for-in loop
let obj={
    a:1,
    b:2,
    c:3,
    d:4
}
//i is iterating for keys obj[key]=value
for(let i in obj){
    console .log("alphabet is "+ i +" and "+ obj[i])
}
//for-of loop is used to iterate over string or array or any other iterable
for(let i of "suhani"){
    console.log(i)
}

//while loop
const prompt=require("prompt-sync")();
let n=prompt("enter num")
n=Number.parseInt(n);
//let i=0
while(i<n){
    console.log(i)
    i++
}
//do while loop
//const prompt=require("prompt-sync")();
let n1=prompt("enter num")
n=Number.parseInt(n);
let i=0
do{
    console.log(i)
    i++
}while(i<n)

//function in java
let a=1;
let b=2
let c=3
function sum(x,y){
    return x+y
}
console.log(sum(a,b))
console.log(sum(b,c))
console.log(sum(c,a))

const sum1=(p,q)=>{
    return p+q
}
console.log(sum1(7,8))
const hello=()=>{
    console.log("hey how are you")
}
hello()


//STRINGS
let name1="suhani" //using double quote
let lastname='singhal'//using single quote
console.log(name1[0])
console.log(name1[1])
//template literal-uses back tick we can use double as well as single quote
let str=`my name is ${name1} ans it's me`

console.log(str)
console.log(str.length)

//escape sequence
let fruit='bana\'na'
console.log(fruit)

let veg='app\nle'
console.log(veg)

// STRING METHODS
let str1="suhani SINGHAL"
console.log(str1.length)
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1.replace("i","s"))//replace i with s
console.log(str1.split("n"))//split where n is encountered and returned in array form
console.log(str1.slice(2,8))
console.log(str1.trim())//remove leading nad trailing white spaces
for(let i=0;i<str1.length;i++){
    console.log(str1.charAt(i))
}