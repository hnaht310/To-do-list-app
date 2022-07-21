class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }
  addTask(name, description, assignedTo, dueDate, status) {
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: 'TODO',
    };
    // Push new task to tasks array
    this.tasks.push(task);
  }
}

// const task1 = new TaskManager(1);
// task1.addTask(
//   'do grocery shopping',
//   'buy milk and eggs',
//   'Thanh',
//   '08/01/2022',
//   'TODO'
// );
// console.log(task1.tasks);
