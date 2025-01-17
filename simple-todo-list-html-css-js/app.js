const toggleMode = document.querySelector(".toggle-mode");

const popUp = document.querySelector(".pop-up");

const body = document.querySelector("body");

let update = false;

popUp.addEventListener("click", function (e) {
  if (e.target.classList.contains("pop-up")) {
    popUp.classList.add("pop-up-hidden");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    popUp.classList.add("pop-up-hidden");
  }
});

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

// TODO: FILTERING TASK FUNCTIONALITY
const filterInput = document.querySelector("select");

function filteringTasks() {
  const filterValue = filterInput.value;

  const filteredTasks = tasks.filter((task) =>
    task.value.toLowerCase().includes(filterValue.toLowerCase())
  );
}

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

    if (el.completed) taskContainer.classList.add("completed");
    else taskContainer.classList.remove("completed");

    // HACK: CREATE CHECKBOX
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    taskContainer.append(checkbox);

    checkbox.addEventListener("change", () => taskDoneButton(i));

    // HACK: CREATE SPAN OF EACH TASK
    const taskItem = document.createElement("span");
    taskItem.textContent = el.value + ` #${i}`;
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

    updateTask.addEventListener("click", () => updateTask1(i));
  });
}

const createNewTask = function (newTask) {
  if (newTask.trim() === "") {
    alert("Task Cannot be empty");
    return;
  }

  const taskElement = {
    value: newTask,
    completed: false,
  };

  tasks.push(taskElement);
  addTasks();
  popUp.classList.add("pop-up-hidden");
};

const updateTask = function (value, index) {
  update = true;
  popUp.classList.remove("pop-up-hidden");
  // const updatedTask =
  tasks[index].value = value;
  addTasks();

  update = false;
};

const deleteTask = function (taskIndex) {
  tasks.splice(taskIndex, 1);
  addTasks();
};

function taskDoneButton(index) {
  tasks[index].completed = !tasks[index].completed;
  addTasks();
}

applyButton.addEventListener("click", function (e) {
  e.preventDefault();
  const taskInput = document.querySelector(".task-input");
  const taskText = taskInput.value;

  if (update) {
    updateTask(taskText);
  } else {
    createNewTask(taskText);
  }

  taskInput.value = "";
});

addTasks();
