
(function(exports) {


function getResponsibilities() {
  var responsibility_elements = document.getElementsByClassName("method-class");
      console.log(document.getElementsByClassName("method-class")[0].value)
  var responsibilities = [];
  for(var i=0; i<responsibility_elements.length; i++) {
    responsibilities.push(responsibility_elements[i].value);
  }
  return responsibilities
}

exports.getResponsibilities = getResponsibilities
})(this)
