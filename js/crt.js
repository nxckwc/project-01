function barrelCheck(ele,wich)
{
	console.log("for "+ document.getElementById(ele).id + " the filter " + wich.id + " is now " + wich.checked)
	if (wich.checked){document.getElementById(ele).style.filter = "url(#SphereMapTest) url(#contrast) url(#brightness) url(#colorfill)";}
	else {document.getElementById(ele).style.filter = "url(#contrast) url(#brightness) url(#colorfill)";}
}

function getRndInteger(min, max)
{//Shamelesly from https://www.w3schools.com/js/tryit.asp?filename=tryjs_random_function2
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var moveSlider = function(slider, direction) {
	var value = slider.value;
	var circle = document.getElementById("despMap");
	circle.setAttributeNS(null, "scale", value);
}
var moveSMT = function(slider, direction) {
	var value = slider.value;
	var circle = document.getElementById("SphereMapTest");
	circle.setAttributeNS(null, direction, value);
}
var moveRoot = function(slider, direction) {
	var value = slider.value;
	var circle = document.getElementById("svg-root");
	circle.setAttributeNS(null, direction, value);
}


