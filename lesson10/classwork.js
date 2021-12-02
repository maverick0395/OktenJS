// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let f1 = document.createElement('form');
f1.setAttribute('name', 'f1');
document.body.appendChild(f1);

let f2 = document.createElement('form');
f2.setAttribute('name', 'f2');
document.body.appendChild(f2);

let input1 = document.createElement('input');
input1.setAttribute('name', 'input1');
input1.setAttribute('type', 'text');

let input2 = document.createElement('input');
input2.setAttribute('name', 'input2');
input2.setAttribute('type', 'number');

let input3 = document.createElement('input');
input3.setAttribute('name', 'input3');
input3.setAttribute('type', 'text');

let input4 = document.createElement('input');
input4.setAttribute('name', 'input4');
input4.setAttribute('type', 'number');

f1.append(input1, input2);
f2.append(input3, input4);

let button1 = document.createElement('button')
button1.innerText = 'Show info';
button1.style.display = 'block';
button1.style.marginBottom = '20px';
document.body.appendChild(button1);

button1.onclick = () => {
    console.log(document.forms.f1.input1.value);
    console.log(document.forms.f1.input2.value);
    console.log(document.forms.f2.input3.value);
    console.log(document.forms.f2.input4.value);
}

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let input5 = document.createElement('input');
input5.setAttribute('name', 'input5');
input5.setAttribute('type', 'number');
document.body.appendChild(input5);

let input6 = document.createElement('input');
input6.setAttribute('name', 'input6');
input6.setAttribute('type', 'number');
document.body.appendChild(input6);

let input7 = document.createElement('input');
input7.setAttribute('name', 'input7');
input7.setAttribute('type', 'text');
document.body.appendChild(input7);

let button2 = document.createElement('button');
button2.innerText = 'Create table';
button2.style.display = 'block';
button2.style.marginBottom = '20px';
document.body.appendChild(button2);

button2.onclick = () => {
    let table = document.createElement('table');
    document.body.appendChild(table);
    for (let i = 0; i < input5.value; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < input6.value; j++) {
            let td = document.createElement('td');
            td.innerText = input7.value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let explicitContent = ['dick', 'cunt', 'bitch', 'faggot', 'asshole', 'douchebag', 'fuck'];
let input8 = document.createElement('input');
input8.setAttribute('name', 'input8');
input8.setAttribute('type', 'text');
document.body.appendChild(input8);

let button3 = document.createElement('button');
button3.innerText = 'Check';
button3.style.display = 'block';
button3.style.marginBottom = '20px';
document.body.appendChild(button3);

button3.onclick = () => {
    if (explicitContent.includes(input8.value)) {
        alert("Warning! Explicit content");
    }
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let input9 = document.createElement('input');
input9.setAttribute('name', 'input9');
input9.setAttribute('type', 'text');
document.body.appendChild(input9);

let button4 = document.createElement('button');
button4.innerText = 'Check';
button4.style.display = 'block';
button4.style.marginBottom = '20px';
document.body.appendChild(button4);

button4.onclick = () => {
    if (explicitContent.some(word => input9.value.includes(word))) {
        alert("Warning! Explicit content");
    }
}
