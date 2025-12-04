console.log("hello world");
const a = 10;
const b = 20;
console.log("Value of a is:", a);
console.log("Value of b is:", b);
function fun(x,y){
    console.log("Sum inside function:", x + y);
}
console.log("Sum of a and b is:", a + b);
console.log("Product of a and b is:", a * b);
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc,val)=>acc+val,0);
console.log("Array elements:", arr);
console.log("Sum of array elements:", sum);
let double = arr.map(val=>val*2);
console.log("Doubled array elements:", double);
let filtered = arr.filter(val=>val%2===0);
console.log("Filtered even elements:", filtered);  

let data = {
    name: "Adith",
    age: 18,
    city: "tirupur",
    num: function(){
        console.log("my number is 1234567890");
        console.log(`my name is ${this.name} and my age is ${this.age} and my city is ${this.city}`);
    }
};
console.log("User Data:", data);
let updated = {...data , age : 19 , city :"chennai" , num : function(){
    console.log("this is a cloned function with updated values")
    console.log(`my name is ${this.name} and my age is ${this.age} and my city is ${this.city}`);
}
,name:"jeeva"
};
console.log("Cloned Data:", updated);
data.num();
updated.num();
for(let key in data){
    console.log(`${key} : ${data[key]}`);
}
data.country = "India";
console.log("After adding country:", data);
delete data.city;
console.log("Modified User Data:", data);