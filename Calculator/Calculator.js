let a = "";
let b = "";
let status_a = 0;
let status_b = 0;
let input = document.getElementById('input');
let input2 = document.getElementById('input2');
let clear = document.getElementById('number_AC');
let value = document.getElementsByClassName('numbers_value');
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

value[0].addEventListener('click', () => {
    if (status_a == 0) {
        a += value[0].innerHTML;
        input.value = a;
    }
    else {
        b += value.innerHTML;
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
        para.innerHTML = "Please enter the value";
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