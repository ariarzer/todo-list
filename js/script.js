var taskList = new TaskList(document.getElementById('task-list'));

function Task(text, id) {
  this.text = text;
  this.id = id;

  var idForCheckbox = this.id + '-checkox';

  this.block = create('div', {class: 'todo-list_task', 'id': this.id},create('input', {type: 'checkbox', 'id': idForCheckbox}),
                      create('label', {'for': idForCheckbox}, this.text));
}

const resetValue = (block) => block.value = '';

function TaskList(block) {
  this.block = block;
  this.button = document.getElementById('create-task-button');
  this.textArea = document.getElementById('new-task');
  this.tasks = [];

  var getTaskId = (i) => ('my-task-' + (i).toString().padStart(3, '0'));

  this.addNewTask = function (taskText){
    idNewTask = getTaskId(this.tasks.length);
    newTask = new Task(taskText, idNewTask);
    this.block.insertBefore(newTask.block, this.block.firstChild);
    this.tasks.push(newTask);
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
