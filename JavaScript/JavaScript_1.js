//create global variable
var choice;

//create functions to identify which button was clicked
function button1(){
    choice = "Futurama";
}

function button2(){
    choice = "Solar Opposites";
}

function button3(){
    choice = "Inside Job";
}

function button4(){
    choice = "Rick and Morty";
}

//use switch statement to create a message that will display on the page based on the button clicked
function show_fn(){
    let display;
    let conc = " is a great show";
    switch(choice){
        case "Futurama":
            display = choice + conc;break;
        case "Solar Opposites":
            display = choice + conc;break;
        case "Inside Job":
            display = choice + conc;break;
        case "Rick and Morty":
            display = choice + conc;break;
    }
    document.getElementById("print").innerHTML = display;
}

//display text on the page by using 'document.getElementsByClassName'
function gebcn_fn(){
    document.getElementsByClassName("someText")[0].innerHTML = "This is fun";
}