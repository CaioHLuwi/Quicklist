let taskArea = document.querySelector('.bot-side');
let taskField = document.querySelector('#task-field'); 

let deleteIcon;

function addTask(e){
    e.preventDefault();

    let task = document.querySelector('.model .task-item').cloneNode(true);

    let value = taskField.value;

    let taskName = task.querySelector('#task-item-name');
    taskName.textContent = value;

    taskArea.prepend(task);

    taskField.value = '';

    deleteIcon = document.querySelector('.bot-side .task-item #delete-icon');

    deleteIcon.addEventListener('click', (e) => {
        e.target.closest('.task-item').remove();
    })
}
