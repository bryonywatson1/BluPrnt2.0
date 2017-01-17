$( document ).ready(function() {
  var diagram = new Diagram();
  displayNewShape('London')



  function drawThis(){
    return diagram.drawSomething();
  }


  $('#select-name').submit(function (event) {
    event.preventDefault();
    var name = $('#current-name').val();
    displayNewShape(name);
  })


  function displayNewShape(name) {
    var output = drawThis() + name + ";"
      $('.mermaid').text(output);
  }

});
