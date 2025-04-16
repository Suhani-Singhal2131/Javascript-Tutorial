function create_card(title,cName,views,monthsold,duration,thumbnail){
    let viewstr
    if(views<1000000){
        viewstr=views/1000 + "K"
    }
    else{
        viewstr=views/1000000 + "M"
    }
    let html=`<div class="card">
            <div class="image">
                <img src="${thumbnail}"alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class"text>
                <h1>${title}</h1>
                <p>${cName} . ${viewstr} views . ${monthsold} months ago</p>
            </div>
        </div>`
    document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML+html

}
