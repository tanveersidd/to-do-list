const taskInput = document.getElementById('task');
const addButton = document.getElementById('add');
const taskList = document.getElementById('taskList');
const filterOptions = document.getElementById('filterOptions');
const clearButton = document.getElementById('clearCompleted');

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

filterOptions.addEventListener('change', filterTasks);
clearButton.addEventListener('click', clearCompletedTasks);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Delete</button>
        <button class="complete">Complete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();

    const deleteButton = li.querySelector('.delete');
    deleteButton.addEventListener('click', function () {
        li.remove();
    });

    const completeButton = li.querySelector('.complete');
    completeButton.addEventListener('click', function () {
        li.classList.toggle('completed');
    });
}

function filterTasks() {
    const option = filterOptions.value;
    const tasks = document.querySelectorAll('li');
    tasks.forEach((task) => {
        if (option === 'all' || (option === 'completed' && task.classList.contains('completed')) || (option === 'active' && !task.classList.contains('completed'))) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}

function clearCompletedTasks() {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach((task) => {
        task.remove();
    });
}
