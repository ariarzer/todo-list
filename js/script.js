var taskList = new TaskList(document.getElementById('task-list'));

var counter = 0;

function Task(text) {
  this.text = text;
  this.id = counter.toString().padStart(3, '0');

  this.block = create('div', {class: 'todo-list_task'},create('input', {type: 'checkbox', 'id': this.id}),
                      create('label', {'for': this.id}, this.text));
}

const resetValue = (block) => block.value = '';

function TaskList(block) {
  this.block = block;
  this.button = document.getElementById('create-task-button');
  this.textArea = document.getElementById('new-task');

  this.addNewTask = function (taskText){
    this.block.insertBefore((new Task(taskText)).block, this.block.firstChild);
  }

  var self = this;
  this.button.addEventListener('click', function () {
    var taskText = self.textArea.value;
    if (taskText){
      self.addNewTask(taskText);
      resetValue(self.textArea);
    }
  });
}

function create(tag, attributes) {
  var element = document.createElement(tag);
  if (typeof attributes == 'object') {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute( key, attributes[key] );
    });
  }
  for (var i = 2; i < arguments.length; i++) {
    var val = arguments[i];
    if (typeof val == 'string') {val = document.createTextNode(val)};
    element.appendChild(val);
  }
  return element;
}
