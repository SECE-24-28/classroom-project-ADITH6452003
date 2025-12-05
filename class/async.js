console.log("this is the satatemwnt before delay");
setTimeout(() => {
    console.log("this is the statement inside the delay");
}, 3000);
setInterval(() => {
    console.log("this is the statement inside the interval");
}, 4000);
console.log("this is the statement after delay");

//promise
let promise = new Promise((resolve, reject) => {
    let value = true;
    if (value) {
        resolve("success");
    } else {
        reject("failure");
    }
});
promise
.then((msg)=>{
    console.log(msg);
})
.catch((msg)=>{
    console.log(msg);
})
.finally(()=>{
    console.log("this is the finally block");
});