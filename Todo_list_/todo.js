const main = () => {
    btn.style.cursor = 'pointer';
    let title = document.getElementById('tskname').value;
    let desc = document.getElementById('desc').value;

    if (title == '' || desc == '') {
        alert('Please Enter the complete Data');
    }
    else {
        if (localStorage.getItem('harshit') == null) {
            let arr = [];
            arr.push([title, desc]);
            localStorage.setItem('harshit', JSON.stringify(arr));
        }
        else {
            let arrStr = localStorage.getItem('harshit');
            let arr = JSON.parse(arrStr);
            arr.push([title, desc]);
            localStorage.setItem('harshit', JSON.stringify(arr));
        }

        add_into_list();
    }
}

function add_into_list() {
    if (localStorage.getItem('harshit') != null) {
        let arrStr = localStorage.getItem('harshit');
        let arr = JSON.parse(arrStr);
        let str = '';

        arr.forEach((element, index) => {
            str += `<tr>
                    <td>${index + 1}</td>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button id="btn2" onclick = "deleted(${index})">Delete</button></td>
                </tr>`
        });

        let tbody = document.getElementById('tbody');
        tbody.innerHTML = str;
    }
}

function deleted(index) {
    clear_list.style.cursor = 'pointer';
    let arrStr = localStorage.getItem('harshit');
    let arr = JSON.parse(arrStr);
    arr.splice(index, 1);
    localStorage.setItem('harshit', JSON.stringify(arr));
    add_into_list();
}


let btn = document.getElementById('btn');
let clear_list = document.getElementById('clear_list');

btn.addEventListener('click', main);
add_into_list();

clear_list.addEventListener('click', () => {
    clear_list.style.cursor = 'pointer';
    localStorage.clear();
    tbody.innerHTML = '';
});