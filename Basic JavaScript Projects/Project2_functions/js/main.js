//create function that displays green text when the button is clicked on the page
function Green_Text(){
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("green_button").innerHTML = result;
}

//create a function that causes the button on the page to display a concatenated string when the sentece below it is clicked.
function Concatenate(){
    var str = " I think,";
    str += " therefore I am.";
    document.getElementById("green_button").innerHTML = str;
}