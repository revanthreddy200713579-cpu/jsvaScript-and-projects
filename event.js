/*let bt=document.querySelector("#but");
bt.onclick=()=>{
    console.log("but was clicked");
    let a=25;
    a++;
    console.log(a);
};

let div=document.querySelector('div');
div.onmouseover=()=>{
    console.log("you are inside the div");
};*/
let bt=document.querySelector("#but");
/*bt.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
};*/
bt.addEventListener("click",()=>{
    console.log("button 1 was clicked");
});

