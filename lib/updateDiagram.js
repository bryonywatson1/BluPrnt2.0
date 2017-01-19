
(function(exports) {
  function updateDiagram() {

    var stringy = ""

    for(var i=0; i < getClasses().length; i++) {
        var row = getClasses()[i] + '->' + getCollaborators()[i] + ':' + getResponsibilities()[i]
        stringy += row
    }


  return  stringy+"\n";

  // return "a-> b:c"
  // return "a-> b:c\na->c: d"

}

  exports.updateDiagram = updateDiagram;
})(this)
