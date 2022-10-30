const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = input.value;

  if (task) {
  } else {
    alert("Please enter task");
    return;
  }

  const task_el = document.createElement("div");
  task_el.classList.add("task");
});
