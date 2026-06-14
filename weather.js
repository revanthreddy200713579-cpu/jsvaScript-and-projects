const apikey="c825543fa0f5119ef649b48c7277fac5";
let btn=document.querySelector(".but");
let ce=document.querySelector(".ce");
let c=document.querySelector(".c");
let density=document.querySelector(".desc");
let humidity=document.querySelector(".humidity");

btn.addEventListener("click",async()=>{
    console.log("click");
    let city=document.querySelector(".name").value;
    console.log(city);
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    let response=await fetch(url);
    let data=await response.json();
    console.log(data);
    ce.innerText=data.name;
    let v=data.main.temp;
    let cm=v-273.12;
    c.innerText=cm.toFixed(1)+"°C";
    density.innerText=data.weather[0].description;
    humidity.innerText="Humidity :"+data.main.humidity;


    


})