"use strict";

let student = ["Ankita", "Shradha", "Mamta", "sneha", "Abhay", "Dharmesh"];
console.log(student);
console.log(student.length);
console.log(student[0]);
console.log(student);

let nums = [2, 4, 6, 8, 10];
console.log(nums, nums.length);
console.log(typeof nums);

let marks = [22, 33, 44, 55, 66];
for (let i = 0; i < marks.length; i++) {
  const element = marks[i];
  console.log(element);
  let addnum = element + marks[i];
  console.log("addnum", addnum);
}

let fruits = ["Mango", "Papaya", "Apple", "Banana"];
console.log(fruits);
fruits[0] = "Lichi";
console.log(fruits, fruits.length);
fruits[10] = "Grapes";
console.log(fruits, fruits.length);

let primiaryColor = ["Red", "green", "yellow"];
console.log(primiaryColor.indexOf("Yellow"));
console.log(primiaryColor.indexOf("yellow"));
console.log(primiaryColor.includes("yellow"));
console.log(primiaryColor.includes("blue"));

console.log(primiaryColor.concat(fruits));

console.log(primiaryColor.reverse());

let collection = ["mango", "Reema", 1, 22, "6677", true];
console.log(collection);
console.log(collection[5]);
console.log(collection[1][3]);
console.log(collection[1].length);

let start = ["january", "july", "march", "august"];
start.shift();
start.shift();
console.log("after shift");

console.log(start);
console.log("after  unshift");
start.unshift("june");
start.unshift("july");
console.log(start);

//concat method

let arr1 = ["a", "b", "c"];
let arr2 = [1, 2, 3, 4, 5, true];
let con = arr1.concat(arr2);
console.log(con, con.length, typeof con[8]);
console.log(con.reverse());
