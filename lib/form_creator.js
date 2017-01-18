$(document).ready(function(){

  $("#add-responsibility").click(function(e){

    event.preventDefault()

    var items_div = "<div>"
    + "<input type='text' name='method-input' >"
    + "<input type='text' name='collaborators'>"
    + "<input type='button' value='delete' id='delete' />"
    + "</div>";


    $('#items').append(items_div);
    $('#items').remove(items_div);

  });

  $('body').on('click',"#delete", function (e){
    $(this).parent('div').remove();
  });

  $("#add-class").click(function (e){

      event.preventDefault()

  var class_div = '<div id="class"> <input type="text" name="class-input" id="class-cell"></div>'

  $("#class-wrapper").append(class_div).remove(class_div)

  });

});
