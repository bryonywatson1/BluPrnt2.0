$( document ).ready(function() {

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
