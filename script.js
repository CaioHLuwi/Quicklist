let task = document.querySelector('.model .task-item').cloneNode(true);
let taskArea = document.querySelector('.bot-side');
let taskField = document.querySelector('#task-field'); 

function addTask(e){
    e.preventDefault();

    let value = taskField.value;

    let taskName = task.querySelector('#task-item-name');
    taskName.textContent = value;

    taskArea.prepend(task);

    taskField.value = '';
}