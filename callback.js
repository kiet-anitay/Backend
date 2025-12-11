function greet(name, cb){
    console.log("hello" + name); //1
    setTimeout(() => {
        cb(cb1)
    }, 10000)
    // cb();

}
function cb1(){
    console.log("cb1")
    cb2()
}

function cb2(){
    console.log("cb2")
    cb3()
}

function cb3(){
    console.log("cb2")
}
console.log("start");// 3
function greetCb(){
    cb(cb3)
    console.log("call back calleds") //2
}

// greet("mca", greetCb)
// console.log("end"); //4
// console.log(1)
// console.log(2)
// console.log(2);



const newPromise = new Promise((reject, resolve)=> {
    // if(reject){
    //      console.log("error");
    //      return reject("error")
    // }
    setTimeout(() => {
         console.log("promise resolved");
         return resolve("resolved promise");
    }, 5000) 
});

newPromise.then(
    (res) => {
        console.log(res);

    }
)
.catch((err) => console.log(err))

function getData() { //hoc
    return new Promise((reject, resolve)=> {
        // if(reject){
        //      console.log("error");
        //      return reject("error")
        // }
        setTimeout(() => {
             console.log("promise resolved");
            resolve("resolved promise");
        }, 1000) 
    });
}


 async function asyncFunction(){
    try {
        const res = await getData();
         console.log(res)

    }catch(err){
        console.log(err)
    }
}
asyncFunction();

console.log("==end==")







