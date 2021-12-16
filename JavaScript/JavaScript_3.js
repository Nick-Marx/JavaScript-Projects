//create function that displays alert box on page based on 'data-' in the html
function data_fn(food){
    let nom = food.getAttribute("data-food-type");
    alert("I love " + nom + "!");
}