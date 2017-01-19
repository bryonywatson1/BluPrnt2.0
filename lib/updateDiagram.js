
(function(exports) {
  function updateDiagram() {
  return  getClasses()[0] + '->' + getCollaborators()[0] + ':' + getResponsibilities()[0];
}

  exports.updateDiagram = updateDiagram;
})(this)
