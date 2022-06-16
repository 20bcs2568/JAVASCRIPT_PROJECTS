let play = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let music = new Audio('songs/1.mp3');
let input = document.getElementById('input');
let beginTime = document.getElementById('beginTime');
let song = document.getElementsByClassName('song');
input.value = 0;


play.addEventListener('click', () => {

    if ((gif.style.visibility) == '' || (gif.style.visibility) == 'hidden') {
        gif.style.visibility = 'visible';
        masterPlay.src = 'pause.svg';
        music.play();
    }
    else {
        gif.style.visibility = 'hidden';
        masterPlay.src = 'play.svg';
        music.pause();
    }

});

music.addEventListener('timeupdate', ()=>
{
    let a = Math.floor(00);
    let b = Math.floor(music.currentTime);

    if (b >= 60) {
        a = Math.floor(b / 60);
        b = Math.ceil(b % 60);
    }

    if(a <= 9)
    {
        a = "0" + a;
    }
    if(b <= 9)
    {
        b = "0" + b;
    }

    let str = a+ ":"+ b;
    beginTime.innerHTML = str;

    let val = ((music.currentTime) / (music.duration)) * 100;
    input.value = val;
    if(val == 100)
    {
        gif.style.visibility = 'hidden';
        masterPlay.src = 'play.svg';
        music.pause();
    }
});

input.addEventListener('click', ()=>
{
    let a = ((input.value) * (music.duration))/100;
    a  = Math.floor(a);
    music.currentTime = a;
})