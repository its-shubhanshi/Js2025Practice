"use strict";

function hello(uname) {
  console.log("Say Hiii", uname);
}
hello("Prachi");

function isAdult() {
  let age = 19;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Under age");
  }
}
isAdult();

function poem() {
  console.log("Twinkle twinkle little star ......");
  console.log("how i womder what you are");
}
poem();

console.log("==================================================");

function randomNum() {
  let random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
}
randomNum();
randomNum();
randomNum();
randomNum();

// function with arguments

function printInfo(name, age) {
  console.log(`${name}'s age is ${age}`);
}
printInfo("Prachi", 22);

function calCAvg(a, b, c) {
  let avg = (a + b + c) / 3;
  console.log(avg);
}
calCAvg(5, 5, 5);

console.log(
  "============================================================================="
);

function printTable(n) {
  for (let i = n; i < n + 10; i += n) {
    console.log(i);
  }
}
printTable(2);
