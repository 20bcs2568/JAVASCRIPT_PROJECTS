let para = document.getElementsByTagName('p');
let increase = document.getElementById('inc');
let decrease = document.getElementById('dec');
let reset = document.getElementById('reset');

function color(value)
{
    if(value > 0)
    {
        return 'green';
    }
    else if(value < 0)
    {
        return 'red';
    }
}

increase.addEventListener('click', ()=>
{
    let a = Number(para[1].innerHTML);
    a += 1;
    para[1].innerHTML = a;
    para[1].style.color = color(a);
});

decrease.addEventListener('click', ()=>
{
    para[1].innerHTML -= 1;
    para[1].style.color = color(para[1].innerHTML);
});

reset.addEventListener('click', ()=>
{
    para[1].innerHTML = 0;
    para[1].style.color ='black';
});