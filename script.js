const todolist = JSON.parse(localStorage.getItem('todos')) || [];
const outputTask = document.querySelector('.output-task-grid');
showTodo();

function showTodo() {
  let todo = '';
  for (let i = 0; i < todolist.length; i++) {
    const {name, date} = todolist[i];
    const outputHtml = 
    `
      <div>${name}</div>
      <div>${date}</div>
      <button class="delete-task-button" onclick="
        todolist.splice(${i}, 1);
        localStorage.removeItem('todos');
        showTodo();
      ">Delete</button>
    `
    todo += outputHtml;

  }
  outputTask.innerHTML = todo;
}

function addTodo() {
  const name = document.querySelector('.input-name-task').value;
  const date = document.querySelector('.input-date-task').value;
  todolist.push({name, date});
  localStorage.setItem('todos', JSON.stringify(todolist));
  showTodo();
}