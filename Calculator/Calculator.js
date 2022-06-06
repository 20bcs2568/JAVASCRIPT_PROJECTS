let a = "";
let b = "";
let status_a = 0;
let status_b = 0;
let input = document.getElementById('input');
let input2 = document.getElementById('input2');
let clear = document.getElementById('number_AC');
let one = document.getElementById('number_1');
let two = document.getElementById('number_2');
let three = document.getElementById('number_3');
let four = document.getElementById('number_4');
let five = document.getElementById('number_5');
let six = document.getElementById('number_6');
let seven = document.getElementById('number_7');
let eight = document.getElementById('number_8');
let nine = document.getElementById('number_9');
let zero = document.getElementById('number_0');
let add = document.getElementById('number_add');
let multiply = document.getElementById('number_multiply');
let subtract = document.getElementById('number_subtract');
let divide = document.getElementById('number_divide');
let equal = document.getElementById('number_equal');
let point = document.getElementById('number_point');
let para = document.getElementById('para');
let backspace = document.getElementById('backspace');

clear.addEventListener('click', () => {
    input.value = "";
    input2.value = "AC";
    a = "";
    b = "";
});

add.addEventListener('click', () => {
    if (status_a == 0) {
        status_a = 1;
    }
    else if (status_a == 1 && status_b == 0) {
        para.innerHTML = "Please enter the values";
    }
    else if (status_a != 0 && status_b != 0) {
        let add;
        if (typeof (a) != "string") {
            add = a + parseFloat(b);
        }
        else {
            add = parseFloat(a) + parseFloat(b);
        }
        input.value = add;
        para.innerHTML = `Answer = ${add}`;
        status_a = 1;
        status_b = 0;
        a = add;
        b = "";
    }
    input2.value = "+";
});

divide.addEventListener('click', () => {
    if (status_a == 0) {
        status_a = 1;
    }
    else if (status_a == 1 && status_b == 0) {
        para.innerHTML = "Please enter the values";
    }
    else if (status_a != 0 && status_b != 0) {
        let add;
        if (typeof (a) != "string") {
            add = a / parseFloat(b);
        }
        else {
            add = parseFloat(a) / parseFloat(b);
        }
        input.value = add;
        para.innerHTML = `Answer = ${add}`;
        status_a = 1;
        status_b = 0;
        a = add;
        b = "";
    }
    input2.value = "/";
});

multiply.addEventListener('click', () => {
    if (status_a == 0) {
        status_a = 1;
    }
    else if (status_a == 1 && status_b == 0) {
        para.innerHTML = "Please enter the values";
    }
    else if (status_a != 0 && status_b != 0) {
        let add;
        if (typeof (a) != "string") {
            add = a * parseFloat(b);
        }
        else {
            add = parseFloat(a) * parseFloat(b);
        }
        input.value = add;
        para.innerHTML = `Answer = ${add}`;
        status_a = 1;
        status_b = 0;
        a = add;
        b = "";
    }
    input2.value = "*";
});

subtract.addEventListener('click', () => {
    if (status_a == 0) {
        status_a = 1;
    }
    else if (status_a == 1 && status_b == 0) {
        para.innerHTML = "Please enter the values";
    }
    else if (status_a != 0 && status_b != 0) {
        let add;
        if (typeof (a) != "string") {
            add = a - parseFloat(b);
        }
        else {
            add = parseFloat(a) - parseFloat(b);
        }
        input.value = add;
        para.innerHTML = `Answer = ${add}`;
        status_a = 1;
        status_b = 0;
        a = add;
        b = "";
    }
    input2.value = "-";
});


equal.addEventListener('click', () => {
    if (status_a == 0 || status_b == 0) {
        para.innerHTML = "Please enter the values";
    }
    else if (status_a != 0 && status_b != 0) {
        let operation;
        let sign = input2.value;
        if (sign == '+')
            operation = parseFloat(a) + parseFloat(b);
        else if (sign == '*')
            operation = parseFloat(a) * parseFloat(b);
        else if (sign == '/')
            operation = parseFloat(a) / parseFloat(b);
        else if (sign == '-')
            operation = parseFloat(a) - parseFloat(b);

        input.value = operation;
        input2.value = "=";
        para.innerHTML = `Answer = ${operation}`;
        status_a = 0;
        status_b = 0;
        a = "";
        b = "";
    }

});

one.addEventListener('click', () => {
    if (status_a == 0) {
        a += "1";
        input.value = a;
    }
    else {
        b += "1";
        input.value = b;
        status_b = 1;
    }
});

two.addEventListener('click', () => {
    if (status_a == 0) {
        a += "2";
        input.value = a;
    }
    else {
        b += "2";
        input.value = b;
        status_b = 1;
    }
});

three.addEventListener('click', () => {
    if (status_a == 0) {
        a += "3";
        input.value = a;
    }
    else {
        b += "3";
        input.value = b;
        status_b = 1;
    }
});

four.addEventListener('click', () => {
    if (status_a == 0) {
        a += "4";
        input.value = a;
    }
    else {
        b += "4";
        input.value = b;
        status_b = 1;
    }
});

five.addEventListener('click', () => {
    if (status_a == 0) {
        a += "5";
        input.value = a;
    }
    else {
        b += "5";
        input.value = b;
        status_b = 1;
    }
});


six.addEventListener('click', () => {
    if (status_a == 0) {
        a += "6";
        input.value = a;
    }
    else {
        b += "6";
        input.value = b;
        status_b = 1;
    }
});


seven.addEventListener('click', () => {
    if (status_a == 0) {
        a += "7";
        input.value = a;
    }
    else {
        b += "7";
        input.value = b;
        status_b = 1;
    }
});


eight.addEventListener('click', () => {
    if (status_a == 0) {
        a += "8";
        input.value = a;
    }
    else {
        b += "8";
        input.value = b;
        status_b = 1;
    }
});


nine.addEventListener('click', () => {
    if (status_a == 0) {
        a += "9";
        input.value = a;
    }
    else {
        b += "9";
        input.value = b;
        status_b = 1;
    }
});


zero.addEventListener('click', () => {
    if (status_a == 0) {
        a += "0";
        input.value = a;
    }
    else {
        b += "0";
        input.value = b;
        status_b = 1;
    }
});


point.addEventListener('click', () => {
    if (status_a == 0) {
        a += ".";
        input.value = a;
    }
    else {
        b += ".";
        input.value = b;
        status_b = 1;
    }
});


backspace.addEventListener('click', ()=>
{
    if(a == "" && b == "")
    {
        input2.value = "Please enter the value";
    }
    if(a != "" && b == "")
    {
        console.log('First one')
        a = a.slice(0, a.length-1);
        input.value = a;        
    }
    else
    {
        console.log("second");
        b = b.slice(0, b.length-1);
        input.value = b;         
    }
});