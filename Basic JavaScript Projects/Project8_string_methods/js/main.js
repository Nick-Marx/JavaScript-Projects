//display multiple concatonated strings on the page
function conc_fn(){
    var p1 = "John ";
    var p2 = "Jacob ";
    var p3 = "Jingleheimer";
    var p4 = "-Smitz";
    var myNameToo = p1.concat(p2, p3, p4);
    document.getElementById("conc").innerHTML = myNameToo;
}

//displays a sliced portion of a string
function slice_fn(){
    var whole = "His name is my name too";
    var piece = whole.slice(12, 24);
    document.getElementById("slice").innerHTML = piece;
}

//displays a number as a string
function numToString_fn(){
    var num = 14;
    document.getElementById("num_to_string").innerHTML = num.toString();
}

//displays a number up to a designated length
function numToPrec_fn(){
    var num = 3.14159;
    document.getElementById("num_to_prec").innerHTML = num.toPrecision(3);
}