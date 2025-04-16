let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let msgcontainer=document.querySelector(".message");
let msg=document.querySelector("#msg");

let turnO=true;//player X,player O
let count=0;
const winning_patterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const showDraw = (count) => {
    if (count === 9) {
        msg.innerText = "The Game is Draw";
        msgcontainer.classList.remove("hide");
        disabledboxes();
    }
};


const resetgame=()=>{
    turnO=true;
    enabledboxes();
    msgcontainer.classList.add("hide")
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO==true){
            box.innerText="O";
            turnO=false;
        }
        else{
          box.innerText="X";
          turnO=true;
        }
        count++;
        box.disabled=true;
        checkWinner();
    });
});
 

const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner=(winner)=>{
   msg.innerText=`Congratulation!!! Our winner is ${winner}`;
   msgcontainer.classList.remove("hide");
   disabledboxes();
}


const checkWinner=()=>{
   for( let pattern of winning_patterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
        showDraw(count);
   }
}

resetbtn.addEventListener("click",resetgame);