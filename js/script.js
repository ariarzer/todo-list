var taskList = new TaskList(document.getElementById('task-list'));

function Task(text, id, isDone) {
  this.text = text;
  this.id = id;
  this.isDone = isDone;

  var idForCheckbox = this.id + '-checkox';

  this.checkbox = create('input', {type: 'checkbox', 'id': idForCheckbox});

  var self = this;
  this.checkbox.addEventListener('change', function () {
    self.isDone = self.checkbox.checked;
  });

  this.block = create('div', {class: 'todo-list_task', 'id': this.id}, this.checkbox, create('label', {'for': idForCheckbox}, this.text));
}

function TaskList(block) {
  this.block = block;
  this.button = document.getElementById('create-task-button');
  this.textArea = document.getElementById('new-task');
  this.tasks = [];

  var getTaskId = (i) => ('my-task-' + (i).toString().padStart(3, '0'));

  this.addNewTask = function (taskText){
    idNewTask = getTaskId(this.tasks.length);
    newTask = new Task(taskText, idNewTask, false);
    this.block.insertBefore(newTask.block, this.block.firstChild);
    this.tasks.push(newTask);
  }

  var self = this;
  this.button.addEventListener('click', function () {
    var taskText = self.textArea.value;
    if (taskText){
      self.addNewTask(taskText);
      self.textArea.value = '';
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
