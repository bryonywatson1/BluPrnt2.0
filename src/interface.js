

$( document ).ready(function() {
  var sqDiagram = new SqDiagram();

  $('#class-wrapper').on('keyup', function (event) {
  event.preventDefault();
  $('#diagram').html('')
  var name = updateDiagram();
  console.log(1);
  sqDiagram.drawSomething(name);
})




});
