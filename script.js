// alert("Enter the value of a!")
// let a=prompt("Enter a here","578")
// a=Number.parseInt(a)
// alert("you entered a of type"+(typeof a))
// let write=confirm("do you really want to write")
// if(write){
//     document.write(a)
// }
// else{
//     document.write("please allow me to write")
// }

// console.log(document)
// document.body.style.background="red"
// alert("Enter your age")
// let a=prompt("Enter a here")
// a=Number.parseInt(a)
// if(a>=18){
//     alert("you can drive")
// }
// else{
//     alert("you cannot drive")
// }
// alert("you entered a of type"+(typeof a))
// let write=confirm("do you really want to write")
// if(write){
//     document.write(a)
// }
// else{
//     document.write("please allow me to write")
// }
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.Child)

// document.body.childNodes
// //NodeList(7) [text, div.container, text, table, text, script, text]
// document.body.childNodes[1]
// //<div class=​"container">​…​</div>​
// let cont=document.body.childNodes[1]
// //undefined
// cont.childNodes
// //NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// cont.firstChild
// //#text
// cont.lastChild
// //#text
// cont.firstElementChild
// //<div class=​"box">​Box1​</div>​
// cont.children
// //HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// cont.children[2].nextElementSibling
// //<div class=​"box">​Box4​</div>​
// cont.children[2].previousElementSibling
// cont.children[2].parentElement

// let boxes=document.getElementsByClassName("box");
// console.log(boxes);
// boxes[2].style.backgroundColor="red";
// let ch=document.getElementById("3")
// ch.style.backgroundColor="red";

//select first box that has class box
//document.querySelector(".box").style.backgroundColor="green"
// console.log(document.querySelectorAll(".box"))//return array
// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor="green"
// })

// document.querySelector(".container").innerHTML
// '\n            I am boxe\n            <div class="box">I am a Box1</div>\n            \x3C!-- <div class ="box">Box2</div>\n            <div id="3" class ="box">Box3</div>\n            <div class ="box">Box4</div>\n            <div class ="box">Box5</div> -->\n     '
// document.querySelector(".container").innerText
// 'I am boxe\nI am a Box1'
// document.querySelector(".box").innerHTML
// 'I am a Box1'
// document.querySelector(".container").innerText
// 'I am boxe\nI am a Box1'
// document.querySelector(".box").innerText
// 'I am a Box1'
// document.querySelector(".container").outerHTML
// '<div class="container">\n            I am boxe\n            <div class="box">I am a Box1</div>\n            \x3C!-- <div class ="box">Box2</div>\n            <div id="3" class ="box">Box3</div>\n            <div class ="box">Box4</div>\n            <div class ="box">Box5</div> -->\n     </div>'
// document.querySelector(".container").outerText
// 'I am boxe\nI am a Box1'
// document.querySelector(".box").outerHTML
// '<div class="box">I am a Box1</div>'
// document.querySelector(".box").outerText
// 'I am a Box1'
// document.querySelector(".box").tagName
// 'DIV'
// document.querySelector(".container").nodeName
// 'DIV'
// document.querySelector(".container").textContent
// '\n            I am boxe\n            I am a Box1\n            \n     '
// document.querySelector(".container").hidden
// false
// document.querySelector(".container").hidden=true
// true
// document.querySelector(".container").hidden=false
// false
// document.querySelector(".box").innerHTML="I am suhani"
// 'I am suhani'

//insert an Element
// let div=document.createElement("div")
// div.innerHTML="I have been inserted<b>by suhani</b>"
// div.hasAttribute("class","created")
// document.querySelector(".container").append(div)//can use append,prepend,before,after,replacewith
//let cont=document.querySelector(".container")
// cont.insertAdjacentHTML("afterend","<b>I am suhani</b>") 
// cont.insertAdjacentHTML("beforeend","<b>I am suhani</b>")
//cont.insertAdjacentHTML("afterbegin","<b>I am suhani</b>")
//cont.insertAdjacentHTML("beforebegin","<b>I am suhani</b>")
//cont.insertAdjacentText("afterend","<b>I am suhani</b>")
// cont.insertAdjacentElement("afterend","div")


// document.querySelector(".container").classList.remove("red")
// undefined
// document.querySelector(".container").classList.add("yellow")
// undefined
// document.querySelector(".container").classList.toggle("red")
// true
// document.querySelector(".container").classList.toggle("red")
// false
// document.querySelector(".container").classList.contains("yellow")
// true
// document.querySelector(".container").classList.contains("red")
// false