"use strict"

let uname=document.querySelector("#uname")
let passe=document.querySelector("#pass")
let form=document.querySelector("form")
let submit=document.querySelector("#sb")
form.addEventListener("submit",function(event){
    event.preventDefault()
    console.log("form submitted")
    //console.log(input);
    console.log(uname.value, passe.value);
    console.log(this.elements[0].value); 
})

let typeSomething= document.querySelector("#ts")
let para= document.querySelector("#para")

typeSomething.addEventListener("input",(event)=>{
    event.preventDefault()
    console.log(typeSomething.value);
    console.log("change inout");
    para.innerHTML=typeSomething.value
    
    
})