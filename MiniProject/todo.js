"use strict";

let addBtn=document.querySelector("#addBtn")
let ul=document.querySelector("ul")
let inp=document.querySelector("input")

addBtn.addEventListener("click",()=>{
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item)
    inp.value="";

    
    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete")
    item.appendChild(delBtn)
    
    console.log(inp.value);

    console.log(delBtn);
})

/* 
let delBtns=document.querySelectorAll(".delete")
for(let delBtn of delBtns){
    delBtn.addEventListener("click",function(event){
        event.
        console.log("drlryte");
        let parent= delBtn.parentElement
        parent.remove()
        
        
    })
}
*/

ul.addEventListener("click", function(event){
    console.log("button click");
    console.log(event.target.nodeName);
    if (event.target.nodeName) {
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");     
    }
    
})
