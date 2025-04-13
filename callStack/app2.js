"use strict";

let h1 = document.querySelector("h1");

/*
function changeColor(color, delay) {
    setTimeout(() => {
      h1.style.color = color;
      if(nextColorChange){
          nextColorChange()
      }
    }, delay);
  
  }
  
changeColor("red",1000)
changeColor("blue",2000)
changeColor("green",3000)
*/

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) {
      nextColorChange();
    }
  }, delay);
}
changeColor("yellow", 4000, () => {
  changeColor("red", 1000, () => {
    changeColor("green", 2000);
  });
});
//callbacks nesting -> callback hell
