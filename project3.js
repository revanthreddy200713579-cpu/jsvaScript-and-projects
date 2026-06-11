let man=document.querySelector("#btn");
let ans=document.querySelector(".display");
let an=document.querySelector(".ans");
let high=document.querySelector(".high");
let tr=document.querySelector(".try");

let secretnum=2; 
let count=0;

man.addEventListener("click",()=>{
let user=Number(guess.value);
console.log(user);
console.log("clicked");
if(secretnum===user){
    ans.innerText="crt no";
an.classList.remove("ans");
}else if(secretnum > user){
    count++;
    high.innerText=count;
    an.classList.remove("ans");
    ans.innerText="Your number is low";
}
else{
    count++;
    high.innerText=count;
    an.classList.remove("ans");
    ans.innerText="Your number is High";
}


});

tr.addEventListener("click",()=>{
    console.log("play");
    count = 0;
    high.innerText = count;

    guess.value = "";

    an.classList.add("ans");  
})




