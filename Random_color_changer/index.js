let btn = document.getElementsByTagName("button");
let hex_code = document.getElementById('hex-code');

btn[0].addEventListener('click', ()=>
{
    const  hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E'];
    let str = "#";
    for(let i = 0; i<6; i++)
    {
        str += hex[Math.floor(Math.random()*hex.length)];
    }
    console.log(str);
    document.body.style.backgroundColor = str;

    hex_code.innerHTML = str;
    
});
