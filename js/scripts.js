$(document).ready(function() {
  $("#newToDo").submit(function(event) {
    event.preventDefault();
    var taskInput = $("input#task").val();
    var newTask = {toDo: taskInput};

    $('ul#tasks').append("<li><span class='task'>" + newTask.toDo + " " + "</span></li>");

    $("input#task").val("");

  $(".task").last().click(function() {
    $(this).css({"text-decoration":"line-through"});
  });

  $(".task").last().dblclick(function() {
    $(this).remove();
  });
});
});
