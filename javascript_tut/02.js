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
const min = 10
const max = 20
//includes 11,12,13..............20
const randomValue = Math.floor((Math.random() * (max - min + 1)) + min)
console.log(randomValue)


//...................DATE AND TIME.......................
