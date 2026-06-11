let div=document.querySelector("div");
console.dir(div);

let di=document.querySelector("h1");
console.dir(di);
di.innerText=di.innerText+"good";

let divs =document.querySelectorAll(".box");
/*divs[0].innerText="new1";
divs[1].innerText="new2";
divs[2].innerText="new3";*/
//or
/*let idx=0;
for(d of divs){
    d.innerText=`new ${idx+1}`;
    idx++;
}*/
