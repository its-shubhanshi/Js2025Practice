"use strict";

document.writeln("<h1>Promises</h1>");

function savetoDB(data) {
  return new Promise((sucess, failure) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    console.log(internetSpeed);
    if (internetSpeed > 4) {
      sucess("Data saved");
    } else {
      failure("Data was not saved , week connection");
    }
  });
}
//console.log(savetoDB("Prachi Collage"));

// than and catch method
console.log("than catch method");

function savetoDBPromise(data) {
  return new Promise((resolved, rejected) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    //console.log(internetSpeed);
    if (internetSpeed > 4) {
      resolved("Data saved");
    } else {
      rejected("Data was not saved , week connection");
    }
  });
}

let request = savetoDBPromise("Ankita Promis");
request
  .then(() => {
    console.log("Promise was resolved");
    console.log("req=> ", request);
  })
  .catch(() => {
    console.log("Promise are rejected");
    console.log("req=>", request);
  });

//console.log(savetoDBPromise("Prachi Collage"));
