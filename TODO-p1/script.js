const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodoButton');
const todoList = document.getElementById('todoList');

// Function to add a new todo item
addTodoButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo(){
    const todoText = todoInput.value.trim();
    if (todoText === '') return;
    
    const li = document.createElement('li');
    li.textContent = todoText;
    todoList.appendChild(li);
    todoInput.value = '';
}