let play = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let music = new Audio('songs/295 Sidhu Moosewala (Official).mp3');
let input = document.getElementById('input');
let beginTime = document.getElementById('beginTime');
let playButton = document.getElementsByClassName('playButton');
let arr = ['songs/295 Sidhu Moosewala (Official).mp3',
    'songs/Big Men Song by Gurlez Akhtar and R Nait.mp3',
    'songs/Chauffeur Song by Diljit Dosanjh, Ikky, and Tory Lanez.mp3',
    'songs/Distance Love Song by Zehr Vibe.mp3',
    'songs/Evergreen Song by Jigar.mp3',
    'songs/Kinne Aye Kinne Gye 3 Song by Ranjit Bawa.mp3',
    'songs/Levels Sidhu Moosewala (Official).mp3',
    'songs/Muchh Song by Diljit Dosanjh.mp3',
    'songs/Pata Ni Haan Diye Kulwinder Billa.mp3',
    'songs/Talja Song by Deepak Dhillon, Gur Sidhu, and Jassa Dhillon.mp3',
    'songs/The Last Ride Sidhu Moosewala (Official).mp3'
]
let dur = document.getElementById('duration');
let masterSongName = document.getElementById('masterSongName');
let song = document.getElementsByClassName('song');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let currentPos = 0;

input.value = 0;

function calDuration() {
    let temp = music.duration;
    let a = Math.floor(temp / 60);
    let b = Math.floor(temp % 60);
    if (a < 10) {
        a = "0" + a;
    }
    if (b < 10) {
        b = "0" + b;
    }
    let str = a + ":" + b;
    dur.innerHTML = str;
}

function playMusic() {
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
    calDuration();
}

play.addEventListener('click', () => {
    playMusic();
});

input.addEventListener('click', () => {
    let a = ((input.value) * (music.duration)) / 100;
    a = Math.floor(a);
    music.currentTime = a;
});

const addSong = (pos) => {
    currentPos = pos;
    masterSongName.innerHTML = song[pos].children[1].innerHTML;
    music.pause();
    input.value = 0;
    music = new Audio(arr[pos]);
    gif.style.visibility = 'visible';
    masterPlay.src = 'pause.svg';
    music.play();
    music.addEventListener('timeupdate', () => {
        updateTime();
        calDuration();
    });
}

previous.addEventListener('click', () => {
    if (currentPos > 0) {
        currentPos -= 1;
        addSong(currentPos);
    }
    else {
        music.pause();
        input.val = 0;
        music.play();
        music.addEventListener('timeupdate', () => { updateTime(); });
    }

});

next.addEventListener('click', () => {
    if (currentPos < arr.length - 1) {
        currentPos += 1;
        addSong(currentPos);
    }
    else {
        currentPos = 0;
        addSong(currentPos);
    }
});

function updateTime() {
    let a = Math.floor(00);
    let b = Math.floor(music.currentTime);

    if (b >= 60) {
        a = Math.floor(b / 60);
        b = Math.ceil(b % 60);
    }

    if (a <= 9) {
        a = "0" + a;
    }
    if (b <= 9) {
        b = "0" + b;
    }

    let str = a + ":" + b;
    beginTime.innerHTML = str;

    let val = ((music.currentTime) / (music.duration)) * 100;
    input.value = val;
    if (val == 100) {
        if (currentPos < arr.length - 1) {
            currentPos += 1;
        }
        else {
            currentPos = 0;
        }
        addSong(currentPos);
    }
}

playButton[0].addEventListener('click', () => { addSong(0); });
playButton[1].addEventListener('click', () => { addSong(1); });
playButton[2].addEventListener('click', () => { addSong(2); });
playButton[3].addEventListener('click', () => { addSong(3); });
playButton[4].addEventListener('click', () => { addSong(4); });
playButton[5].addEventListener('click', () => { addSong(5); });
playButton[6].addEventListener('click', () => { addSong(6); });
playButton[7].addEventListener('click', () => { addSong(7); });
playButton[8].addEventListener('click', () => { addSong(8); });
playButton[9].addEventListener('click', () => { addSong(9); });
playButton[10].addEventListener('click', () => { addSong(10); });


music.addEventListener('timeupdate', () => {
    updateTime();
});