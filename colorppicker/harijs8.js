let bt1 = document.getElementById('button1');
let bt2 = document.getElementById('button2');
let bt3 = document.getElementById('button3');
let bt4 = document.getElementById('button4');
let bc = document.getElementById('bgContain');
let para = document.getElementById('selectedColorHexCode');

function butt1() {
    bc.style.backgroundColor = bt1.textContent;
    para.textContent = bt1.textContent
}

function butt2() {
    bc.style.backgroundColor = bt2.textContent;
    para.textContent = bt2.textContent
}

function butt3() {
    bc.style.backgroundColor = bt3.textContent;
    para.textContent = bt3.textContent
}

function butt4() {
    bc.style.backgroundColor = bt4.textContent;
    para.textContent = bt4.textContent
}