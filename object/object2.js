"use strict";
console.log("Objects");

const student = {
  name: "Shradha",
  age: 18,
  marks: 89,
  city: "Sitapur",
};

console.log(student);
student.name = "Amrita";
student.marks = "A";
student.gender = "Female";
student["age"] = 20;
console.log(student);

delete student.marks;
console.log(student);

// objecct of objects
console.log("****************************************************");

const classInfo = {
  aman: {
    grade: "A+",
    city: "Delhi",
  },
  shradha: {
    grade: "B+",
    city: "Noida",
  },
  Poornima: {
    grade: "A++",
    city: "Pune",
  },
};
console.log(classInfo);
console.log(classInfo.aman.city);

// Array of objects
console.log("****************************************************");

const classDetails = [
  {
    name: "Ankita",
    grade: "A+",
    city: "Delhi",
  },
  {
    name: "Aman",
    grade: "B+",
    city: "Noida",
  },
  {
    name: "Surya",
    grade: "A++",
    city: "Pune",
  },
];

console.log(classDetails);
console.log(classDetails[1].name);
classDetails[2].city = "Sitapur";
console.log(classDetails[2]);

console.log("***************************************************");
console.log("mATH oBJECT");

console.log("****************************************************");

console.log("MATH E", Math.E);
console.log("Math abs", Math.abs(-2.5));
console.log("Math.floor", Math.floor(6.9));
console.log("Math floor", Math.floor(-5.4));

console.log("Math.pow(3,4)", Math.pow(3, 4));
console.log("Math.ceil(5.6)", Math.ceil(5.8));

let num = Math.random();
num = num * 100;
num = Math.floor(num);
num = num + 1;

console.log(num);

console.log(
  "*^^^^^^^^^^^^^^^^^^^^^^^^^^^^***********#################################______________________________++++++++++++++++++============"
);

let val = Math.floor(Math.random() * 10 + 20);
console.log(val);
console.log(val);

// object task

console.log(
  "Create a program that generates a random number representing a dice roll."
);

let diceNum = Math.floor(Math.random() * 6) + 1;
console.log(diceNum);

console.log(
  "Qs2. Create an object representing a car that stores the following properties for thecar: name, model, color.Print the car’s name."
);
const car = {
  name: "Maruti",
  model: "A",
  color: "Marron",
};
console.log(car.name);

console.log(
  "Qs3. Create an object Person with their name, age and city.Edit their city’s original value to change it to “New York”.Add a new property country and set it to the united states"
);

const std = {
  name: "Aman",
  age: 20,
  class: "10",
  city: "New jersey",
};
console.log(std);
std.city = "NewYork";
std.country = "China";
console.log(std);
