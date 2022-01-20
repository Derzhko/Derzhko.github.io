const form = document.querySelector('form');

function deleteTask(event){
    console.log(event.target);
    event.target.closest('.task').remove();
}

function addTask(task) {
    const taskList = document.querySelector('.taskList');
    taskList.insertAdjacentElement('beforeend', task);
}

function createTask(taskText) {
    const task = document.createElement('div');
    task.innerHTML = `
    <div class="task__text">${taskText}</div>
    <button onclick="deleteTask(event)" class="task__remove">удалить</button>`;
    task.className = 'task';
    return task;
}

function formSubmit(event){
    event.preventDefault();
    addTask(createTask(event.target[0].value));
    form.reset();
}



form.addEventListener('submit', (event) => {formSubmit(event)});