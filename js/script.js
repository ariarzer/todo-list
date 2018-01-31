function addTask()
{
    var newTask = document.getElementById("newTask").value;
	var elemTasts = document.createElement('div');
    elemTasts.innerHTML = newTask;
    taskList.appendChild(elemTasts);
}
