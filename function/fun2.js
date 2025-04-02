"use strict";

console.log("=============================");
function sum(a, b) {
  let res = a + b;
  return res;
}
console.log(sum(2, 3));
console.log(sum(sum(22, 11), 11));

let str = ["hii", "Hello", "bye", "!"];
function concate(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}

console.log(concate(str));
console.log("+++++++++++++++++++++++++++++++++++++++");

function outer() {
  let a = 2;
  let b = 3;
  function inner() {
    let c = 5;
    console.log(a);
  }
  inner();
}
outer();

let greet = "Hellow"; //global scope

function changeGreet() {
  let greet = "Namste"; //function scope
  console.log(greet);
  function innerGreet() {
    console.log(greet); //lexical scope
  }
}

console.log(greet);
changeGreet();
//Output
/*
hello
namste
namste
*/

//function expression

console.log("//function expression//");

let name = "Prachi";

let hello = function (name) {
  console.log("hello", name);
};
hello(name);

hello = function () {
  console.log("HEllo Shikhar");
};
console.log(hello());
