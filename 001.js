//video 1
a=67;
console.log(a);
a="suhani"  //the type of a can be chenged at runtime 
            //jo pehle integer hold kar rhaa tha vo ab string hold kar rha hai
console.log(a)

//variables declaring rule are same as other language,cannot start with number
//it is case sensitive capital and small are different

//video2
//difference betweern var,const,let
//var is global while const and let are block level
var a=45
var b="suhani"
console.log(a)
console.log(b)
{
   var b=67;  
   console.log(b)  //print 67
}
console.log(b)  //also print 67 because now b=67
let c="suhani" 
console.log(c)
{
   let c="kartik";  
   console.log(c)  //print kartik 
}
console.log(c)  //print suhani beacause c= kartik is only block level
//var can be redeclared and let cannot
//const can not be updated or redeclared
const author="suhani"//value is fixed

//video3
//primitive data type
//N-null,N-number,S-symbol,S-string,B-boolean,B-bigint,U-undefined
let a1=null
let b1=45
let c1=Symbol("I am a symbol")
let d="hello"
let e=BigInt("567")
let f=true;
let g=undefined  //we can simply write let g
console.log(a1,b1,c1,d,e,f,g)
console.log(typeof e)

//objects in js,non primitive datatype
const item={
    "suhani":true,
    "kartik":"singhal",
    palak:67,
    daksh:undefined
}
item["suhani"]=45//changing the value of a key
item["rishabh"]=true//adding a key to object
console.log(item)
console.log(item["suhani"])
console.log(item.suhani)
let str="suhani"+"23"
console.log(str)