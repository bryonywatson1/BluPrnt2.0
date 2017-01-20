

$( document ).ready(function() {
  var sqDiagram = new SqDiagram();

  $('#class-wrapper').on('keyup', function (event) {
  event.preventDefault();
  $('#diagram').html('')
  var name = updateDiagram();
  sqDiagram.drawSomething(name);
})

$('body').on('click','#delete', function (e){
  var sqDiagram = new SqDiagram();
  $(this).parent('#items').remove();
  $('#diagram').html('')
  var name = updateDiagram();
  sqDiagram.drawSomething(name);
});


});
