document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('.task').forEach(taskElement => {
        const text = taskElement.querySelector('span').innerText;
        const completed = taskElement.querySelector('input[type="checkbox"]').checked;
        tasks.push({ text, completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    createTaskElement(taskText, false);
    taskInput.value = '';
    saveTasks();
}

function createTaskElement(text, completed) {
    const taskList = document.getElementById('taskList');

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    if (completed) {
        taskDiv.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;
    checkbox.addEventListener('change', function () {
        taskDiv.classList.toggle('completed');
        saveTasks();
    });

    const taskText = document.createElement('span');
    taskText.innerText = text;

    // زر الحذف
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerHTML = '🗑️';  // رمز سلة المهملات
    deleteButton.addEventListener('click', function () {
        taskDiv.remove();
        saveTasks();
    });

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(deleteButton);

    taskList.appendChild(taskDiv);
}