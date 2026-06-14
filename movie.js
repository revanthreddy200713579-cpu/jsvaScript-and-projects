let apikey="4a24a4cc";
let bt=document.querySelector(".bt");
let inside=document.querySelector(".inside");
let poster=document.querySelector(".i");
let write=document.querySelector(".write");
let down=document.querySelector(".down");
let a=document.querySelector(".a");
let b=document.querySelector(".b");
let d=document.querySelector(".c");
bt.addEventListener("click",async(e)=>
{try{
    console.log("click");
    let c=inside.value;
    console.log(c);
    let url=`https://www.omdbapi.com/?t=${c}&apikey=${apikey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    poster.src = data.Poster;
    write.innerText=data.Plot;
    down.innerText=data.Actors+" and  "+"Director : "+data.Director;
    a.innerText=data.Title;
    b.innerText=data.Ratings[0].Value;
    d.innerText=data.Genre;
}catch (error) {
        console.log("Error:", error);
        alert("Something went wrong: " + error.message);
   


}

   
})