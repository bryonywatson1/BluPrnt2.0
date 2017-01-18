(function(exports) {

  var elements = document.getElementsByClassName("method-class");
  var methods = '';

function getMethods() {
  for(var i=0; i<elements.length; i++) {
    methods += elements[i].value;
  }
}




  exports.getMethods = getMethods;
})(this)

(function(exports) {

  var elements = document.getElementsByClassName("collaborator-class");
  var collaborators = '';

function getCollaborators() {
  for(var i=0; i<elements.length; i++) {
    collaborators += elements[i].value;
  }
}




  exports.getCollaborators = getCollaborators;
})(this)

(function(exports) {

  var elements = document.getElementsByClassName("class-class");
  var classes = '';

function getClasses() {
  for(var i=0; i<elements.length; i++) {
    classes += elements[i].value;
  }
}




  exports.getClasses = getClasses;
})(this)
