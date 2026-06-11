let boxes=document.querySelectorAll(".container");
let rese=document.querySelector(".rese");
let newgame=document.querySelector("#btn");
let msg=document.querySelector(".msg");
let wi=document.querySelector(".wi");


let turnO=true;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

 for(let containe of boxes){
    containe.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            containe.innerText="O";
            turnO=false;
        }else{
            containe.innerText="X";
            turnO=true;
        }
         containe.style.backgroundColor = "gray";
         containe.style.fontSize="40px";
         containe.style.color="white";
        containe.disabled=true;
        checkwin();
    })
 };

 const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
           
    }
 };
 
const checkwin = () => {
    for(let pattern of win){
         
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;


        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                disableBoxes();
                showWinner(pos1);   
            } 
        }
    }
};
const showWinner=(winner)=>{
    wi.innerText=`Congragulations winner is ${winner}`;
    msg.classList.remove("msg");
}

const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="pink";
    }
}

const reset=()=>{
    turnO=true;
    enable();
    msg.classList.add("msg");
    

}
rese.addEventListener("click", reset);
newgame.addEventListener("click", reset);
