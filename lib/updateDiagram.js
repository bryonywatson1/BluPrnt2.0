
(function(exports) {
  function updateDiagram() {

    var stringy = ""

    for(var i=0; i < getClasses().length; i++) {
      var row = getClasses()[i] + '->' + getCollaborators()[i] + ':' + getResponsibilities()[i]
      stringy += row +'\n'
    }


    return  stringy;

  }

  exports.updateDiagram = updateDiagram;
})(this)
