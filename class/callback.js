/* the preorith of the code 
1)syncroonous
    1.1)console.log()
    1.2)render
    1.3)function calls
    1.4)loops
    1.5)math operations
    1.6)anyy syncronous code
2)microtask
    2.1)promise
    2.2)async/await
3)macrotask
    3.1)settimeout
    3.2)setInterval
    3.3)i/o callbacks
    3.4)fetch
4)WEB API's
    4.1)set timeout
    4.2)tmes
    4.3)running
    4.4)fetch http request
    4.5)DOM event listener
    4.6)location and filereader */

            console.log("1) Start of script"); 
        setTimeout(() => {
            console.log("4)Inside setTimeout");
        }, 0); 
        Promise.resolve().then(() => {
            console.log("3) Inside Promise");
        }); 
async function fetchData() {
    try {
        let data = await fetch('https://fakestoreapi.com/products/1');
        let response = await data.json();
        console.log("5) response:", response);
    } catch (err) {
        console.log(err);
    }
}
fetchData();

        fetchData();
        console.log("2)bEnd of script");



// console.log("1. Start"); // Call stack

// // MICROTASK (VIP)
// Promise.resolve().then(() => {
//   console.log("4. Promise.then (Microtask)");

//   Promise.resolve().then(() => {
//     console.log("5. Inner Promise (Microtask)");
//   });
// });

// // ASYNC (WEB API → MACROTASK QUEUE)
// setTimeout(() => {
//   console.log("7. setTimeout callback (Macrotask)");
// }, 0);

// // ASYNC FETCH (WEB API)
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(() => console.log("8. fetch.then (Microtask in modern browsers)"));



// // ASYNC/AWAIT → Microtask
// (async function () {
//   console.log("3. async function start (Call Stack)");

//   await null;
//   console.log("6. async/await resolved (Microtask)");
// })();

// console.log("10. End");