//synchronous programming- when the exexution happens in the order in which statement are written
//console.log("one");
//console.log("two")
//first print one and the  two this is synchronous

//Asynchronous- due to the above ,sometimes imp instruction get blocked due to some prev instruction which cause a delay in UI.Asynchronous code execution allows to execute next instructions  immediately and does not block the flow

// function  hello(){
//     console.log("hello")
// }
//setTimeout(hello,4000)//we can use in this way as well
//or we can create function inside as well

// console.log("one")
// console.log("two")
// setTimeout(()=>{
//     console.log("hello")
// },4000)
// console.log("three")
// console.log("four")

//callback funtions => function that passed as argument to another function

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumcallback){
//     sumcallback(a,b)
// }
//calculator(5,6,sum)//here sum is call back function because it is passed as an argument in calculator function

//another method
// calculator(10,10,(a,b)=>{
//     console.log(a+b)
// })


//callback hell
// function getData(dataId,getNextData){
//     setTimeout(() => {
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
       
//     },2000);
// }

//callback hell
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4)
//         });
//     });
// });


//promises are used to solve the problem of callback hell
//promises is for eventual completion of task .It is an object in JS
//Sysntax- let promise=new Promise((resolve,reject)=>{.......})
//here resolve and reject are two callbacks provided by JS
//it has three state -pending,fulfilled(resolved),rejected
// let promise=new Promise((resolve,reject)=>{
//      console.log("I am a promise")
//      reject("error");
// });

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             // console.log("data",dataId);
//             // resolve("success");
//             reject("error")
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     })
// }

//ye rolve reject hume nhi karna hota ye system humare liye karta hai 
//agar promise resolve hone ke baad kuch work karana hai to hum .then()ka use karte hai
//agar promise reject hone ke baad kuch work karana hai to hum .catch()ka use karte hai
//promise.then((res)=>{....})
//promise.catch((err)=>{....})

// const getPromise=()=>{
//    return new Promise((resolve,reject)=>{
//       console.log("I am a promise")
//       resolve("success")
//       //reject("error")
//    });
// };

// let promise=getPromise();//it return that promise is resolved
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// });
//to detect error
//we use catch instead of then

//promise chain concept
// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Some data 1 is fetched")
//             resolve("success")
//         },4000);
//     });
// };
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Some data 2 is fetched")
//             resolve("success")
//         },4000);
//     });
// };

// console.log("data 1 is fetching");
// let promise1=asyncFunc1();
// promise1.then((res)=>{
//    console.log(res)
//    console.log("data 2 is fetching");
//    let promise2=asyncFunc2();
//    promise2.then((res)=>{
//        console.log(res)
//     });
// });


//other way to do the same thing
// console.log("data 1 is fetching");
// asyncFunc1().then((res)=>{
//    console.log(res)
//    console.log("data 2 is fetching");
//    asyncFunc2().then((res)=>{
//        console.log(res)
//     });
// });


//we have to write other then inside  then 
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("success");
//         },4000)
//     });
// }

// let p1=getData(1);
// p1.then((res)=>{
//     console.log("data 1 is fetched")
//     console.log(res);
//     let p2=getData(2);
//     p2.then((res)=>{
//        console.log("data 2 is fetched");
//        console.log(res)
//         let p3=getData(3);
//         p3.then((res)=>{
//             console.log("data 3 is fetched");
//             console.log(res)
//         });
       
//     });
// });

//other way to do the same thing
// getData(1).then((res)=>{
//     console.log("data 1 is fetched")
//     console.log(res);
//     getData(2).then((res)=>{
//        console.log("data 2 is fetched");
//        console.log(res)
//         getData(3).then((res)=>{
//             console.log("data 3 is fetched");
//             console.log(res)
//         });
//     });
// });

//one method also for promise chain
// getData(1)
//     .then((res)=>{
//         console.log("data 1 is fetched")
//         console.log(res)
//         return getData(2);
//     })
//     .then((res)=>{
//         console.log("data 2 is fetched")
//         console.log(res)
//         return getData(3);
//     })
//     .then((res)=>{
//         console.log("data 3 is fetched")
//         console.log(res)
//     })


//till now we see about callbacks and call-back hell 
//callback hell is improved by promises and promise chains
//now this promise chains are improved by async await

//async await always returns a promise 
//suntax- async function myFunc(){.....}
//await pauses the execution of its surrounding async function until the promise is settled
// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("weather data");
//         resolve(200);
//         },4000)
//     });
// }
// async function getWeatherData() {
//     await api(); //pehle first call complete hogi
//     await api(); //phir second call complete hogi
// }

function getData(dataId){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            },4000)
        });
    }
    // async function getdata() {
    //     await getData(1); //pehle first call complete hogi
    //     console.log("data 1 is fetched")
    //     await getData(2); //phir second call complete hogi
    //     console.log("data 2 is fetched")
    //     await getData(3);
    //     console.log("data 3 is fetched")
    // }

// In async await function we have to amke an extra function and then we have to call this function
//to stop from calling
//we use the concept of IIFE-Immediately Invoked Function Expression
//It is a function that is called immediately as soon as it is defined
/*
   (function() {
      //statement....
   })();

   (()=>{
      //statement.....
    }) ();

    (async()=>{
        //statemrnt
    })();


*/
(async function () {
    await getData(1); //pehle first call complete hogi
    console.log("data 1 is fetched")
    await getData(2); //phir second call complete hogi
    console.log("data 2 is fetched")
    await getData(3);
    console.log("data 3 is fetched")
})();

