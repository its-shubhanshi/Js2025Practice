"use strict";

document.body.style.backgroundColor = "darkblue";
document.body.style.color = "white";

let todo = [];

let req = prompt("Please Enter Your request");

console.log(req);

while (true) {
  if (req == "quit") {
    console.log("quitting app");
    break;
  }

  if (req == "list") {
    console.log("------------------------------------------");
    for (let task of todo) {
      console.log(task);
    }
    console.log("------------------------------------------");
  } else if (req == "add") {
    let task = prompt("pleae enter the task you want to add");
    todo.push(task);
    console.log("task added");
  }
  req = prompt("please enter your request");
}
