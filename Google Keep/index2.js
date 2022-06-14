let btn = document.getElementById('add');
btn.addEventListener('click', main);
let pos = 0;
function main() {
    let note = document.createElement('div');
    note.classList.add('main');
    pos += 1;

    let data = `<div class="image">
                    <input id="title" type="text" placeholder="Title">
                    <img id="edit" src="edit.svg" width="26px">
                    <img id="delete" src="delete.svg" width="26px">
                </div>
                <textarea id="input"></textarea>`;

    note.insertAdjacentHTML('afterbegin', data);
    let textarea = document.getElementsByClassName('textarea');

    let deleting = note.querySelector('#delete');
    deleting.addEventListener('click', () => {
        note.remove();
        localStorage.removeItem(pos);
    });

    let input = note.querySelector('#input');
    let edit = note.querySelector('#edit');
    let title = note.querySelector('#title');

    let status = 1;

    title.addEventListener('click', () => {
        if (title.value != '') {
            title.readOnly = true;
        }
    });

    input.addEventListener('click', () => {
        if (input.value != '' && status == 1) {
            input.readOnly = true;
        }
        if (status == 0) {
            input.readOnly = false;
            status = 1;
        }

        input.addEventListener('4', () => {
            if ((input.value != '') && (title.value != '')) {
                let arr = [];
                arr.push([title.value, input.value]);
                localStorage.setItem(pos, JSON.stringify(arr));
                console.log(localStorage);
            }
        });
    });

    edit.addEventListener('click', () => {
        status = 0;
    });

    textarea[0].appendChild(note);
}

function check() {

    console.log(title.value);
    console.log(input.value);
}
