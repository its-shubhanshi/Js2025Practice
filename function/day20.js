"use strict";

const student = {
  name: "shubhanshi",
  age: 19,
  mobno: 8808853575,
  math: 99,
  phy: 88,
  chemi: 87,
  eng: 86,
  hindi: 77,
  city: "sitapur",
  pincode: 261151,
  getAvg() {
    console.log(this);

    let avg = (this.eng + this.hindi + this.phy + this.chemi + this.math) / 5;
    console.log(avg);
  },
};

console.log(student.getAvg());

//try catch

console.log("try catch");
let a = 88;

try {
  console.log(a);
  console.log(b);
} catch (err) {
  console.log("variable is not define");
  console.log(err);
}

console.log("=========================================");
console.log("Miscellaneous topics");
console.log("=========================================");

console.log("Arrow function");

const sum = (a, b) => {
  console.log(a + b);
};

sum(3, 3);

const cube = (n) => {
  console.log(n * n * n);
};
cube(5);

const pow = (a, b) => {
  return a ** b;
};
console.log(pow(2, 3));

const hello = () => {
  console.log("hello world");
};
hello();
