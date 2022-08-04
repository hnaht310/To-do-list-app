const TaskManager = require('../js/taskManager');

const tasks = new TaskManager();
const testArray = tasks.tasks;

const compareArray = [{'id': 0, 'name': 'test-name', 'description': 'test-description', 'item1': 'test-item', 'assignedTo': 'test-assignment', 'dueDate': 'test-date', 'status': 'test-status'}];
const compareObject = {'id': 0, 'name': 'test-name', 'description': 'test-description', 'item1': 'test-item', 'assignedTo': 'test-assignment', 'dueDate': 'test-date', 'status': 'test-status'};

const testAddTask = () => {
    tasks.addTask('test-name', 'test-description', 'test-item', 'test-assignment', 'test-date', 'test-status');

    return testArray;
}

describe('Array of TaskManager tests to see if the functions are working', () => {
    test('Added a task successfully to our array of tasks', () => {
        expect(testAddTask()).toEqual(expect.arrayContaining(compareArray));
    })
    test('Should return the task we created', () => {
        expect(tasks.getTaskById(0)).toEqual(expect.objectContaining(compareObject))
    })
    test('Task should be empty', () => {
        expect(tasks.deleteTask(0)).toEqual(expect.arrayContaining([]));
    })
});

