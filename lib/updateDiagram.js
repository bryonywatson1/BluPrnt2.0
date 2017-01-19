
(function(exports) {
  function updateDiagram() {

<<<<<<< HEAD
    var stringy = "";
    var i;
    for( i=0; i < getClasses().length ; i++) {
        var row = getClasses()[i] + '->' + getCollaborators()[i] + ':' + getResponsibilities()[i];
=======
    var stringy = ""

    for(var i=0; i < getClasses().length; i++) {
        var row = getClasses()[i] + '->' + getCollaborators()[i] + ':' + getResponsibilities()[i]
>>>>>>> 3a56a0fce49e64b28b7515f554184ed2db5628a0
        console.log(row)
        stringy += row
        var new_line = '<br />'
        var html_object = $(new_line)
        $('#diagram').appendTo(html_object)
    }


  return  stringy;

}

  exports.updateDiagram = updateDiagram;
})(this)
