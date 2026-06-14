/*function add(a,b){
    console.log(a+b);
}

function call(a,b,callback){
callback(a,b);
}
call(1,2,add);*/

/*function getData(data){
    setTimeout(()=>{
        console.log("data",data);
    },2000);
}

getData(2);
getData(3);
getData(4);*/

/**/

/*function g(){
    greet(3);
}

function greet(data,callback)
{
    setTimeout(()=>{
    console.log("HELLO",data);
    if(callback){
    callback();
    
    }
    },2000);
}

greet(2,g);*/

/*function a(){
    getData(4);
}
function call()
{
    console.log("getting data3......");
getData(3,a);
}
function all()
{
console.log("getting data2......");
getData(2,call);
}
function getData(dataId,getNext){
    setTimeout(()=>{
        console.log("data",dataId);
       if(getNext)
            getNext();
      
    },2000);
}
getData(1,all);*/
/*let promise=new Promise((resolve,reject)=>{
    console.log("I am promise");
  //resolve(123);
    reject("some error");
});*/

/*function getData(data,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}*/

/*const getProm=()=>{
     return new Promise((resolve,reject)=>{
        console.log("i am promise");
        resolve("Success");
     });
};
let promise=getProm();
promise.then((res)=>{
    console.log("promisefullfilled",res);
});

promise.catch((err)=>{
console.log("regected",err);
});*/
/*const ascycfun = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
console.log("somedata");
resolve("recived");
        },2000);
    });
}

const ascycfun1 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
console.log("somedata");
resolve("recived");
        },4000);
    });
}
console.log("fetching data............");
let p1=ascycfun();
p1.catch((err)=>{
    console.log("something ",err);
});

p1.then((res)=>{
    console.log("fetcging data 1............");
    let p2=ascycfun1();
    p2.then((res)=>{})
});
*/

/*function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            resolve("success");
            
        },2000);
    });
};
console.log("getting data1....");
getData(1).then((res)=>{
    console.log("getting data2....");
getData(2).then((res)=>{
console.log("getting data3....");
getData(3).then((res)=>{
    console.log(res);
})
});
})*/
function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            resolve("success");
            
        },2000);
    });
};
async function run() {
console.log("getting data1....");
await getData(1);
console.log("getting data2....");
await getData(2);
console.log("getting data3....");
await getData(3);
}
run();