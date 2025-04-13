"use strict";

let para1 = document.createElement("p");
para1.innerText = "I am Shubhanshi";

document.querySelector("body").append(para1);

para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "Document object model";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let commonBtn = document.querySelectorAll(".commonBtn");

btn1.onclick = function () {
  alert("button was clicked");
};

function sayHi() {
  alert("Hii !! Welcome");
}

btn2.addEventListener("click", sayHi);

for (let allBtn of commonBtn) {
    allBtn.addEventListener("click",function(){
        console.log(this.innerText);
        alert(this.innerText)
        
    })
}


