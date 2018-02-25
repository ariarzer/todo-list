var taskList = document.getElementById("taskList");

function insertDivWithClass(insert, parent, myClass ){
  var newElem = document.createElement('div');
  newElem.innerHTML = insert;
  parent.insertBefore(newElem, parent.firstChild);
  newElem.classList.add(myClass);
}

const resetValueById = (id) => document.getElementById(id).value = '';

function addTask()
{
  var newTask = document.getElementById("newTask").value;

  insertDivWithClass(newTask, taskList, 'todo-list_task');

  resetValueById("newTask");
}
