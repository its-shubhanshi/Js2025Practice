"use strict";

let student = [
  ["aman", 88],
  ["Shraddha", 77],
  ["ritika", 66],
  ["prachi", 88],
];
for (let i = 0; i < student.length; i++) {
  console.log(i, student[i], student[i].length);

  for (let j = 0; j < student[i].length; j++) {
    console.log(j, student[i][j]);
  }
}
