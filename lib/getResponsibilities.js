
(function(exports) {


function getResponsibilities() {
  var responsibility_elements = document.getElementsByClassName("method-class");
  var responsibilities = [];
  for(var i=0; i<responsibility_elements.length; i++) {
    responsibilities.push(responsibility_elements[i].value);
  }
  return responsibilities
}

exports.getResponsibilities = getResponsibilities
})(this)
