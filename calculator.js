let color=document.querySelector(".color");
let btn=document.querySelectorAll("button");
let i=document.querySelector(".in");
let icon=document.querySelector(".icon");
let equal = document.querySelector(".e");


color.addEventListener("click",()=>{
console.log("clicked");
 if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        color.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundColor = "black";
         color.style.backgroundColor = "white";
    }
})
for(let item of btn){
item.addEventListener("click",()=>{
console.log(item.innerText);

if(item.innerText == "C"){
    i.value="";
}
else if (item.innerText != "=") {
    i.value += item.innerText;
}




});
};

icon.addEventListener("click",()=>{
    console.log("clicked");
    i.value=i.value.slice(0,-1);

})
equal.addEventListener("click", () => {
    console.log("clicked");
    let exp = i.value;
    exp = exp.replaceAll("x", "*");
    
    let result = eval(exp);
    i.value=result;
});