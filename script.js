let resultInput = document.getElementById("result");
function calculators(event){
    console.log(event.target.value)
    resultInput.value += event.target.value;
}

function equal(){
    resultInput.value = eval(resultInput.value );
}
function reset(){
    resultInput.value = ' ';
}