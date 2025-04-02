"use strict";
//spread
let arr = [22, 33, 44, 55];
function minVal(...arr) {
  let res = Math.min(...arr);

  console.log(res);
}
minVal(...arr);
console.log(..."abdcjgjhbgjkj");

let newArr = [...arr];
newArr.push(3);
console.log(newArr, "newarr");
let chars = [..."Shubhanshi Srivastava"];
console.log(chars);

let even = [2, 4, 6, 8, 10];
let odd = [1, 3, 5, 7, 9];
let spd = [...even, ...odd];
console.log(spd);

//spread with object literaals

let data = {
  email: "prachi@gmail.com",
  password: "abcd",
};

const dataCopy = { ...data, id: 23, age: 19 };
console.log(dataCopy);

let obj1 = { ...arr };
console.log(obj1);
let obj2 = { ...chars };
console.log(obj2);

//rest

function sum(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log("you gave us : ", args[i]);
  }
}
sum(2, 2);

//destructuring

let names = ["tony", "Prachi", "bruce", "steve"];
let [winner, runnerup, ...pass] = names;
console.log("winner :", winner, "runnerup :", runnerup);
console.log("pass : ", pass);
