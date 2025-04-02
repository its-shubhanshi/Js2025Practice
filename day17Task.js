"use strict";

console.log("Task");

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    arr.splice(i, 1);
  }
}
console.log(arr);

let number = 2871527;
let count = 0;

let copy = number;
while (copy > 0) {
  count++;
  copy = Math.floor(copy / 10);
}
console.log(count);

let n = parseInt(prompt("Enter any  number"));
let fact = 1;
if (n < 0) {
  console.log("Negative number ");
} else if (n == 0) {
  console.log("0 factorial is ", fact);
} else {
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(`${n} factorial is ${fact}`);
}
