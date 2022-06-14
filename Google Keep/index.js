let add_note = document.getElementById('add');
add_note.addEventListener('click', add_new_note);

let str = '';
let index = 0;
let arr = [];

function updated()
{
    localStorage.setItem('harshit', arr);
}

function add_new_note() 
{
    let textarea = document.getElementsByClassName('textarea');
    let data = `<div class="main">
                <div class="image">
                    <input id="title" type="text" placeholder="Title">
                    <img id="edit" src="edit.svg" width="26px">
                    <img id="save" src="save.svg" width="26px">
                    <img id="delete" src="delete.svg" width="26px">
                </div>
                <textarea id="input"></textarea>
            </div>`;
    str += data;
    textarea[0].innerHTML = str;

    let save = document.getElementById('save');
    let input = document.getElementById('input');

    save.addEventListener('click', () => {
        if (input.value != '') {
            console.log('saved succesfully');
            arr.push(input.value);
            input.readOnly = true;
            updated();
        }
    });


}