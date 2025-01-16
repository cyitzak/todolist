const todolist = [
  {name: 'Go to school', date: '2025-01-17'},
  {name: 'Gym workout', date: '2025-01-17'}
]
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
        showTodo();
      ">Delete</button>
    `
    console.log(outputHtml);
    todo += outputHtml;
  }
  outputTask.innerHTML = todo;
}

function addTodo() {
  const name = document.querySelector('.input-name-task').value;
  const date = document.querySelector('.input-date-task').value;

  todolist.push({name, date});
  showTodo();
}