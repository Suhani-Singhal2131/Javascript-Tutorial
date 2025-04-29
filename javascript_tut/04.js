const user={
    username:"suhani",
    price: 6788,
    welcomemessage:function(){
        console.log(`${this.username} welcome to the website`)
        console.log(this)//it will print the schema of object user
        // {
        //     username: 'suhani',
        //     price: 6788,
        //     welcomemessage: [Function: welcomemessage]
        //   }

        //this refer to current context
    }
}
 user.welcomemessage()//suhani welcome to the website

// user.username="hitesh"//changes the current context
// user.welcomemessage()//hitesh welcome to the website

console.log(this)//{}

//jab hum node environment ke andar hai koi global context nhi hai isliye empty print kiya
//lekin browser ke andar global context windows hota hai

//arrow function

const user1=()=>{
    let username="suhani"
    console.log(this.username)//undefined
    console.log(this)//{}
}
user1()

const add2=(num1,num2)=>{
    return  num1+num2
}
console.log(add2(1,2))

const add3=(num1,num2)=>num1+num2
console.log(add3(3,4))