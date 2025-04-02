"use strict";
console.log("Q2: even or not with arrow fun");

let isEven = (n) => {
  if (n % 2 == 0) {
    return "Number is even";
  } else {
    return "number is odd";
  }
};
console.log(isEven(24));
console.log(isEven(243));

const obj = {
  messgae: "Hellow World",
  logMessage() {
    console.log(this.messgae);
  },
};

setTimeout(obj.logMessage, 1000); //undefined after a delay 1s

let length = 4;
function callback() {
  //console.log(this.length);//error
}
const object2 = {
  length: 5,
  method(callback) {
    callback();
  },
};
object2.method(callback, 1, 2);

const arrayAvg = (arr) => {
  let total = 0;
  for (let number of arr) {
    total = total + number;
  }
  return total / arr.length;
};
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arrayAvg(arr), "array");
