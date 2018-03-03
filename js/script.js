var taskList = new TaskList(document.getElementById('task-list'));

function Task(text, id) {
  this.text = text;
  this.id = id;

  this.block = create('div', {class: 'todo-list_task'},create('input', {type: 'checkbox', 'id': this.id}),
                      create('label', {'for': this.id}, this.text));
}

const resetValue = (block) => block.value = '';

function TaskList(block) {
  this.block = block;
  this.button = document.getElementById('create-task-button');
  this.textArea = document.getElementById('new-task');
  this.tasks = [];

  this.addNewTask = function (taskText){
    idNewTaskBlock = (this.tasks.length).toString().padStart(3, '0');
    newTaskBlock = new Task(taskText, idNewTaskBlock).block;
    this.block.insertBefore(newTaskBlock, this.block.firstChild);
    this.tasks.push(newTaskBlock);
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
