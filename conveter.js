const url="https://api.frankfurter.app/v1/latest?"

let drop=document.querySelectorAll(".fom");
let btn=document.querySelector(".cls");
let fromCurr=document.querySelector(".a");
let toCurr=document.querySelector(".b");


for(let select of drop){
for (let code in countryList){
let opt =document.createElement("option");
opt.innerText=code;
opt.value=code;
select.append(opt);

select.addEventListener("change",(evt)=>{
    updateFlag(select);
})

}
}

const updateFlag=(ele)=>{
   
    let curr=ele.value;
    console.log(curr);
    let co=countryList[curr];
    let ima=`https://flagsapi.com/${co}/flat/64.png`;
    let img = ele.parentElement.querySelector("img");
    img.src=ima;
}

btn.addEventListener("click",async(e)=>{
e.preventDefault();
    console.log("click");
    let amt=document.querySelector(".num");
    let amtval=amt.value;
    console.log(amtval);
    
    

    let fromm = fromCurr.value.toLowerCase(); // USD -> usd
    let too = toCurr.value.toLowerCase();     // INR -> inr

    const u = `https://latest.currency-api.pages.dev/v1/currencies/${too}.json`;

    let response = await fetch(u);
    let data = await response.json();
    let rate=data[too];
    console.log(rate);

});
