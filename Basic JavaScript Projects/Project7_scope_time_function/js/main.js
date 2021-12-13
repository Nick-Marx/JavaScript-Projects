//create global variable
var x = 5;

//create function with local variable
function fn_1(){
    var y = 7;
    return x + y;
}

//create function that causes an error in console
function fn_2(){
    console.log(x + y);
}

//call bugged function
fn_2();

//write a function that uses the date().gethours() method to return the time
function date_fn(){
    var time = new Date().getHours();
    if (time < 13){
        return time + " am";
    }
    else{
        return time - 12 + " pm";
    }
}

//display the result of date_fn() on the page
function display_date(){
    document.getElementById("use_date").innerHTML = date_fn();
}

//displays a greeting on the page based on result from date_fn()
function display_greeting(){
    if (date_fn().includes("am")){
        document.getElementById("greeting").innerHTML = "Good morning";
    }
    else{
        document.getElementById("greeting").innerHTML = "Good afternoon";
    }
}

//displays a comment depending on whether the user input left handed or right handed
function left_right(){
    var lrValue = document.getElementById("leftRight").value.toLowerCase();
    var comment;
    if (lrValue == "left"){
        comment = "Two wrongs don't make a right, but three lefts do";
    }
    else if (lrValue == "right"){
        comment = "Alright! Give me a high-five";
    }
    else{
        comment = "Please input 'left' or 'right'";
    }
    document.getElementById("snarky").innerHTML = comment;
}

//displays a message based on time
function time_fn(){
    var time = new Date().getHours();
    var reply;
    if(time < 12 == time > 0){
        reply = "It is morning time!";
    }
    else if(time >= 12 == time < 18){
        reply = "It is afternoon.";
    }
    else{
        reply = "It is evening time.";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}
