function addTask()
{
    var newTask = document.getElementById("newTask").value;
    var elemTasts = document.createElement('div');
    elemTasts.innerHTML = newTask;
    var taskList = document.getElementById("taskList");
    taskList.insertBefore(elemTasts, taskList.firstChild);
}
