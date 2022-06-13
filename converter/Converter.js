let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let h3 = document.getElementById('h3');

function conversion1(input1, input2, value1, value2) {
    str = "";
    if (value1 == 'Celsius' && value2 == 'Fahrenheit') {
        let a = (input1 * (9 / 5)) + 32;
        h3.innerHTML = `Formula: (${input1} ℃ * 9 / 5) + 32 = ${a.toFixed(2)} °F`;
        input2.value = a.toFixed(2);
    }
    else if (value1 == 'Fahrenheit' && value2 == 'Celsius') {
        let a = (input1 - 32) * 5 / 9;
        h3.innerHTML = `Formula: (${input1} °F -32) * 5 / 9= ${a.toFixed(2)} °C`;
        input2.value = a.toFixed(2);
    }
    else {
        h3.innerHTML = "";
        input2.value = input1;
    }
}

function conversion2(input1, input2, value1, value2) {
    if (value1 == 'Celsius' && value2 == 'Fahrenheit') {
        let a = (input1 - 32) * 5 / 9;
        h3.innerHTML = `Formula: (${input1} °F -32) * 5 / 9= ${a.toFixed(2)} °C`;
        input2.value = a.toFixed(2);
    }
    else if (value1 == 'Fahrenheit' && value2 == 'Celsius') {
        let a = (input1 * (9 / 5)) + 32;
        h3.innerHTML = `Formula: (${input1} ℃ * 9 / 5) + 32 = ${a.toFixed(2)} °F`;
        input2.value = a.toFixed(2);
    }
    else {
        h3.innerHTML = "";
        input2.value = input1;
    }
}

input1.addEventListener('change', () => {
    conversion1(input1.value, input2, value1.value, value2.value);
});

value1.addEventListener('change', () => {
    conversion1(input1.value, input2, value1.value, value2.value);
});

input2.addEventListener('change', () => {
    conversion2(input2.value, input1, value1.value, value2.value);
});

value2.addEventListener('change', () => {
    conversion2(input2.value, input1, value1.value, value2.value);
});
