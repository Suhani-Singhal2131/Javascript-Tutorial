//fetch API provides amn interface for fetching(sending/receiving)resources
//It uses Request and Response objects
//The fetch() method is used to fetch a resource
//API-Application Programming Interface
//let promise=fetch(url,[options])

const URL="https://cat-fact.herokuapp.com/facts"
const factdata=document.querySelector(".facts");
const button=document.querySelector(".btn");


// const getFacts=async()=>{
//     console.log("getting data......")
//     let response=await fetch(URL);
//     console.log(response)//return response in JSON Format
//      let data=await response.json();
//      factdata.innerText=data[0].text+"\n"+data[1].text+"\n"+data[2].text+"\n"+data[3].text+"\n"+data[4].text;
// }

function getFacts(){
    fetch(URL)
    .then((response)=>{
        console.log(response)
        return response.json();
    })
    .then((data)=>{
        factdata.innerText=data[0].text;
    })
}
button.addEventListener("click",getFacts)
//JSON-Javascript Object Notation
//we can call it AJAJ- Aynchronous Javascript and JSON
//we have to convert the JSON format response to JS object type

//json()-returns a second promise that resolves with the result of parsing
//  the response body text as JSON.(input is JSON,output is JS Object)