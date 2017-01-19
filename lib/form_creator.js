$(document).ready(function(){

  $("#add-responsibility").click(function(e){


    var items_div =
    "<br/>"
    + "<label for='class-input'>Class: </label>"
    + "<span id='class'> <input type='text' name='class-input' id='class-cell' class='class-class'></span>"
    + "<span id='items'>"
    + "<label for='method-input'>Responsibility</label>"
    + "<input type='text' name='method-input' class='method-class'>"
    + "<label for='collaborators'>Collaborator</label>"
    + "<input type='text' name='collaborators' class='collaborator-class'>"
    + "<input type='button' value='delete' id='delete' />"
    + "</span>";


    $('#class-wrapper').append(items_div);
    $('#class-wrapper').remove(items_div);

  });

  $('body').on('click',"#delete", function (e){
    $(this).parent('div').remove();
  });

  $("#add-class").click(function (e){

      event.preventDefault()

  var class_div = '<label for="class-input">Class: </label>' + '<div id="class"> <input type="text" name="class-input" id="class-cell"></div>'

  $("#class-wrapper").append(class_div).remove(class_div)

  });

});
