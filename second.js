/*let num=25;
let number=prompt("enter the number");
while(number!=num){
    if(number>num){

     number=prompt("you entered the number is greater enter again");
    }
    else{
        number=prompt("you enterd the number is less entr again");
    }
    
}

    

console.log("your enter number is crt");*/
/*let obj={
    item:"pen",
    cost:10,
}
console.log(obj);
for(let i in obj){
    console.log("key=",i,"value=",obj[i]);
}
let output=`the cost of ${obj.item} is ${obj.cost} ruppes`;
console.log(output);
console.log("the cost of",obj.item,"is",obj.cost,"rupees")*/

/*let names=["rev","cha","sur","ri"];
console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

for(let i=0;i<4;i++){
    console.log(names[i]);
}
for(let name of names){
    console.log(name);
}*/

/*let marks=[85,97,44,37,76,60];
let sum=0;
let avg;
for(let i=0;i<6;i++){
    sum=sum+marks[i];
}
avg=sum/marks.length;
console.log("the avge is",avg);

let price=[250,645,300,900,50];
let offer;
for(let i=0;i<5;i++){
offer=price[i]*0.1;
price[i]=price[i]-offer;
console.log(`after appling the offer is ${price[i]}`);
}*/

let companies=["bloom","micro","uber","google","ibm","netflix"];
//companies.shift();
companies.splice(2,1,"ola");

