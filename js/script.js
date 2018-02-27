var blockOfTaskList = document.getElementById("task-list");

var taskList = new TaskList(blockOfTaskList );

var counter = 0;

document.getElementById("create-tack-button").addEventListener('click', function () {
    var taskText = document.getElementById('new-task').value;
    if (taskText){
      taskList.addNewTask(taskText);
      resetValueById('new-task');
    }
  });

function Task(text) {
  this.text = text;
  this.id = counter.toString().padStart(3, '0');

  this.block = create('div', {class: 'todo-list_task'},create('input', {type: 'checkbox', 'id': this.id}),
                      create('label', {'for': this.id}, this.text));
}

function TaskList(block) {
  this.block = block;

  this.addNewTask = function (taskText){
    this.block.insertBefore((new Task(taskText)).block, this.block.firstChild);
  }
}

const resetValueById = (id) => document.getElementById(id).value = '';

function create(tag, attributes) {
  var element = document.createElement(tag);
  if (typeof attributes == 'object') {
    for (var i in attributes) {
      element.setAttribute( i, attributes[i] );
    }
  }
  for (var i = 2; i < arguments.length; i++) {
    var val = arguments[i];
    if (typeof val == 'string') {val = document.createTextNode(val)};
    element.appendChild(val);
  }
  return element;
}
