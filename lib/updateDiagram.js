
(function(exports) {
  function updateDiagram() {

    var stringy = ""

    for(var i=0; i < getClasses().length; i++) {
        var row = getClasses()[i] + '->' + getCollaborators()[i] + ':' + getResponsibilities()[i] + "\n"
        console.log(row)
        stringy += row
    }


  return  stringy;
}

  exports.updateDiagram = updateDiagram;
})(this)
