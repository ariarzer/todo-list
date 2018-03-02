var taskList = new TaskList(document.getElementById("task-list"),
                            document.getElementById("create-task-button"),
                            document.getElementById('new-task'));

var counter = 0;

function Task(text) {
  this.text = text;
  this.id = counter.toString().padStart(3, '0');

  this.block = create('div', {class: 'todo-list_task'},create('input', {type: 'checkbox', 'id': this.id}),
                      create('label', {'for': this.id}, this.text));
}

function TaskList(block, button, textArea) {
  this.block = block;

  this.addNewTask = function (taskText){
    this.block.insertBefore((new Task(taskText)).block, this.block.firstChild);
  }

  var self = this;
  button.addEventListener('click', function () {
    var taskText = textArea.value;
    if (taskText){
      self.addNewTask(taskText);
      resetValue(textArea);
    }
  });
}

const resetValue = (block) => block.value = '';

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
