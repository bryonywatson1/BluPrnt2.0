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



function getCollaborators() {
  var collaborator_elements = document.getElementsByClassName("collaborator-class");
  var collaborators = [];
  for(var i=0; i<collaborator_elements.length; i++) {
    collaborators.push(collaborator_elements[i].value);
  }
  return collaborators
}


function getResponsibilities() {
  var responsibility_elements = document.getElementsByClassName("method-class");
  var responsibilities = [];
  for(var i=0; i<responsibility_elements.length; i++) {
    responsibilities.push(responsibility_elements[i].value);
  }
  return responsibilities
}


function getClasses() {
  var class_elements = document.getElementsByClassName("class-class");
  var classes = [];
  for(var i=0; i<class_elements.length; i++) {
    classes.push(class_elements[i].value);
  }
  return classes
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
