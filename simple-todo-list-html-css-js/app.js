const toggleMode = document.querySelector(".toggle-mode");

const mode = "light";

toggleMode.addEventListener("click", function () {
  if (toggleMode.classList.contains("dark")) {
    toggleMode.classList.remove("dark");
    toggleMode.classList.add("light");
    toggleMode.src = "./sun-line.png";
    document.querySelector("body").style.color = "black";
    document.querySelector("body").style.backgroundColor = "white";
  } else {
    toggleMode.classList.remove("light");
    toggleMode.classList.add("dark");
    toggleMode.src = "./moon-line.png";
    document.querySelector("body").style.color = "white";
    document.querySelector("body").style.backgroundColor = "#252525";
  }
});

// TODO: TOGGLING THE CREATE TASK POP-UP
const popUp = document.querySelector(".pop-up");
const createTask = document.querySelector(".create-task");
createTask.addEventListener("click", function () {
  if (popUp.classList.contains("pop-up-hidden")) {
    popUp.classList.remove("pop-up-hidden");
  } else {
    popUp.classList.add("pop-up-hidden");
  }
});

document.querySelector(".cancel").addEventListener("click", function () {
  popUp.classList.add("pop-up-hidden");
});

// TODO: ADDING TASKS TO THE LIST
const applyButton = document.querySelector(".apply");
const taskList = document.querySelector(".task-list");

// NOTE: Array Of Task List
const tasks = [];

// TODO: FUNCTION TO HANDLE ADDING TASKS
function addTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    console.log("Hello World");
    return;
  }

  tasks.forEach(function (el, i) {
    // creating the task
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    taskList.append(taskContainer);

    // HACK: CREATE CHECKBOX
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    taskContainer.append(checkbox);

    // HACK: CREATE SPAN OF EACH TASK
    const taskItem = document.createElement("span");
    taskItem.textContent = el + ` #${i}`;
    taskContainer.append(taskItem);

    // HACK: CREATE THE DELETE BUTTON
    const deleteButton = document.createElement("img");
    deleteButton.src = "./delete-bin-line.png";
    taskContainer.append(deleteButton);

    deleteButton.addEventListener("click", () => deleteTask(i));

    // HACK: CREATE THE BUTTON TO UPDATE THE TASK
    const updateTask = document.createElement("img");
    updateTask.src = "./edit-line.png";
    taskContainer.append(updateTask);
  });
}

const createNewTask = function (newTask) {
  if (newTask.trim() === "") {
    alert("Task Cannot be empty");
    return;
  }

  tasks.push(newTask);
  addTasks();
  popUp.classList.add("pop-up-hidden");
};

const updateTask = function () {};

const deleteTask = function (taskIndex) {
  tasks.splice(taskIndex, 1);
  addTasks();
};

function taskDoneButton(value) {}

applyButton.addEventListener("click", function (e) {
  e.preventDefault();
  const taskInput = document.querySelector(".task-input");
  const taskText = taskInput.value;

  createNewTask(taskText);

  taskInput.value = "";
});

addTasks();
