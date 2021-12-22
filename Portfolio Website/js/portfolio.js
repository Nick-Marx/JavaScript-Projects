//fn open and close contact form
function openForm(){
    document.getElementById("myForm").style.display = "block";
}
function closeForm(){
    document.getElementById("myForm").style.display = "none";
}
//fn displays first slideshow img on page load
var slideIndex = 1;
showSlides(slideIndex);
//prev & next control
function plusSlides(n){
    showSlides(slideIndex += n);
}
//dot control
function currentSlide(n){
    showSlides(slideIndex = n);
}
//
function showSlides(n){
    //stores slides in array
    var slides = document.getElementsByClassName("mySlides");
    //stores elements of 'dot' class in an array
    var dots = document.getElementsByClassName("dot");
    //slideshow wrap-around (next)
    if(n>slides.length){slideIndex = 1};
    //slideshow wrap-around (prev)
    if(n<1){slideIndex = slides.length};
    //disable slideshow imgs on page load
    for(let i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    //remove active styling from items in 'dots' array
    for(let i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    //display slideshow img
    slides[slideIndex - 1].style.display = "block";
    //adds active styling back to displayed img
    dots[slideIndex - 1].className += " active";
}
//close contact form when click outside
//add event listener to web page for 'clicks'
document.addEventListener("click", function(event){
    //close contact form if click anywhere but form
    if(event.target.matches(".cancel")|| !event.target.closest(".form-popup")&& !event.target.closest(".pop_up_button")&& !event.target.closest(".contact")){
        closeForm()
    }
}, false)