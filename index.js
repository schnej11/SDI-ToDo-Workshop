// Get HTML elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Initialize the to-do list
let todos = [];

// Function to render the to-do list
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    todoText.innerText = todo;
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', () => removeTodo(index));

    todoItem.appendChild(todoText);
    todoItem.appendChild(removeButton);

    todoList.appendChild(todoItem);
  });

  window.localStorage.setItem('todos', JSON.stringify(todos));

  if (todos.length > 0) {

    const clearButton = document.createElement('button');
    clearButton.innerText = 'Clear';
    clearButton.addEventListener('click', () => clearTodos());

    todoList.appendChild(clearButton);
  }
}

// Function to clear the to-do list
function clearTodos() {
  todos = [];
  renderTodos();
}

// Function to add a new to-do
function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    todos.push(todoText);
    let fart = new Audio("https://upload.wikimedia.org/wikipedia/commons/c/cf/Fart.ogg");
    fart.play();
    renderTodos();
    todoInput.value = '';
  }
}

// Function to remove a to-do
function removeTodo(index) {
  todos.splice(index, 1);
  let fart = new Audio("https://upload.wikimedia.org/wikipedia/commons/c/cf/Fart.ogg");
    fart.play();
  renderTodos();
}

// Event listener for clearing the to-do list
todoList.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    clearTodos();
  }
});

// Event listener for submitting the form
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
});

// Initial rendering of the to-do list
renderTodos();


