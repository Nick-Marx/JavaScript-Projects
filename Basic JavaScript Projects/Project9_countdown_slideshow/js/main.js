//displays a countdown timer baseed on the starting number from the input field then displays an alert box once it reaches 0
function countdown(){
    var seconds = document.getElementById("seconds").value;

    function tick(){
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if(seconds == -1){
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

//slideshow section\\

//set slideIndex variable
var slideIndex = 1;
showSlides(slideIndex);

//next/prev controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

//thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex = n);
}

//controls which dot is active below the slides based on which slide is showing
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length){slideIndex = 1}
    if(n < 1){slideIndex = slides.length}
    for(i = 0; i < dots.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}