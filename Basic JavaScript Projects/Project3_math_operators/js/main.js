//function that displays result of 5+5
function Simple_Addition(){
    var add = 5+5;
    document.getElementById("math").innerHTML = "5 + 5 = " + add;
}

//function that displays result of 25-5
function Simple_Subtraction(){
    var subtract = 25-5;
    document.getElementById("math2").innerHTML = "25 - 5 = " + subtract;
}

////function that displays result of 10*15
function Simple_Multiplication(){
    var multiply = 10*15;
    document.getElementById("math3").innerHTML = "10 * 15 = " + multiply;
}

//function that displays result of 100/4
function Simple_Division(){
    var divide = 100/4;
    document.getElementById("math4").innerHTML = "100 / 4 = " + divide;
}

//function that displays result of ((200+18)*2)/4
function Simple_Math(){
    var math = ((200+18)*2)/4;
    document.getElementById("math5").innerHTML = "( ( 200 + 18 ) *2 ) /4 = " + math;
}

//function that displays result of 16%7
function Simple_Remainder(){
    var modulus = 16%7;
    document.getElementById("math6").innerHTML = "The remainder of\ 16 / 7\ is\ " + modulus;
}
//function that displays -19
function Simple_Negative(){
    var negative = -19;
    document.getElementById("math7").innerHTML = "The negative of\ 19\ is\ " + negative;
}

//function that displays result of 42++ and 42--
function Increment_Decrement(){
    var x = 42;
    x++;
    document.getElementById("math8").innerHTML = "42\ incremented by\ 1\ is\ " + x + ".";
    x--;
    x--;
    document.getElementById("math8").innerHTML += " 42\ decremented by\ 1\ is\ " + x + ".";
}

//function that displays a random whole number from 0 thru 100
function Random_Number(){
    var rand = Math.random() * 100;
    document.getElementById("math9").innerHTML = Math.floor(rand);
}

//Math is a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object
//Math.ceil(x) returns the smallest integer greater than or equal to x
function Math_Object(){
    var ceil = Math.ceil(3.14159);
    document.getElementById("math10").innerHTML = "The ceiling of\ 3.14159\ is\ " + ceil + ".";
}
