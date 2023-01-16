let form = document.getElementById("form");
let taskInput = document.getElementById("taskInput");
let dateInput = document.getElementById("dateInput");
let descInput = document.getElementById("descInput");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted");
  formValidation();
});

let formValidation = () => {
  if (taskInput.value == "") {
    console.log("failure");
    msg.innerHTML = "Task can't be empty";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = [];
let acceptData = () => {
  data.push({
    text: taskInput.value,
    date: dateInput.value,
    desc: descInput.value,
  });

  localStorage.setItem("KEY", JSON.stringify(data));
  showData();
};

let showData = () => {
  tasks.innerHTML = "";
  data.map((x, y) => {
    return (tasks.innerHTML += `<div id=${y}>
  <span class="fw-bold">${x.text}</span>
  <span class="small text-secondary">${x.date}</span>
  <p>${x.desc}</p>
  <span class="options">
    <i onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-regular fa-pen-to-square"></i>
    <i onclick="deleteTask(this)" class="fa-regular fa-trash-can"></i
  ></span>
</div>`);
  });

  resetForm();

  add.setAttribute("data-bs-dismiss", "modal");
  add.click();
  (() => {
    add.setAttribute("data-bs-dismiss", "");
  })();
};

let resetForm = () => {
  taskInput.value = "";
  dateInput.value = "";
  descInput.value = "";
};

let deleteTask = (b) => {
  b.parentElement.parentElement.remove();
  data.splice(parentElement.parentElement.id, 1);
  localStorage.setItem("KEY", JSON.stringify(data));
};

let editTask = (b) => {
  let selectedTask = b.parentElement.parentElement;
  taskInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  descInput.value = selectedTask.children[2].innerHTML;

  deleteTask(b);
};

(() => {
  data = JSON.parse(localStorage.getItem("KEY")) || [];
  showData();
})();
