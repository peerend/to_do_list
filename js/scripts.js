$(document).ready(function() {
  $("#newToDo").submit(function(event) {
    event.preventDefault();
    var taskInput = $("input#task").val();
    var newTask = {toDo: taskInput};

    $('ul#tasks').append("<li><span class='task'>" + newTask.toDo + " " + '<input type="checkbox">' + "</span></li>");

    $("input#task").val("");

  });
});
