
(function(exports) {
  function updateDiagram() {

    var stringy = "";
    var i;
    for( i=0; i < getClasses().length ; i++) {
        var row = getClasses()[i] + '->' + getCollaborators()[i] + ':' + getResponsibilities()[i];
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
