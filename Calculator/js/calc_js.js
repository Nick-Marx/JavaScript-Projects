//obj to keep track of values
const calculator = {
    //display '0'
    display_value: '0',
    //holds the first operand, default 'null'
    first_operand: null,
    //checks if the second operand was input
    wait_second_operand: false,
    //hold operator, default 'null'
    operator: null,
};
//modifies values on button click
function input_digit(digit){
    const{display_value,wait_second_operand} = calculator;
    //check if 'wait_sec_op is true and set 'display_val' to button clicked
    if(wait_second_operand === true){
        calculator.display_value = digit;
        calculator.wait_second_operand = false;
    }else{
        //overwrite 'display_val' if '0' otherwise appends onto it
        calculator.display_value = display_value === '0' ? digit : display_value + digit;
    }
}
//decimal point handler
function input_decimal(dot){
    //prevents accidental decimal point from causing bugs
    if(calculator.wait_second_operand === true)return;
    if(!calculator.display_value.includes(dot)){
        //add decimal point if 'display_val' doesnt contain decimal point
        calculator.display_value += dot;
    }
}
//operator handler
function handle_operator(next_operator){
    const {first_operand, display_value,operator} = calculator;
    //on operator button press change display and store in 'calc.first_op' if it doesnt exist
    const value_of_input = parseFloat(display_value);
    //check operator exists and 'wait_sec_op' is 'true' then updates operator and exits fn
    if(operator && calculator.wait_second_operand){
        calculator.operator = next_operator;
        return;
    }
    if(first_operand == null){
        calculator.first_operand = value_of_input;
    //checks if operator exists
    }else if(operator){
        const value_now = first_operand || 0;
        //if operator exists, check operator property in 'perform_calc' obj and call matching fn
        let result = perform_calculation[operator](value_now, value_of_input);
        //add a fixed amount of nums after decimal
        result = Number(result).toFixed(9);
        //remove trailing '0's
        result = (result * 1).toString();
        calculator.display_value = parseFloat(result);
        calculator.first_operand = parseFloat(result);
    }
    calculator.wait_second_operand = true;
    calculator.operator = next_operator;
}
const perform_calculation = {
    '/': (first_operand,second_operand) => first_operand / second_operand,
    '*': (first_operand,second_operand) => first_operand * second_operand,
    '+': (first_operand,second_operand) => first_operand + second_operand,
    '-': (first_operand,second_operand) => first_operand - second_operand,
    '=': (first_operand,second_operand) => second_operand
};
function calculator_reset(){
    calculator.display_value = '0';
    calculator.first_operand = null;
    calculator.wait_second_operand = false;
    calculator.operator = null;
}
//updates display with contents of 'display_val'
function update_display(){
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.display_value;
}
update_display();
//monitor button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) =>{
    //target variable is an obj that reps the element clicked
    const{target} = event;
    //if element clicked is not button, exit fn
    if(!target.matches('button')){
        return;
    }
    if(target.classList.contains('operator')){
        handle_operator(target.value);
        update_display();
        return;
    }
    if(target.classList.contains('decimal')){
        input_decimal(target.value);
        update_display();
        return;
    }
    //AC clears nums from calc
    if(target.classList.contains('all-clear')){
        calculator_reset();
        update_display();
        return;
    }
    input_digit(target.value);
    update_display();
})