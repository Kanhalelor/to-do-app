// selecting elements

const d = new Date();

const currentTime = d.toDateString();
// get date input field
const dt = document.getElementById('date');

dt.innerText = currentTime;
const addTask = document.getElementById('add-task');
const container = document.getElementById('container');

addTask.addEventListener('click', (e) => {
    
  e.preventDefault();
  
  // get the task
  const t = addTask.previousElementSibling.value;
  
  // append task to a list of tasks
  
  const tasks = [];
  
  tasks.push(t);
  
  // create elements
  const taskBox = document.createElement('li');
  taskBox.innerHTML = `
  <li id="label" class="task-box">
    <span class="task">${t}</span>
    <span title="remove task" class="buttons"><button id="checkBtn" title="mark as complete" class="check">&#x2713;</button><button id="remove-task" class="remove">X</span>
  </li>
  `
  // append elements to the DOM
  container.appendChild(taskBox);
  
  // Better way to make an addEventListener
  container.addEventListener('click', (e) => {
      if ( e.target.classList.contains('remove') ) {
          let targetElem = e.target.parentElement.parentElement;
          targetElem.style.display = 'none';
      }
      if ( e.target.classList.contains('check') ) {
        let completed = e.target.parentElement.previousElementSibling;
        completed.classList.toggle('done');
        e.target.classList.toggle('c');
      }
  })
  // store tasks to local storage
  setter(tasks);
  
  // clear input field
  addTask.previousElementSibling.value = "";
})

// store tasks to local storage
const setter = (task) => {
  window.localStorage.setItem('Tasks', JSON.stringify(task));
}
