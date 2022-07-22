import { validate } from "./validation.js";
import { TaskManager } from "./taskManager.js";

// Grabbing elements from HTML
const newTaskForm = document.querySelector('#new-task-form');
const newItemButton = document.querySelector('#new-item-btn');
const newItemForm = document.querySelector('[data-newform]');

// Creating the TaskManager object
const taskManager = new TaskManager;

// Toggles hidden elements
const toggleForm = () => {
  newItemButton.classList.toggle('hidden');
  newItemForm.classList.toggle('hidden');
}

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

  // If the form passes valdiation it will create the object pass it into TaskManager
  if (validate()){
    taskManager.addTask(name, description, item1, assignedTo, dueDate, "Not Started");
    newTaskForm.reset();
    toggleForm();
  }
});
