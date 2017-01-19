
(function(exports) {
  function updateDiagram() {

    var stringy = "";
    var i;
    for( i=0; i < getClasses().length ; i++) {
        var row = getClasses()[i] + '->' + getCollaborators()[i] + ':' + getResponsibilities()[i];
    }


  return  stringy;

};

  exports.updateDiagram = updateDiagram;
})(this);
