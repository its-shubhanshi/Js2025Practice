"use strict";
let btn=document.querySelector("#btn")
let btn2=document.querySelector("#btn2")
btn.addEventListener("mouseenter",function(){
    console.log("gg");
    
})

btn2.addEventListener("click", function(event){
    console.log(event);
    
})

let input= document.querySelector("input")
input.addEventListener("keydown",(event)=>{
    console.log("key was pressed");
    console.log(`${event.code}=> ${event.key}`);
    
    
})



