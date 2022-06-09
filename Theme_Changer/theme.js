let btn = document.getElementById("btn");
let para = document.getElementById("para");


btn.addEventListener('click', () => {
    if (document.body.style.background == "" || document.body.style.background == "white") {
        document.body.style.background = 'black';
        alert('Switching to Dark Mode');
        para.style.color = "white";
    }
    else {
        document.body.style.background = "white";
        para.style.color = "black";
        alert('Switching to Light Mode');
    }
})