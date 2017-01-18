function SqDiagram() {
}

SqDiagram.prototype.drawSomething = function(input) {
  var diagram = Diagram.parse(input)
  diagram.drawSVG('diagram',{theme:'simple'});
}
