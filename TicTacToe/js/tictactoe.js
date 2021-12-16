//this variable keeps track of whose turn it is
let activePlayer = "x";
//this stores an array of moves to determine win conditions
let selectedSquares = [];
//this function places an 'x' or 'o' in a square
function placeXorO(squareNumber){
    //this condition ensures a swaure hasn't been selected already
    //the '.some()' method is used to check each element of 'selectedSquares' array to see if it contains the square number clicked on
    if(!selectedSquares.some(element => element.includes(squareNumber))){
        //this variable retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
        //this condition checks whose turn it is
        if(activePlayer === 'x'){
            //places 'x.png' if active player is 'x'
            select.style.backgroundImage = 'url("./img/x.png")';
            //if active player not 'x', must be 'o'
        }else{
            //places 'o.png' if active player is 'o'
            select.style.backgroundImage = 'url("./img/o.png")';
        }
        //'squareNumber' and 'activePlayer' are concatonated and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions
        checkWinConditions();
        if(activePlayer === 'x'){
            //if active palyer is 'x' change to 'o'
            activePlayer = 'o';
            //if active player is anything else
        }else{
            //change player to 'x'
            activePlayer = 'x';
        }
        //play placement sound
        audio('./media/place.wav');
        //checks to see if it's the computer's turn
        if(activePlayer === 'o'){
            //disables click during computer's choice
            disableClick();
            //wait 1s for computer to place img then enables click
            setTimeout(function(){computersTurn();}, 1000)
        }
        //must return true for 'computersTurn()' to work
        return true;
    }
    //selects random square
    function computersTurn(){
        //needed for while loop
        let success = false;
        //stores random number 0-8
        let pickASquare;
        //allows while loop to keep choosing if square is already selected
        while(!success){
            //random number 0-8 selected
            pickASquare = String(Math.floor(Math.random()*9));
            //if random number evaluates to true, the square hasn't been selected yet
            if(placeXorO(pickASquare)){
                //call function
                placeXorO(pickASquare);
                //ends the while loop
                success = true;
            };
        }
    }
    
}
//parse the 'selectedSquares' array to search for win conditions
//if win condition is met call 'drawWinLine'
function checkWinConditions(){
    //x 0,1,2 win
    if(arrayIncludes('0x','1x','2x')){drawWinLine(50,100,558,100)}
    //x 3,4,5 win
    else if(arrayIncludes('3x','4x','5x')){drawWinLine(50,304,558,304)}
    //x 6,7,8 win
    else if(arrayIncludes('6x','7x','8x')){drawWinLine(50,508,558,508)}
    //x 0,3,6 win
    else if(arrayIncludes('0x','3x','6x')){drawWinLine(100,50,100,558)}
    //x 1,4,7 win
    else if(arrayIncludes('1x','4x','7x')){drawWinLine(304,50,304,558)}
    //x 2,5,8 win
    else if(arrayIncludes('2x','5x','8x')){drawWinLine(508,50,508,558)}
    //x 6,4,2 win
    else if(arrayIncludes('6x','4x','2x')){drawWinLine(100,508,510,90)}
    //x 0,4,8 win
    else if(arrayIncludes('0x','4x','8x')){drawWinLine(100,100,520,520)}
    //o 0,1,2 win
    else if(arrayIncludes('0o','1o','2o')){drawWinLine(50,100,558,100)}
    //o 3,4,5 win
    else if(arrayIncludes('3o','4o','5o')){drawWinLine(50,304,558,304)}
    //o 6,7,8 win
    else if(arrayIncludes('6o','7o','8o')){drawWinLine(50,508,558,508)}
    //o 0,3,6 win
    else if(arrayIncludes('0o','3o','6o')){drawWinLine(100,50,100,558)}
    //o 1,4,7 win
    else if(arrayIncludes('1o','4o','7o')){drawWinLine(304,50,304,558)}
    //o 2,5,8 win
    else if(arrayIncludes('2o','5o','8o')){drawWinLine(508,50,508,558)}
    //o 6,4,2 win
    else if(arrayIncludes('6o','4o','2o')){drawWinLine(100,508,510,90)}
    //o 0,4,8 win
    else if(arrayIncludes('0o','4o','8o')){drawWinLine(100,100,520,520)}
    //check for tie if none of the above conditions are met and 9 squares are selected
    else if(selectedSquares.length >= 9){
        //play tie sound
        audio('./media/tie.wav');
        //sets .3s timer before 'resetGame' is called
        setTimeout(function(){resetGame();},1000);
    }
    //checks if array includes 3 strings. used to check for each win condition
    function arrayIncludes(squareA,squareB,squareC){
        //these variables will check if there are 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //return true if all 3 variables are in array and drawWinLine is executed
        if(a === true && b === true && c === true){return true}
    }
}
//makes body element temp unclickable
function disableClick(){
    //makes body unclickable
    body.style.pointerEvents = 'none';
    //makes clickable again after 1s
    setTimeout(function(){body.style.pointerEvents = 'auto';},1000);
}
//takes a string parameter of path set earlier for placement sound
function audio(audioURL){
    //create new audio obj and pass the path as parameter
    let audio = new Audio(audioURL);
    //'play' method plays the audio sound
    audio.play();
}
//use html canvas to draw lines
function drawWinLine(coordX1,coordY1,coordX2,coordY2){
    //access html canvas element
    const canvas = document.getElementById('win-lines');
    //gives access to methods and props to use on canvas
    const c = canvas.getContext('2d');
    //indicates the start of a line's x-axis
    let x1 = coordX1,
        //start of line's y-axis
        y1 = coordY1,
        //end of line's x-axis
        x2 = coordX2,
        //end of line's y-axis
        y2 = coordY2,
        //stores temp x-axis data we update in animation loop
        x = x1,
        //stores temp y-axis data we update in animation loop
        y = y1;
    //interacts with canvas
    function animateLineDrawing(){
        //creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //method clears content from last loop iteration
        c.clearRect(0,0,608,608);
        //method starts a new path
        c.beginPath();
        //method moves to starting point for line
        c.moveTo(x1,y1);
        //method indicates end of line
        c.lineTo(x,y);
        //sets width of line
        c.lineWidth = 10;
        //sets color of line
        c.strokeStyle = 'rgba(255,0,0,0.8)';
        //method draws line
        c.stroke();
        //checks if endpoint is reached
        if(x1 <= x2 && y1 <= y2){
            //adds 10 to prev end x point
            if(x < x2){x += 10;}
            //adds 10 to prev end y point
            if(y < y2){y += 10;}
            //cancel animation loop if endpoints reached
            if(x >= x2 && y >= y2){cancelAnimationFrame(animationLoop);}
        }
        //necessary for 6,4,2 win
        if(x1 <= x2 && y1 >= y2){
            if(x < x2){x += 10;}
            if(y > y2){y -= 10;}
            if(x >= x2 && y <= y2){cancelAnimationFrame(animationLoop);}
        }
    }
    //clear canvas after win line is drawn
    function clear(){
        //start animation loop
        const animationLoop = requestAnimationFrame(clear);
        //clear canvas
        c.clearRect(0,0,608,608);
        //stops animation loop
        cancelAnimationFrame(animationLoop);
    }
    //disables clicking while win sound is playing
    disableClick();
    //play win sound
    audio('./media/winGame.wav');
    //calls main animation loop
    animateLineDrawing();
    //waits 1s, clears canvas, resets game, enables clicking
    setTimeout(function(){clear(); resetGame();},1000);
}
//reset game in even of tie or win
function resetGame(){
    //iterate through each HTML square element
    for(let i = 0; i < 9; i++){
        //get HTML element of i
        let square = document.getElementById(String(i));
        //remove element's background img
        square.style.backgroundImage = '';
    }
    //resets array so it's empty when starting over
    selectedSquares = [];
}