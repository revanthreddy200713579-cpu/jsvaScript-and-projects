let use=0;
let comp=0;
let win;
let choice=document.querySelectorAll(".v");
let count=document.querySelector(".scoreboard");
let change=document.querySelector(".msg");
let u=document.querySelector(".user");
let c=document.querySelector(".comp");

choice.forEach((container) => {
    container.addEventListener("click",()=>{
       
        const id=container.getAttribute("id");
        
        console.log("uder choice=",id);
        play(id);
       
    })
});

const game=()=>{

    let choose=["rock","paper","scissors"];
    let mat=Math.floor(Math.random()*3);
    win=choose[mat];

}

const play=(id)=>{
    game();
    console.log("comp choice=",win);

   if(id===win){
    console.log("draw");
    change.innerText="You game was Draw";
    change.style.backgroundColor="black";
   }else{
    let userwin=true;
    if(id==="rock"){
        userwin=win==="paper"?false:true;
    }else if(id==="paper"){
        userwin=win==="scissors"?false:true;
    }else{
        userwin=win==="rock"?false:true;
    }
    if(userwin){
        use++;
        u.innerText=use;
        console.log("you win");
        change.innerText=`You won! ${id} beats ${win}`;
        change.style.backgroundColor="green";
        
        
    }else{
        comp++;
        c.innerText=comp;
        console.log("you lose");
        change.innerText=`You lose!  ${id} beats ${win}`;
        change.style.backgroundColor="red";
    }
   }
};







