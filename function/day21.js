"use strict";
// forEach loop

let arr = [1, 2, 3, 3, 4, 55, 66];
let print = (element) => {
  console.log(element);
};
arr.forEach(print);

arr.forEach(function (element) {
  console.log(element);
});

let arr2 = [
  {
    name: "aman",
    age: 18,
    marks: 88,
  },
  {
    name: "ankita",
    age: 28,
    marks: 77.8,
  },
  {
    name: "arushi",
    age: 38,
    marks: 88.9,
  },
  {
    name: "aman",
    age: 22,
    marks: 68,
  },
];
console.log(arr2);
arr2.forEach((student) => {
  console.log(student.name);
});

let gpa = arr2.map((el) => {
  return el.marks / 10;
});
console.log(gpa);

//map function

let num = [1, 2, 3, 4, 5, 6, 7, 8];
let double = num.map((el) => {
  return el * 2;
});
console.log(double);
console.log(num);

let newArr = [2, 4, 1, 5, 6, 2, 7, 6, 9];

let even = newArr.filter((num) => num % 2 == 0);

// every method
let everyCheck = newArr.every((el) => el % 2 == 0);
console.log(everyCheck); //all elements true than true output

// some function
let someCheck = [2, 4, 6, 8].some((el) => el % 2 == 0);
console.log(someCheck); //all elements true than true output

//reduce

let reduce = [1, 2, 3, 4, 6].reduce((acc, el) => acc + el);
console.log(reduce);

let nums = [2, 3, 4, 5, 7, 8, 9, 1, 2, 44];
/*
let max=0;
for(let i=0; i<nums.length;i++){
  if(max<nums[i]){
      max=nums[i]
      console.log("max=", max, "num[i]=", nums[i] );
      

  }
}
console.log(max);
*/

let result = nums.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});
console.log("res: ", result);

let num10 = [10, 20, 30, 40, 50, 60, 550];
let ans = num10.every((el) => el % 10 == 0);
console.log(ans); //true

let minimum = num10.reduce((acc, el) => {
  if (acc < el) {
    return acc;
  } else {
    return el;
  }
});
console.log("minimum value :", minimum);

//default parameter

function sum2(a, b = 0, c = 5) {
  return a + b + c;
}
console.log(sum2(3, 4));
console.log(sum2(3, 0, 2));
console.log(sum2(2));
