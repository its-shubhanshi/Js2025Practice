"use strict";

let favMovie = "Avatar";
let guessUSer = prompt("enter your fav movie");

while (guessUSer != favMovie && guessUSer != "quit") {
  console.log("wrong");
  guessUSer = prompt("");
}
if (guessUSer == favMovie) {
  console.log(guessUSer);
  console.log("Congrations");
} else {
  console.log("quit");
}
let i = 1;
while (i <= 5) {
  if (i == 3) {
    break;
  }
  console.log(i);
  i++;
}
