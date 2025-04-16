//ARRAYS IN JAVASCRIPT
// let marks=[1,2,3,"suhani",false,null]
// console.log(marks)
// console.log(marks[0]) //accessing values in arrays
// console.log(marks.length)
// marks[6]=89    //adding values
// marks[6]=90    //changing values
// console.log(marks)
// console.log(typeof marks)
// let str=marks.toString();//array to string
// console.log(str)
// console.log(typeof str)
// let marks2=marks.join("-")//put - after each element in array
// console.log(marks2)
// marks.pop(); //remove the last element and return the original array
// console.log(marks)
// let r=marks.push(56)//add elemnt to the last of array and return the length of new array
// console.log(marks,r)
// let r1=marks.shift()//removes an element from the start of the array and return that  element
// console.log(marks,r1)
// let r2=marks.unshift(34)//add element in the start
// console.log(marks,r2)
// console.log(marks)
// console.log(marks.length)
// let r4=delete marks[10]  //delete  the element and return true but length remains same
// console.log(marks.length,r4,marks)
 
// let marks3=[11,12,33,54,25,113]
// let newarr=marks.concat(marks3)
// console.log(newarr)//make new array by cancat elements but original arrays remains same
// let newarr2=marks.concat(marks3,newarr)
// console.log(newarr2)
// let compare=(a,b)=>{
//     return a-b
// }
// marks3.sort(compare)  //sort lexicographically
// console.log(marks3)
// console.log(marks3.reverse())

// //splice method
// //1st arg-start index
// //2nd arg-no of elements to be deleted
// //3rd arg-element to be added
// nums=[1,3,45,5,65,54]
// let del=nums.splice(2,3,1001,1002)//return deleted values
// console.log(nums,del)
// console.log(nums.slice(1,4))//return the section of the array,3 is exclusive

// //looping through the elemts of array
// for(let  i=0;i<nums.length;i++){
//     console.log(nums[i])
// }
// //for each
// nums.forEach((element)=> {
//     console.log(element+2)
// });


// //from method
// let namee="suhani"
// let arr=Array.from(namee)//convert any other object to array
// console.log(arr)


// //for of
// for(let i of arr){
//     console.log(i)
// }
// //for in
// for(let i in arr){
//     console.log(i)
// }

// //map method,return a new array
// let arr1=[12,43,17,90]
// let a=arr1.map((value,index)=>{
//      console.log(value,index)
//      return value+1
// })
// console.log(a)

// //filter method
// let arr2=[1,3,4,5,7,8,9]
// let a2=arr2.filter((value)=>{
//     return value<10
// })
// console.log(a2)

// //reduce method
// console.log(arr2)
// let newarr3=arr2.reduce((v1,v2)=>{
//     return v1+v2
// })
// console.log(newarr3)
// //1+3=4+4=8+5=13+7=20+8=28+9=37

//array prectice set
const prompt=require("prompt-sync")();
let arr=[1,2,3,4]
do{
   var value=prompt("enter value")
   arr.push(value)
}while(value!=0)
console.log(arr)
