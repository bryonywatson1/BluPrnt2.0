

$( document ).ready(function() {
  var sqDiagram = new SqDiagram();

  $('.class-class, .method-class, .collaborator-class').on('input', function (event) {
  $('#diagram').html('') /////////////////////////////////
  var name = updateDiagram();
  sqDiagram.drawSomething(name);
})




});
