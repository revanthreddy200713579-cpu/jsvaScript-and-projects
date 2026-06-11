/*let di=document.querySelector("div");
console.log(di);

di.style.backgroundColor="green";
di.innerText="hlo";

let res=di.getAttribute("id");
console.log(res);
let clas=document.querySelector("p");
let re=clas.setAttribute("class","new");
console.log(re);*/

let but=document.createElement("button");
but.innerText="cilckme";
console.log(but);
let d=document.querySelector("div");//here div os place whwre u wants to keep the button u can uset he p also if u want the same in para
d.after(but);//endoutside

d.append(but);//endinside
d.prepend(but);//startinside
d.before(but);//startoutside

//craeting the heaidng

let h1=document.createElement("h1");
h1.innerText="heading1";
let h=document.querySelector("body");
h.prepend(h1);
h.before(h1);// body is special element so it cannot excedds the body backgroung color

//to remove 

let para=document.querySelector("p");
para.remove();

