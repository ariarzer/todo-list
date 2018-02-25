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
}

function createTaskBlock(newTask) {
  return create('div', {class: 'todo-list_task'},
                create('input', Object.assign({type: 'checkbox', id: counter.toString()}, newTask.isDone === true ? { checked: ''} : {})),
                create('label', {'for': counter.toString().padStart(3, '0')}, newTask.text));
}

function addTask()
{
  var textFieldValue = document.getElementById("newTask").value;

  if(textFieldValue){
    var newTask = new Task(textFieldValue);

    taskList.insertBefore(createTaskBlock(newTask), taskList.firstChild);

    resetValueById("newTask");

    counter++;
  }

}
