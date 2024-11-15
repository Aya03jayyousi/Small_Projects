const display = document.getElementById('display');

function appendToDisplay(input)
{
     display.value += input;
}

function clearDispaly(){
 display.value = ' ';
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculatePercentage(){
    if (currentInput !== ' '){
        currentInput = (parseFloat(currentInput) / 100).toString();
        display.value = currentInput;
    }

}
