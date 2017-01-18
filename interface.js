

$( document ).ready(function() {
  var sqDiagram = new SqDiagram();

  $('#select-name').on('input', function (event) {
  event.preventDefault();
  var name = $('#current-name').val();
  sqDiagram.drawSomething(name);
})

});
