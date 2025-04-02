"use strict";
let arr = [7, 9, 0, -2];
let n = 3;
let print = arr.slice(0, n);
console.log(arr, print);
let print2 = arr.slice(arr.length - n);
console.log(print2);

let str = prompt("Enter any string");
/* if(str.length==0){
        console.log("string is empty");
        
       }
       else{
        console.log("string is not empty");
        
       }*/

let idx = 3;
if (str[idx] == str[idx].toLowerCase()) {
  console.log("character is lowercase");
} else {
  console.log("character is not lowercase");
}

console.log(str);
console.log(str.trim());

let arr2 = ["hello", "a", 23, 44, 66, 99, -8];

let item = 66;
if (arr2.indexOf(item) != -1) {
  console.log("element exists in array");
} else {
  console.log("element doesn't exists in array");
}
