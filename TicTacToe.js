let btn=document.querySelectorAll(".box")
let resetbtn=document.querySelector(".reset-btn")
let newbtn=document.querySelector(".new-btn")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let player1=true;

const arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,4],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

btn.forEach((box)=>{
box.addEventListener("click",()=>{
    if(player1)
    {
        box.innerText="x";
        player1=false;
    }
    else{
        box.innerText="0";
        player1=true;
    }
    box.disabled=true

    checkWinner()
})
})

const checkWinner=()=>{
for(let p of arr)
{
   
 let pos1=  btn[p[0]].innerText;
 let pos2=  btn[p[1]].innerText;
 let pos3=  btn[p[2]].innerText;
if(pos1!=''&&pos2!='' &&pos3!='')
{
    if(pos1===pos2&&pos2===pos3)
    {
        console.log("Winner")
        disableBtn()
        showWinner(pos1)
    }
}
}
}
const showWinner=(winner)=>{
  msg.innerText=`Congratulations!! Winner is ${winner}`;
  msgcontainer.classList.remove("hide")
  disableBtn()
 

}
const disableBtn=()=>{
    for(let box of btn )
    {
        box.disabled=true;
    }
}
const enableBtn=()=>{
    for(let box of btn )
    {
        box.disabled=false;
        box.innerText=""
    }
}
const resetGame=()=>{
    player1=true
    enableBtn()
    msgcontainer.classList.add("hide")

}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame)