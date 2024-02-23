document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    const addTask = (taskText) => {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          li.classList.add('complete');
        } else {
          li.classList.remove('complete');
        }
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-btn');
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
      });
  
      li.textContent = taskText;
      li.appendChild(checkbox);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    };
  });
  



