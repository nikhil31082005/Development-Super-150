document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const activeTasks = document.getElementById('activeTasks');
    const completedTasks = document.getElementById('completedTasks');

    // Add task event listener
    addTaskButton.addEventListener('click', () => {
        const taskDescription = taskInput.value.trim();
        if (taskDescription) {
            addTask(taskDescription);
            taskInput.value = '';
        }
    });

    // Function to add a task
    function addTask(description) {
        const taskItem = createTaskItem(description);
        activeTasks.appendChild(taskItem);
        setTimeout(() => taskItem.classList.add('visible'), 10);
    }

    // Function to create a task item
    function createTaskItem(description) {
        const taskItem = document.createElement('li');
        
        const taskContent = document.createElement('div');
        taskContent.classList.add('task-content');
        
        const taskText = document.createElement('span');
        taskText.textContent = description;

        const taskDate = document.createElement('span');
        taskDate.textContent = new Date().toLocaleString();

        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-buttons');

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => completeTask(taskItem));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(taskItem));

        taskButtons.appendChild(completeButton);
        taskButtons.appendChild(deleteButton);
        taskContent.appendChild(taskText);
        taskContent.appendChild(taskDate);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(taskButtons);

        return taskItem;
    }

    // Function to complete a task
    function completeTask(taskItem) {
        taskItem.classList.add('completed');
        setTimeout(() => {
            completedTasks.appendChild(taskItem);
            taskItem.classList.remove('visible');
            setTimeout(() => taskItem.classList.add('visible'), 10);
        }, 300);
    }

    // Function to delete a task
    function deleteTask(taskItem) {
        taskItem.classList.remove('visible');
        setTimeout(() => taskItem.remove(), 300);
    }
});
