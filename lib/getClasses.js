
(function(exports) {

function getClasses() {
  var class_elements = document.getElementsByClassName("class-class");
  var classes = [];
  for(var i=0; i<class_elements.length; i++) {
    classes.push(class_elements[i].value);
  }
  return classes
}


  exports.getClasses = getClasses;
})(this)
