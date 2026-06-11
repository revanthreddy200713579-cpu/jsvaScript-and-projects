let box=document.querySelectorAll(".box");
let score=document.querySelector(".num");
let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let time=document.querySelector(".cou");

let points=0;
let seconds=10;

let moleTimer;
let ne;
let sec;
box.forEach((bo)=>{

    bo.addEventListener("click",()=>{
        console.log("click");
        if(bo.style.backgroundImage!==""){

            points++;

            score.innerText = points;
           
        }
    })
});

const showMole=()=>{
    box.forEach((b)=>{
  b.style.backgroundImage ="none";
    });
    let random=Math.floor(Math.random()*9);
    box[random].style.backgroundImage="url('rabbit.jpg')";
    box[random].style.backgroundSize = "cover";
    box[random].style.backgroundPosition = "center";

};


start.addEventListener("click", () => {

    moleTimer = setInterval(showMole,500);
    sec=setInterval(fortime,1000);
    seconds = 10;       // Reset timer
    points = 0; 
    time.innerText=seconds;
    score.innerText=points;
});
box.forEach((b) => {
stop.addEventListener("click",()=>{
console.log("stop");
clearInterval(moleTimer);
 clearInterval(sec);
b.style.backgroundImage ="none";
ne=points;
seconds = 10;
    points = 0;

    time.innerText = 10;
    score.innerText = 0;

})

});

const fortime=()=>{
    seconds--;
    time.innerText=seconds;
    if(seconds===0){
        time.innerText=0;
        clearInterval(moleTimer);
         clearInterval(sec);
        box.forEach((b) => {
            b.style.backgroundImage = "none";
        });
        alert("agem over !your score is"+points);
        
    }
}






