document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  const tasks = document.getElementById('tasks')
  const input = document.getElementById('new-task-description');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskDescription = input.value;

    if (taskDescription.length > 0) {
      const li = document.createElement('li');
      li.textContent = taskDescription;
      tasks.appendChild(li)
    }
  })
});
