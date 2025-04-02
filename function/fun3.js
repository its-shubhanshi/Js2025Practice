"use strict";

function multipleGreet(func, count) {
  for (let i = 0; i <= count; i++) {
    func();
  }
}
let greet = function () {
  console.log("hello");
};
multipleGreet(greet, 2);

console.log("higher order function");

let odd = function (n) {
  console.log(!(n % 2 == 0));
};
odd(4);

function oddEventTest(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("wrong request");
  }
}

let request = "odd";
let funX = oddEventTest(request);
console.log(funX(87));
