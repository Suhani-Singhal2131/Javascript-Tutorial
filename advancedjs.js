// let [x,y,...rest]=[1,2,3,4,5,6]
// console.log(x,y,rest)  //x=1,y=2,rest={3,4,5,6}

// const obj={
//     "a":1,
//     "b":2,
//     "c":3
// }
// let {a,b,c}=obj  //a,b,c ko obj se bahr nikalo
// console.log(a,b,c)

// function sum(a,b,c){
//     return a+b+c
// }

// let arr=[1,2,3]
// console.log(sum(...arr))//sum of whole array

// //hoisting
// console.log(a1)
// var a1=9;


//The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.//

let names=["Suhani","Kartik","Rishabh","Palak","Shaurya","Daksh","Riddhi","Narendra","Divyanshu","Dev","Ram","Rabindranathan","Mohammedakbar"]

let houses=[]
for(const stud of names){
    if(stud.length<6){
        houses.push("Gryffindor")
    }
    else if(stud.length<8){
        houses.push("Hufflepuff")
    }
    else if(stud.length<12){
        houses.push("Ravenclaw")
    }
    else{
        houses.push("Slytherin")
    }
}
console.log(houses)

//The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr =[1,2,2,6,7,8,9,34,34,78,90]
for (let index = 0; index< arr.length; index++) {
    if(arr[index]==arr[index+1]){
        arr[index]=arr[index]**2
        index = index + 1
    }
    else{
        arr[index]= arr[index]**2
    }
}
console.log(arr)

//The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
str="SUHANI";
const ans = str.split('').reverse().join('');
console.log(ans);
let result=str.concat(ans)
console.log(result)

//The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

let password="123456Ab"
function if_valid_password(password){
    const hasUppercase = [...password].some(char => /[A-Z]/.test(char));
    const hasLowercase = [...password].some(char => /[a-z]/.test(char));
    const hasNumeric = [...password].some(char => /\d/.test(char));
    if(password.length>=8 && hasUppercase && hasLowercase && hasNumeric){
        return true;
    }
    return false;
}
console.log(if_valid_password(password))

//The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let arr1=[1,3,5,2,-1,5,6,7]
let sum=0;
for(let val of arr1){
    sum+=val;
    if(val<0)break;
}
console.log(sum)

//The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


const count_vowels=(str)=>{
    const vowels="aeiouAEIOU"
    let count=0;
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
string="suhanI"
console.log(count_vowels(string));

//The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

//answer in html file
function setiteminlocalstorage(note){
    localStorage.setItem("note",note)
}

let note = localStorage.getItem("note")
if(note){
    document.querySelector(".note").innerHTML = note
}

document.querySelector("button").addEventListener("click",()=>{
    let note=prompt("Enter your note")
    setiteminlocalstorage(note)
    document.querySelector(".note").innerHTML=note
})

// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

const getarray=(arr)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            for(let val of arr){
               console.log(val*2);
            }
            resolve("success")
        }, 500);
    })
}

arr=[1,2,3,4,5]
getarray(arr)











