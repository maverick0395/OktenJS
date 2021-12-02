// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let text = document.getElementById('text');
let button = document.getElementById('button1');

button.onclick = function () {
    text.style.display = 'none';
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let button2 = document.getElementById('button2');

button2.onclick = function () {
    button2.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

f1.onsubmit = function (e) {
    e.preventDefault();
    if (!this.age.value) {
        console.log("enter your age");
    } else if (this.age.value < 18) {
        console.log("Access denied. You are under 18");
    } else {
        console.log("Welcome!");
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementById('menu');
let menu_li = [...menu.getElementsByTagName('li')];
let button3 = document.getElementById('button3');
button3.onclick = function () {
    if (button3.innerText === 'show menu') {
        menu_li.forEach(li => li.style.display = 'block');
        button3.innerText = 'hide menu';
    } else if (button3.innerText === 'hide menu') {
        menu_li.forEach(li => li.style.display = 'none');
        button3.innerText = 'show menu';
    }
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

let commentList = [{title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'ipsum', body: 'ipsum dolo sit ameti'},
    {title: 'dolo', body: 'dolo sit ameti'},
    {title: 'sit', body: 'sit ameti'},
    {title: 'ameti', body: 'ameti'},];

for (let comment of commentList) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText = comment.title;
    let p = document.createElement('p');
    p.innerText = comment.body;
    let hideButton = document.createElement('button');
    hideButton.innerText = 'Hide';
    hideButton.onclick =  () => {p.style.display === 'none' ? p.style.display = 'block'  : p.style.display = 'none'}
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(hideButton);
    document.body.appendChild(div);
}