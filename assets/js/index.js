import { validate } from "./validation.js";
import { TaskManager } from "./taskManager.js";

const newTaskForm = document.querySelector('#new-task-form');

newTaskForm.addEventListener('click', (event) => {
  event.preventDefault();

  // Select the inputs
  const newTaskNameInput = document.querySelector('#name');
  const newTaskDescription = document.querySelector('#description');
  const newItem1 = document.querySelector('#item-1');
  const newItem2 = document.querySelector('#new-item');
  const newTaskAssignedTo = document.querySelector('#assign');
  const newTaskDueDate = document.querySelector('#deadline');

  // Get the values of the inputs
  const name = newTaskNameInput.value;
  const description = newTaskDescription.value;
  const item1 = newItem1.value;
  const item2 = newItem2.value;
  const assignedTo = newTaskAssignedTo.value;
  const dueDate = newTaskDueDate.value;

  if (validate()){
    TaskManager.addTask(name, description, item1, assignedTo, dueDate, "Not Started");
  }
});
