let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let para = document.getElementsByClassName('para');

function value(tag, val, target) {
    if (val <= target) {
        setTimeout(() => {
            tag.innerHTML = val.toFixed(0) + "+";
            val += target / 100;
            value(tag, val, target);
        }, 1);
    }
    else {
        tag.innerHTML = target + "+";
    }
}

function Increment(tag) {
    let target = tag.attributes['data-target'].value;
    target = Number(target);
    let val = 0;
    value(tag, val, target);
}

Increment(p1);
Increment(p2);
Increment(p3);
