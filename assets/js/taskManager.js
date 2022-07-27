const createTaskHtml = (name, description, item1, assignedTo, dueDate, status) => {
  const html = `
  <section class="card">
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
        <li><input type="checkbox">${status}</li>
        <li><i class="fa-solid fa-user"></i>${assignedTo}</li>
      </ul>
    </div>
    <button class="calendar"><i class="fa-solid fa-calendar-days fa-lg"></i>${dueDate}</button>
  </section> `;

  return html;
}

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
  }

  render() {
    const tasksHtmlList = [];

    for (let i = 0; i < this.tasks.length; i++) {
      const currentTask = this.tasks[i];
      const date = new Date(this.tasks[i].dueDate);
      const formattedDate = date.toDateString();
      const taskHtml = createTaskHtml(currentTask.name, currentTask.description, 
      currentTask.item1, currentTask.assignedTo, formattedDate, currentTask.status);
  
      tasksHtmlList.push(taskHtml);
    }
    
    const tasksHtml = tasksHtmlList.join('\n');
    document.getElementById('tasks-list').innerHTML = tasksHtml;
  }
}

const taskList = document.querySelector('#tasks-list');

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('done')) {
    console.log(event.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName('ul'));
    event.target.closest('ul > li')
  }
})