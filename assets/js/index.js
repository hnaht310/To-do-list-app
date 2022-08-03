import { validate } from './validation.js';
import { TaskManager } from './taskManager.js';

// Grabbing elements from HTML
const newTaskForm = document.querySelector('#new-task-form');
const newItemButton = document.querySelector('#new-item-btn');
const newItemForm = document.querySelector('[data-newform]');
const taskList = document.querySelector('#tasks-list');

// Global timeout so we can cancel it
let timeOutDate;

// Creating the TaskManager object
const taskManager = new TaskManager();

// load the tasks and render them
taskManager.load();
taskManager.render();

// Toggles hidden elements
const toggleForm = () => {
  newItemButton.classList.toggle('hidden');
  newItemForm.classList.toggle('hidden');
};

// Opens new item form
newItemButton.addEventListener('click', toggleForm);

newTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Select the inputs
  const newTaskNameInput = document.querySelector('#name');
  const newTaskDescription = document.querySelector('#description');
  const newItem1 = document.querySelector('#item-1');
  const newTaskAssignedTo = document.querySelector('#assign');
  const newTaskDueDate = document.querySelector('#deadline');

  // Get the values of the inputs
  const name = newTaskNameInput.value;
  const description = newTaskDescription.value;
  const item1 = newItem1.value;
  const assignedTo = newTaskAssignedTo.value;
  const dueDate = newTaskDueDate.value;

  // If the form passes validation it will create the object pass it into TaskManager
  if (validate()) {
    taskManager.addTask(
      name,
      description,
      item1,
      assignedTo,
      dueDate,
      'Not Started'
    );

    taskManager.save();
    taskManager.render();
    newTaskForm.reset();
    toggleForm();
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('done')) {
    let status =
      event.target.closest('.details').nextElementSibling.firstElementChild;

    let taskId = event.target.closest('.card').dataset.id;

    let task = taskManager.getTaskById(taskId);

    if (event.target.checked) {
      status.innerText = 'Completed';
      task.status = 'Completed';
    } else {
      status.innerText = 'Not Started';
      task.status = 'Not Started';
    }
  }
});

taskList.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('calendar')) {
    let taskId = event.target.closest('.card').dataset.id;
    let taskDue = taskManager.getTaskById(taskId).dueDate;

    const date = new Date(`${taskDue}T00:00`);
    console.log(date);
    const formattedDate = date.toDateString();
    
    // Updates the date after a set amount of time
    timeOutDate = setTimeout(() => {
      event.target.innerHTML = `${formattedDate}`;
    }, 250);
  }
});
taskList.addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('calendar')) {
    clearTimeout(timeOutDate);
    event.target.innerHTML = `<i class="fa-solid fa-calendar-days fa-lg"></i>`;
  }
});