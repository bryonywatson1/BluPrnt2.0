(function(exports) {



function getCollaborators() {
  var collaborator_elements = document.getElementsByClassName("collaborator-class");
  var collaborators = [];
  for(var i=0; i<collaborator_elements.length; i++) {
    collaborators.push(collaborator_elements[i].value);
  }
  return collaborators
}
exports.getCollaborators = getCollaborators
})(this)
