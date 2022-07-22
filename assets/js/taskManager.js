export class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(name, description, item1, assignedTo, dueDate, status) {
    const task = {
      id: this.currentId++,
      name,
      description,
      item1,
      assignedTo,
      dueDate,
      status
    };
    // Push new task to tasks array
    this.tasks.push(task);
    console.log(this.tasks);
  }
}