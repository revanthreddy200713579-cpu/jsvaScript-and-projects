const URL="https://catfact.ninja/fact";
const para=document.querySelector(".para");
let btn=document.querySelector(".btn");

const getFacts = async ()=>{
    console.log("getting data........");
    let response = await fetch(URL);
    console.log(response);
    let data=await response.json();
    console.log(data.fact);
   
    para.innerText=data.fact;
};

btn.addEventListener("click",getFacts);