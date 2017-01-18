$( document ).ready(function() {
  var diagram = new Diagram();



  function drawThis(name){
    var diagram = Diagram.parse(name.innerText)
    diagram.drawSVG('diagram', {theme:'simple'})
  }




  $('#select-name').submit(function (event) {
    event.preventDefault();
    var name = 'participant' + $('#current-name').val();
    drawThis(name);
  })


  function displayNewShape(name) {
    var output = drawThis() + name + ";"
      $('.insert').text(output);
  }

});
