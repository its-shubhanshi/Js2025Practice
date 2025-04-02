"use strict";

console.log("array part 2");

let colors = ["red", "yellow", "blue", "green", "pink"];
console.log(colors.slice());

console.log(colors.slice(2));
console.log(colors.slice(-2));
console.log(colors.slice(2, 4));
console.log(colors);

console.log("splice method");
console.log("");
console.log("");
console.log("");

let cars = ["audi", "Maruti", "xuv", "alto", "vaginar", "bmw"];
console.log(cars, "before splice");
console.log(cars.splice(2));
console.log(cars, "after splice ");

console.log(cars.splice(0, 1));
console.log(cars);
cars.push("farari");
cars.push("swift desire");
console.log(cars);

cars.splice(0, 0, "toyata", "xuv", "safari");
console.log(cars);

cars.splice(1, 1, "mercedes", "xuv");
console.log(cars);

let num = [22, 33, 44, 55, 88, 8, 3, 4];
console.log(num.sort());
console.log(typeof num[0]);

let months = ["january", "july", "march", "august"];
months.splice(0, 2, "july", "june");
console.log(months);

console.warn("array References");
