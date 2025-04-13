"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let inputTask = document.querySelector("#inputTask");
  let addBtn = document.querySelector("#addBtn");
  let todoList = document.querySelector(".todoList");

  const addTodo = () => {
    const todoText = inputTask.value.trim();
    if (todoText === "") {
      alert("Please enter a task !");
      return;
    } else {
        const li =document.createElement('li');
        const span=document.createElement("span");
        span.textContent=todoText;
        //remove button
        const removeBtn=document.createElement('button');
        removeBtn.textContent='❌';
        //removeBtn.classList.add()
        removeBtn.addEventListener("click",()=>{
            todoList.removeChild(li)
        })
        function editTodo(text=todoText){
            let editPrompt=prompt("edit",text)
            console.log(editPrompt);
            span.textContent=editPrompt;
            
        }
        //edit button
        const editBtn=document.createElement('button');
        editBtn.textContent='✏️';
        //removeBtn.classList.add()
        editBtn.addEventListener("click",()=>{
            editTodo(todoText)
        })

        li.appendChild(span)
        li.appendChild(editBtn)
        li.appendChild(removeBtn)
        todoList.appendChild(li)
        inputTask.value=''; //clear input
        
    }
  };
  addBtn.addEventListener("click", addTodo);


  // allow pressing enter to add a todo

  inputTask.addEventListener("keypress",(e)=>{
    if(e.key==='Enter'){
        addTodo()
    }
  })

});
