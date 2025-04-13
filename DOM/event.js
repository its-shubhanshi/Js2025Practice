"use strict";

let btn1= document.querySelector("button")
let h2=document.querySelector("h2")
let bgDiv=document.querySelector(".bgDiv")

//let rv=Math.floor(Math.random()*25)+1;
//console.log(rv);

function randomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    //console.log("red :", red , "green :", green, "blue :" , blue);
    let color=`${red},${green},${blue}`
    //console.log(color);
    h2.innerText=`rgb(${color})`;
    bgDiv.style.backgroundColor=`rgb(${color})`;


}
btn1.addEventListener("click",randomColor)


