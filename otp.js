let but=document.querySelector(".but");
 let b=document.querySelector("body");
 let box=document.querySelectorAll(".cont")
 let count=document.querySelector(".count");
 let send=document.querySelector(".send")
 let verify=document.querySelector(".verify");
let optstr = "";

but.addEventListener("click",()=>{
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
         but.style.backgroundColor="black";
           b.style.color="black";

    } else {
        document.body.style.backgroundColor = "black";
        but.style.backgroundColor="white";
        b.style.color="white";

    }
});

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("input", () => {
        if (box[i].value.length === 1 && i < box.length-1) {
            box[i + 1].focus();
        }
    });

    box[i].addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && box[i].value === "" && i > 0) {
            box[i - 1].focus();
        }
    });
}
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            verify.click();
        }
    });
}

let generateotp=()=>{
let otp=Math.floor(10000+Math.random()*90000);
 otpstr=otp.toString();

console.log("opt",otp);
}

send.addEventListener("click",()=>{
    console.log("clicked")

    generateotp();
     time = 10;
    count.innerText = time;2

    send.style.display = "none";
      timer = setInterval(() => {
        time--;
        count.innerText = time;

        if (time === 0) {
            clearInterval(timer);
            send.style.display = "block";
            send.innerText="resend";
        }
    }, 1000);


});

verify.addEventListener("click",()=>{
    console.log("click");
   
let entered = "";
    for(let i=0;i<box.length;i++){
    
        entered += box[i].value;
    }
   if(entered === otpstr){

    document.body.innerHTML = `
        <div class="success-page">
            <div class="tick">✔</div>
            <h1>Correct OTP</h1>
            <p>OTP Verified Successfully</p>
        </div>
    `;
    document.body.style.backgroundColor = "green";
    console.log("Correct ✅");

    
}
else{
    console.log("Wrong ❌");
     for(let i=0;i<box.length;i++){
        box[i].value="";
    }
}

console.log(entered);

})



