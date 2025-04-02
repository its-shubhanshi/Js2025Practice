"use strict";
const student = {
  name: "karan",
  age: 14,
  class: 9,
  subjects: ["hindi", "english", "math", "history"],
  username: "kt@123",
  pass: 123,
};
let {
  username: uname,
  pass: password,
  dob: age = 22,
  city = "sitapur",
} = student;

console.log(uname, password, city, age);
