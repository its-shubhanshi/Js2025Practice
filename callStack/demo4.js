"use strict";

console.log("Call back hell tuff");
document.writeln("<h1>Call back hell tuff</h1>");

function savetoDB(data, sucess, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  console.log(internetSpeed);

  if (internetSpeed > 4) {
    sucess(data);
  } else {
    failure();
  }
}

savetoDB(
  "Ankita Raghuwanshi",
  (data) => {
    console.log("Your Data was saved => ", data);
    savetoDB(
      "Hello World",
      (data) => {
        console.log("sucess2 data 2 saved = >", data);
        savetoDB(
          "Prachi Finally",
          (data) => {
            console.log("Third sucess => ", data);
          },
          () => {
            console.log("Third Connection week");
          }
        );
      },
      () => {
        console.log("Failure2 : week connection");
      }
    );
  },
  () => {
    console.log("weak connection data is not save");
  }
);
