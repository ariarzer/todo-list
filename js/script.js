var taskList = document.getElementById("taskList");

var counter = 0;

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

function Task(text) {
  this.text = text;
  this.isDone = false;
  this.id = counter.toString().padStart(3, '0');

  this.block = create('div', {class: 'todo-list_task'},
                      create('input', {type: 'checkbox', 'id': id}),
                      create('label', {'for': id}, this.text));
}

function TaskList(block) {
  this.tasks = [];
  this.block = block;

  this.insertNewTask = function (newTask){
    this.block.insertBefore(createTaskBlock(newTask), this.block.firstChild);
  }
}

function addTask()
{
  //do
}
