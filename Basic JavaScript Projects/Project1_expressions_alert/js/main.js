window.alert("Hello, world!");//display popup with hello world

document.write("Hello, world!");//write hello world to the page

var A = "This is a string";//create a variable and assign text to it

document.write(A);//write text from variable A to the page

window.alert(A);//display popup that contains text from variable A

var B = "\"Nevermore.\" Quoth the raven.";//assign text to variable usingescape characters

document.write("Hello"+", world!");//write text to page that uses concatonation

var shapeOne = "circle", shapeTwo = "triangle", shapeThree = "square";//create multiple variables at once

document.write(shapeOne);//write one of the variable to the page

var shapeOne = shapeOne.fontcolor("blue"), shapeTwo = shapeTwo.fontcolor("red"), shapeThree = shapeThree.fontcolor("green");//change font color of these variables

var shapes = shapeOne + " " + shapeTwo + " " + shapeThree;//create an expression

document.write(shapes);//write shapes variable to page