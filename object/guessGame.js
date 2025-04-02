"use strict";

let max = prompt("Enter the maximum number");
console.log(max);

const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("guess the number");
while (true) {
  if (guess == "quit") {
    console.log("user quit");
    break;
  }

  if (guess == random) {
    console.log("you are right ! congrats  !!");
    break;
  } else if (guess < random) {
    guess = prompt("hint: your guess was too small , Please try again");
  } else {
    guess = prompt(" hint :Your guess was large. Please try again");
  }
}
