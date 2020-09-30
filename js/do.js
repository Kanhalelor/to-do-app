const d = new Date();

const currentTime = d.toDateString();
// get date input field
const dt = document.getElementById('date');

dt.innerText = currentTime;
const addTask = document.getElementById('add-task');
const container = document.getElementById('container');

// create a list of tasks
const tasks = [];
  
addTask.addEventListener('click', (e) => {
    
  e.preventDefault();
  
  // get the task
  const t = addTask.previousElementSibling.value;
  if ( t === "" ) {
      alert("Please type a Task")
  } else {
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
    
    // clear input field
    addTask.previousElementSibling.value = "";   
  }
})

// mark and unmark completed tasks
container.addEventListener('click', (e) => {
    if ( e.target.classList.contains('remove') ) {
        let targetElem = e.target.parentElement.parentElement;
        targetElem.style.display = 'none';
    }
    else if ( e.target.classList.contains('check') ) {
      let completed = e.target.parentElement.previousElementSibling;
      completed.classList.toggle('done');
      e.target.classList.toggle('c');
    }
})

// store tasks to local storage
const setter = localStorage.setItem('Tasks', JSON.stringify(tasks));

// retrive tasks from local storage
const getter = localStorage.getItem('Tasks');

console.log(JSON.parse(getter));
