//while loop that counts to 10 and displays on page
function call_loop(){
    var digit = "";
    var x = 1;
    while (x < 11){
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = digit;
}

//loop will print out each insrument from the list on the page
function for_loop(){
    let inst = ["lute", "xylophone", "bagpipe", "trumbone"];//use 'let' keyword in this function for the Let Keyword Assignment [Step: 217]
    let indiv = "";
    for(let i=0;i<inst.length;i++){
        indiv += inst[i] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = indiv;
}

//create an array and display the elements from it on the page
function array_fn(){
    var games = ["Super Mario", "Legend of Zelda", "Metroid"];
    document.getElementById("array").innerHTML = games[0] + ",\ " + games[1] + ",\ " + games[2];
}

//create a constant with properties and values
const pc = {cpu:"intel",graphics:"nvidia"};

//function that displays a string on the page using values from the above constant
function const_fn(){
    document.getElementById("constant").innerHTML = "Your pc contains an " + pc.cpu + " processor and a(n) " + pc.graphics + " graphics card";
}

//change and add values to the above constant and dispaly a message ont he page that uses the changes
function const2_fn(){
    pc.cpu = "amd";
    pc.graphics = "radeon";
    pc.mBoard = "MSI";
    document.getElementById("constant").innerHTML = "Your pc contains an " + pc.cpu + " processor, a " + pc.graphics + " graphics card, and an " + pc.mBoard + " motherboard";
}

//create object using 'let' keyword; include properties and a method; display to page
let box = {
    material: "cardboard",
    size: "large ",
    color: "brown ",
    describe: function(){
        return "Congratulations! You found a " + this.size + this.color + this.material + " box";
    }
};
document.getElementById("object").innerHTML = box.describe();