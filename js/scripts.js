// var whereAndWhatToDo = function(base, task){
//   var list = {base: base, task: []};
//   console.log(list);
//   list.task.push(task);
//   return list;
// }
$(document).ready(function() {
  var list = {base: base, task: []};

  $("#baseToDo").submit(function(event) {

    event.preventDefault();
    list.base = $("input#base").val();
    console.log(list);
//    var location = whereAndWhatToDo(baseInput,"task");


    $('ul#categories').append("<li><span class='base'>" + list.base + " " + "</span></li>");
    $("input#base").val("");
        console.log(list.base);
        $(".base").last().click(function() {
          $(this).css({"text-decoration":"line-through"});
        });
        $(".base").last().dblclick(function() {
          $(this).remove();
        });
  });

  $("#newToDo").submit(function(event) {
    event.preventDefault();
    var taskInput = $("input#task").val();
    list.task.push(taskInput);
    console.log(list);
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
