let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');

let passBox = document.getElementById('passBox')

let lowerCase = document.getElementById('lowercase');
let upperCase = document.getElementById('uppercase');
let number = document.getElementById('number');
let symbol = document.getElementById('symbol');

let genBtn = document.getElementById('genBtn');

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value
})

genBtn.addEventListener('click', () => {
    // console.log("clisk")
    passBox.value = generatePassword();
})

let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChar = "qwertyuiopasdfghjklzxcvbnm";
let num = '0123456789';
let sym = '~!@#$%^&*()?';

// function to generate password

function generatePassword() {
    let genPassword = "";

    let genPass = '';

    if (lowerCase.checked) {
        console.log("lower checked")
        genPass += lowerChar;
    }
    else {
        genPass += '';
    }
    if (upperCase.checked) {
        genPass += upperChar;
        console.log("upper cheked")
    }
    else {
        genPass += '';
    }
    if (number.checked) {
        genPass += num;
        console.log("num cheked")
    }
    else {
        genPass += '';
    }
    if (symbol.checked) {
        genPass += sym;
        console.log("sysm checked")
    } else {
        genPass += '';
    }

   

    let i = 1;
    while (i<=inputSlider.value) {
        genPassword += genPass.charAt(Math.floor(Math.random() * genPass.length));
        i++;
    }
    return genPassword;
}