/*Name="Revanth Reddy";
console.log(Name);
const student={
    full:"REVANTH",
    age:20,
    cgpa:8.3,
    isPass:true,
};
student["age"]=student["age"]+1;
console.log(student["age"]);
console.log(student)
console.log(typeof student)

let a=5;
let b="5";

console.log(a==b);
console.log(a===b);

let number=prompt("entr the number");
if(number%5==0){
    console.log("it is divisible by 5");
}
else{
   console.log("not divisible bt 5"); 
}

let str="Reavnth";
let size=0;
for(let i of str){
console.log("i=",i);
size++;
}
console.log("string size =",size);*/
let student={
    full:"REVANTH",
    age:20,
    cgpa:8.3,
    isPass:true,
};
for(let i in student){
    console.log("key=",i,"value=",student[i]);
}

for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}
















