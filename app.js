const option = document.querySelector(".option");
const menu = document.querySelector(".option-menu");
const main = document.querySelector("main");
const btnTasks = document.querySelector(".task-button");
const containerTasks = document.querySelector(".display-tasks");
const tasks = document.querySelector(".taskss");

option.addEventListener("click", () => {
  menu.classList.toggle("active");
  main.classList.toggle("set");
});

window.addEventListener("load", () => {
  tasks.focus();
});
btnTasks.addEventListener("click", () => {
  if ((tasks.value === null) | (tasks.value === "")) {
  } else {
    const createdLi = document.createElement("li");
    const taskNumber = document.createElement("div");
    const taskContent = document.createElement("div");
    const displayTasks = document.createElement("div");
    const taskTime = document.createElement("div");
    const arrayLi = Array.from(document.querySelectorAll(".task-child"));
    //! Set Classes
    createdLi.className = "task-child rounded-xl flex mb-2 ";
    taskNumber.className =
      "task-number rounded-tl-xl bg-gray-900 rounded-bl-xl text-white font-bold flex items-center justify-center";
    taskContent.className =
      "task-content1 rounded-tr-xl rounded-br-xl bg-gray-400 text-black font-medium";
    displayTasks.className = "p-2 mb-1";
    taskTime.className = "p-2 text-gray-600 text-sm font-thin";
    taskNumber.innerHTML = "Task " + (arrayLi.length + 1);
    displayTasks.innerHTML = tasks.value;
    taskTime.innerHTML = "3 minutes ago";
    //! AppendChilds
    createdLi.appendChild(taskNumber);
    createdLi.appendChild(taskContent);
    taskContent.appendChild(displayTasks);
    taskContent.appendChild(taskTime);
    containerTasks.appendChild(createdLi);
  }
});
