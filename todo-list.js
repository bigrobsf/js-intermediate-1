/* jshint esversion: 6 */
/* jshint devel: true */
/* jshint node: true */
/* jshint browser: true */
'use strict';


let form = document.querySelector('form');
let ol = document.querySelector('ol');

// =============================================================================
// restores todo list items from local storage
if (localStorage.todoList) {
  let todoArray = JSON.parse(localStorage.getItem('todoList'));

  for (let i = 0; i < todoArray.length; i++) {
    let li = document.createElement('li');
    li.innerText = todoArray[i].todoText;
    if (todoArray[i].class) li.classList.add(todoArray[i].class);
    ol.appendChild(li);

    addButton(li);
  }
}

// =============================================================================
// adds listener to form to get todo item and add it to the list
form.addEventListener('submit', function(e) {
  e.preventDefault();

  let todoText = e.target.children[0].value;
  e.target.children[0].value = '';

  if (todoText.length > 0) {
    let li = document.createElement('li');
    li.innerText = todoText;
    ol.appendChild(li);

    addButton(li);

    saveToLocalStorage();
  }
});

// =============================================================================
// adds remove button to the todo list item
function addButton(li) {
  let removeItemBtn = document.createElement('button');
  removeItemBtn.classList.add('remove');
  removeItemBtn.innerText = 'Delete Item';
  li.appendChild(removeItemBtn);
}

// =============================================================================
// adds listener to list to toggle todo item complete or incomplete if list
// item is clicked - or remove todo item if remove button is clicked
ol.addEventListener('click', function(e) {
  if (e.target.tagName.toLowerCase() === 'li') {
    e.target.classList.toggle('complete');
  }

  if (e.target.tagName.toLowerCase() === 'button') {
    e.target.parentElement.remove();
  }

  saveToLocalStorage();
});

// =============================================================================
// saves todo list items to local storage as an array of objects
function saveToLocalStorage() {
  let todoItems = document.querySelectorAll('li');
  let todoArray = [];

  for (let i = 0; i < todoItems.length; i++) {
    let item = {};
    item.todoText = todoItems[i].childNodes[0].textContent;

    if (todoItems[i].className) item.class = todoItems[i].className;
    todoArray.push(item);
  }

  localStorage.setItem('todoList', JSON.stringify(todoArray));
}
