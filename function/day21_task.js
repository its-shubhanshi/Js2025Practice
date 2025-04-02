"use strict";

console.log(
  " Q1 : Square and sum the array elements using the arrow function and then find the average of the array."
);
let nums = [2, 4, 6, 8, 10, 12];
let sq = nums.map((el) => el * el);
console.log(sq);

let sum = sq.reduce((acc, el) => acc + el, 0);
let avg = sum / nums.length;
console.log(sum, avg);

console.log(
  "Q2. Create a new array using the map function whose each element is equal to the original element plus 5"
);
let newArr = [2, 4, 3, 5, -2, -5, 8, 9];
let calC = newArr.map((el) => el + 5);
console.log(calC);

console.log(
  "Q3 : . Create a new array whose elements are in uppercase of words present in theoriginal array."
);

let stringArr = [
  "prachi",
  "soumya",
  "enak",
  "shubhanshi",
  "aradhya",
  "amisha",
  "shivanshi",
];
let chars = stringArr.map((str) => str.toUpperCase());
console.log(chars);

console.log(`Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
  variable number of arguments. The function should return a new array with the original
  array values and all of the additional arguments doubled.`);

const doubleReturnArgs = (arr, ...args) => [...arr, ...args.map((v) => v * 2)];
console.log(doubleReturnArgs([1, 2, 3], 4, 4));
console.log(doubleReturnArgs([3], 10, 4, 6, 7));

console.log(`Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object.`);

const mergeObject = (obj1, obj2) => console.log({ ...obj1, ...obj2 });
mergeObject({ a: 1, b: 2, c: 3 }, { name: "Prachi", age: 18 });
