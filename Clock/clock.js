let time = document.getElementById('time');
let datee = document.getElementById('date');
let day = document.getElementById('day');

function assign_zero(value)
{
    if(value < 10)
    {
        value = "0" + value;
    }
    return value;
}

function fun_time()
{
    let str = '';
    date = new Date();

    time.innerHTML = date.toLocaleTimeString();

    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const option = {weekday: 'long'};
    datee.innerHTML = date.toLocaleDateString(undefined, options);

    day.innerHTML = date.toLocaleString(undefined, option);
}

fun_time();

setInterval(fun_time, 1000);