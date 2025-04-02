"use strict";

console.log("SetTime out ");
console.log("=============================================");

console.log("Hi there !");
setTimeout(() => {
  console.log("Shubhanshi");
}, 1000);

console.log("Welcome to");

let id1 = setInterval(() => {
  document.write("<h3>Mera Collage</h3>");
}, 2000);

clearInterval(id1);

let id2 = setInterval(() => {
  document.write("<h3>Tera Collage</h3>");
}, 4000);

clearInterval(id2);

console.log("this with arrow function");

const student = {
  name: "Shubhanshi",
  age: 19,
  marks: 88,
  prop: this, // global object

  getName: function () {
    console.log(this);
    return this.name;
  },
  getMarks: () => {
    console.log(this); // parent's scope
    return this.marks;
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log("Prachi", this);
    }, 2000);
    //student obj
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log("Shradha", this);
    }, 2000);
    //window object
  },
};

console.log(student);

let add = (a, b) => {
  return a + b;
};

//Practice question

let sq = (n) => {
  return n * n;
};
console.log(sq(4)); //16

let cb = (n) => n * n * n;
console.log(cb(6));

let id3 = setInterval(() => {
  console.log("Hello World");
}, 1000);

setTimeout(() => {
  clearInterval(id3);
  console.log("clear interval run");
}, 10000);
