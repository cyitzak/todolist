// Array to store the tasks
const todolist = [];

function addTodo() {
  // Get the value from the input field and store it in todoName
  const todoName = document.querySelector('.input-todo').value;

  // Add the new todo to the todolist array
  todolist.push(todoName);

  // Call the function to update and display the updated todolist
  showTodo();
}

function showTodo() {
  // Initialize an empty string to store the HTML content for displaying the todos
  let todolistHtml = '';

  // Loop through each item in the todolist array
  for (let i = 0; i < todolist.length; i++) {
    // Create the HTML for each todo item
    const todoHtml = `<p>${todolist[i]}</p>`;

    // Add the individual todo's HTML to the todolistHtml string
    todolistHtml += todoHtml;
  }

  // Update the innerHTML of the '.output' element with the generated todolist HTML
  document.querySelector('.output').innerHTML = todolistHtml;
}
