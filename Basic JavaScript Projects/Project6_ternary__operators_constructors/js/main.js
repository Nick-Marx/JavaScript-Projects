//use ternary boolean comparison to output whether someone is too short to ride or not based on the number in the input field
function Ride_Function(){
    var Height, canRide;
    Height = document.getElementById("height").value;
    canRide = (Height < 52) ? "You are too short": "You are tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride.";
}

//create  a vehicle class with make, model, year, and color attributes
function Vehicle(make, model, year, color){
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

//create several objects using the above Vehicle class
var jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//display a string on the page about erik's vehicle object
function myFunction(){
    document.getElementById("keywords_and_constructors").innerHTML = "Erik drives a " + erik.vehicle_color + "-colored " + erik.vehicle_model + " manufactured in " + erik.vehicle_year;
}

//create another vehicle object
var mike = new Vehicle("Toyota", "Prius", 2010, "Gold");

//display another string about the newly created mike's vehicle object
function myOtherFunction(){
    document.getElementById("new_and_this").innerHTML = "Mike drives a " + mike.vehicle_color + "-colored " + mike.vehicle_model + " manufactured in " + mike.vehicle_year;
}

//create a nested function and display output from it to the page
function myNestedFunction(){
    document.getElementById("nested_function").innerHTML = Count();
    function Count(){
        var startingPoint = 9;
        return startingPoint += 1;
    }
}