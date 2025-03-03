const display = document.querySelector(".screen");
display.value = "";
function appendDisplay(input){
    display.value += input;
    console.log(input);
    console.log(display.value);
}

function clearscreen(){
    display.value = "";
}

function evaluate(){
    try{
        display.value = eval(display.value);
        console.log(display.value);
    }
    catch(e){
        display.value = "ERROR";
    }
}