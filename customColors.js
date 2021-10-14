const structureCustomColor = document.body.children;

for (var i = 0; i < structureCustomColor.length; i++) {
 if(structureCustomColor[i].hasAttribute("color")){
 if(structureCustomColor[i].getAttribute("color").startsWith("#")||structureCustomColor[i].getAttribute("color").startsWith("rgb")){
  document.getElementsByTagName("custom-color")[i].style.color = structureCustomColor[i].getAttribute("color");
}}}
