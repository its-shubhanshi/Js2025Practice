"use strict";
let arr = [22, 33, 44, 55, 11, 66];
let num = 44;
function checkArr(arr, num) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}
console.log(checkArr(arr, num));

/*
        Write a JavaScript function that accepts a list of country names as input and
returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"]
        */

const country = ["Australia", "Germany", "United States of America"];

function largeCountry(country) {
  let ansidx = 0;

  for (let i = 0; i < country.length; i++) {
    let ansLen = country[ansidx].length;
    let currLen = country[i].length;
    console.log(ansLen, currLen);
    if (currLen > ansLen) {
      ansidx = i;
    }
  }
  return country[ansidx];
}
console.log(largeCountry(country));

console.log("=========================================================");
console.log(
  "Write a JavaScript function to generate a random number within a range(start, end)."
);

function randomGen(start, end) {
  let diff = end - start;
  let range = Math.floor(Math.random() * diff) + start;
  console.log(range);
}
randomGen(100, 200);
randomGen(10, 20);

let str = "Shubhanshi";
function vowelCheck(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    //console.log(str[i]);
    if (
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "a"
    ) {
      console.log(count, str.charAt(i));

      count++;
    }
  }
  console.log(count, "vowel number of string");
}
console.log(vowelCheck(str));
