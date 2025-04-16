const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

const dropdowns=document.querySelectorAll(".dropdown Select")
const button=document.querySelector("form button")
const fromcurr=document.querySelector(".from select")
const tocurr=document.querySelector(".to select")
const msg=document.querySelector(".msg");

for(let select of dropdowns){
    for(currcode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currcode;
        newOption.value=currcode;
        if(select.name==="from" && currcode==="USD"){
            newOption.selected="selected"
        }
        else if(select.name==="to" && currcode==="INR"){
            newOption.selected="selected"
        }
        select.append(newOption);
    }

    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    });
}

const updateflag=(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;

}


button.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input")
    let amountval=amount.value;
   if(amountval==="" ||amountval<1){
        amountval=1;
        amount.value="1";
   }

  //console.log(fromcurr.value,tocurr.value);
  const URL=`${BASE_URL}/${fromcurr.value.toLowerCase()}.json`;
  let response=await fetch(URL)
  let data= await response.json();
  let rate =data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()]
   let finalamount=amountval * rate;
   msg.innerText=`${amountval} ${fromcurr.value}=${finalamount} ${tocurr.value}`

})