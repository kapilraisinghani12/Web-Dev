
const textBox = document.getElementById("textBox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function farenheitToCelsius(e){
    return 5*(e - 32)/9;
    
}
function celsiusToFarenheit(e){
    return (9*e/5) + 32;
}

function convert(){
    if(toCelsius.checked){
        temp = Number(textBox.value);
        let ans = farenheitToCelsius(temp);
        result.textContent = `${ans.toFixed(2)} ℃`;
    }
    else if(toFarenheit.checked){
        temp = Number(textBox.value);
        let ans = celsiusToFarenheit(temp);
        result.textContent = `${ans.toFixed(2)} ℉`;
    }
    else{
        result.textContent = `Select a unit!`;
    }
}
