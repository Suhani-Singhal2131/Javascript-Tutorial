// const score=400    // // JS auto detects it as a number
// console.log(score)  //400
// const balance=new Number(100)   // Using Number Function to explicitly define number in JS
// console.log(balance);   //[Number: 100]
// console.log(balance.toString());
// console.log(typeof(balance))
// console.log(balance.toFixed(2))  //100.00,Used to reduce or round of to specific decimal values

// const other=123.66
// console.log(other.toPrecision(1))



//  //..................MATHS..................
//  console.log(Math.abs(-4))     // Converts +ve / -ve integer values to positive
//  console.log(Math.round(4.3)) // Output - 4
//  console.log(Math.round(4.6)) // Output - 5
//  console.log(Math.ceil(4.2) ) // Output - 5 (gives top value)
//  console.log(Math.floor(4.9)) // Output - 4 (gives bottom value)
//  console.log(Math.min(4,3,6,8)) // Output - 3
//  console.log(Math.max(4,3,6,8)) // Output - 8
// console.log(Math.random() )    // Gives random value between 0 & 1 in decimals
// console.log(Math.random()*10)  //Gives random value between 0 & 10 in decimals
// console.log( (Math.random()*10) +1) //Gives random value between 1 & 11 in decimals

// ---- Trick to randomize value between range ----
// const min = 10
// const max = 20
// //includes 11,12,13..............20
// const randomValue = Math.floor((Math.random() * (max - min + 1)) + min)
// console.log(randomValue)


// //...................DATE AND TIME.......................
// let myDate=new Date();
// console.log(myDate.toDateString());//Sun Apr 27 2025
// console.log(myDate.toTimeString());//11:03:55 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString());//2025-04-27T05:33:55.598Z
// console.log(myDate.toJSON());//2025-04-27T05:33:55.598Z
// console.log(myDate.toLocaleString()); //27/4/2025, 11:03:55 am
// console.log(myDate.toString());//Sun Apr 27 2025 11:03:55 GMT+0530 (India Standard Time)

// console.log(typeof myDate)
// let mycreateddate=new Date("2023-03-23")
// console.log(mycreateddate.toDateString())


// let timestamp=Date.now();
// console.log(timestamp);//1745732556874,gives answer in millisec from the spesified date by owner

// console.log(timestamp/1000);//1745732759.701 seconds
// console.log(Math.floor(timestamp/1000)) //remove decimal places

// let today=new Date();
// console.log(today.getDay())
// console.log(today.getMonth())

//....................ARRAY.....................
const myarr=[1,2,3,4,5]
const myarr2=new Array(1,2,3,4,5)
myarr.push(6)
myarr.pop()

console.log(myarr);
console.log(myarr.includes(4));
console.log(myarr.indexOf(5))

const newarr=myarr.join();
console.log(newarr)   //1,2,3,4,5
console.log(typeof newarr) //string


//slice,splice
console.log("A",myarr) //A [ 1, 2, 3, 4, 5 ]
const myn1=myarr.slice(1,3); //gives a new arr containg values of index[1,3)

console.log(myn1) //[ 2, 3 ]
console.log("B",myarr)//B [ 1, 2, 3, 4, 5 ]

const myn2=myarr.splice(1,3) //splice includes[1 ,3] and remove them from original array
console.log(myn2) //[ 2, 3, 4 ]
console.log("C",myarr) //C [ 1, 5 ]

//push,concat

const a=[1,2,3,4]
const b=[45,56,78,90]
// a.push(b);   //push in existing arr as an new arr
// console.log(a); //[ 1, 2, 3, 4, [ 45, 56, 78, 90 ] ]
// console.log(a[4])  //[ 45, 56, 78, 90 ]
// console.log(a[4][0])  //45

let c=a.concat(b)
console.log(a)  //[ 1, 2, 3, 4 ] original remain as it is
console.log(c)  //[1,  2,  3,  4, 45, 56, 78, 90]

let d=[...a,...b]
console.log(d)  // [1,  2,  3,  4, 45, 56, 78, 90]

let a1=[1,2,3,4,[5,6,7],8,[9,10,[11,12]]]
const newa1=a1.flat(Infinity)
console.log(newa1)//[1,  2, 3, 4,  5,6,  7, 8, 9, 10,11, 12]

console.log(Array.isArray("suhani"))   //false
console.log(Array.from("suhani"))//[ 's', 'u', 'h', 'a', 'n', 'i' ]
console.log(Array.from({name:"suhani"})) //[]
console.log(Array.of(100,200,300))


