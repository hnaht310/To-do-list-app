const createTaskHtml = (
  name,
  description,
  item1,
  assignedTo,
  dueDate,
  status,
  id
) => {
  const html = `
  <section class="card" data-id='${id}'>
    <div class="card-container">
      <div class="details">
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="checkbox-list">
          <div>
            <input type="checkbox" class="add-new" />
            <label for="add-new">${item1}</label>
          </div>
          <div>
            <input type="checkbox" class="done" />
            <label for="done">Done</label>
          </div>
        </div>
      </div>
      <ul class="item-status">
        <li>${status}</li>
        <li><i class="fa-solid fa-user"></i>${assignedTo}</li>
      </ul>
    </div>
    <button class="delete-button">Delete</button>
    <button class="calendar"><i class="fa-solid fa-calendar-days fa-lg"></i></button>
  </section> `;

  return html;
};

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
      status,
    };
    // Push new task to tasks array
    this.tasks.push(task);
  }

  getTaskById(taskId) {
    let foundTask;

    this.tasks.forEach((task) => {
      if (task.id === parseInt(taskId)) {
        foundTask = task;
      }
    });

    return foundTask;
  }

  render() {
    const tasksHtmlList = [];

    for (let i = 0; i < this.tasks.length; i++) {
      const currentTask = this.tasks[i];
      const date = new Date(`${this.tasks[i].dueDate}T00:00`);
      const formattedDate = date.toDateString();
      const taskHtml = createTaskHtml(
        currentTask.name,
        currentTask.description,
        currentTask.item1,
        currentTask.assignedTo,
        formattedDate,
        currentTask.status,
        currentTask.id
      );

      tasksHtmlList.push(taskHtml);
    }

    const tasksHtml = tasksHtmlList.join('\n');
    document.getElementById('tasks-list').innerHTML = tasksHtml;
  }

  save() {
    // create a JSON string
    const tasksJson = JSON.stringify(this.tasks);
    // store the JSON string in localStorage
    localStorage.setItem('tasks', tasksJson);

    const currentId = this.currentId.toString();
    localStorage.setItem('currentId', currentId);
  }

  load() {
    // get the JSON string of tasks stored in localStorage
    if (localStorage.getItem('tasks')) {
      const tasksJson = localStorage.getItem('tasks');
      // convert tasksJson string to an array
      this.tasks = JSON.parse(tasksJson);
    }

    if (localStorage.getItem('currentId')) {
      const currentId = localStorage.getItem('currentId');
      this.currentId = JSON.parse(currentId);
    }
  }
  deleteTask(taskId) {
    let newTasks = this.tasks.filter((task) => {
      return task.id !== parseInt(taskId);
    });
    this.tasks = newTasks;
  }
}
