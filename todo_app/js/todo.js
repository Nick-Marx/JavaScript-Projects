//this fn gets task from input
function get_todos(){
    //array of input tasks
    var todos = new Array;
    //pulls task saved in browser mem
    var todos_str = localStorage.getItem('todo');
    //if input !null, make task a JS obj
    if(todos_str !== null){
        todos = JSON.parse(todos_str);
    }
    return todos;
}
//fn adds input task to get_todos fn array
function add(){
    //make var from input task
    var task = document.getElementById('task').value;
    var todos = get_todos();
    //adds new task to end of array
    todos.push(task);
    //converts task input to JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();
    return false;
}
//fn keeps task displayed on page
function show(){
    //sets task retrieved as variable
    var todos = get_todos();
    //sets up each task as <ul>
    var html = '<ul>';
    //display appended list after todo item removed
    var buttons = document.getElementsByClassName('remove');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', remove);
    };
    //appends task to list in order of input
    for(let i = 0; i < todos.length; i++){
        //adds task to list and creates 'x' button
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    //shows list on page
    document.getElementById('todos').innerHTML = html;
}
//shows input task when button is clicked
document.getElementById('add').addEventListener('click', add);
//keeps task displayed on page
show();
//fn removes a todo item from array
function remove(){
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    //refresh display
    show();
    return false;
}