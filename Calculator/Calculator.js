let number_value = document.getElementsByClassName('numbers_value');
let operator = document.getElementsByClassName('operator');
let answer = document.getElementById('answer');
let backspace = document.getElementById('backspace');
let para = document.getElementById('para');
let clear = document.getElementById('clear');
let input = document.getElementById('input');
let input2 = document.getElementById('input2');
let comment = "Please enter the value";
let a = "";
let b = "";
let status_a = 0;
let status_b = 0;
let ans = 0;

function add_Data(index) {
    if (status_a == 0) {
        a += number_value[index].innerHTML;
        input.value = a;
    }
    else {
        b += number_value[index].innerHTML;
        input.value = b;
        status_b = 1;
    }
}

function perform_expression() {
    let expression = input2.value;
    if (expression == '+')
        ans = parseFloat(a) + parseFloat(b);

    else if (expression == '-')
        ans = parseFloat(a) - parseFloat(b);

    else if (expression == '*')
        ans = parseFloat(a) * parseFloat(b);

    else if (expression == '/')
        ans = parseFloat(a) / parseFloat(b);

    input.value = ans;
    para.innerHTML = `Answer = ${ans}`;
    a = "";
    b = "";
    status_a = 0;
    status_b = 0;
}

function select_expression(index) {
    input2.value = operator[index].innerHTML;
    if (a == "" && ans != 0)  {
        a = ans;
        status_a = 1;
    }
    else if (a == "" && b == "") {
        para.innerHTML = comment;
    }
    else if (a != "" && b == "") {
        status_a = 1;
    }
    else if (a != "" && b != "") {
        perform_expression();
    }
}

answer.addEventListener('click', () => {
    if (status_a == 0 || status_b == 0) {
        para.innerHTML = comment;
    }
    else {
        perform_expression();
        input2.value = "=";
    }
});

clear.addEventListener('click', () => {
    a = "";
    b = "";
    status_a = 0;
    stauts_b = 0;
    input2.value = "AC";
    input.value = "";
    para.innerHTML = "";
});

backspace.addEventListener('click', () => {
    if (a == "" && b == "") {
        para.innerHTML = comment;
    }
    else if (a != "" && b == "") {
        a = a.slice(0, a.length - 1);
        input.value = a;
    }
    else if (b != "" && a != "") {
        b = b.slice(0, b.length - 1)
        input.value = b;
    }
})

number_value[0].addEventListener('click', () => { add_Data(0); });
number_value[1].addEventListener('click', () => { add_Data(1); });
number_value[2].addEventListener('click', () => { add_Data(2); });
number_value[3].addEventListener('click', () => { add_Data(3); });
number_value[4].addEventListener('click', () => { add_Data(4); });
number_value[5].addEventListener('click', () => { add_Data(5); });
number_value[6].addEventListener('click', () => { add_Data(6); });
number_value[7].addEventListener('click', () => { add_Data(7); });
number_value[8].addEventListener('click', () => { add_Data(8); });
number_value[9].addEventListener('click', () => { add_Data(9); });
number_value[10].addEventListener('click', () => { add_Data(10); });

operator[0].addEventListener('click', () => { select_expression(0) });
operator[1].addEventListener('click', () => { select_expression(1) });
operator[2].addEventListener('click', () => { select_expression(2) });
operator[3].addEventListener('click', () => { select_expression(3) });