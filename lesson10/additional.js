// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.onclick = (e) => {
    console.log("Tag name: ", e.target.tagName);
    console.log("Class list: ", e.target.classList);
    console.log("ID: ", e.target.id);
    console.log("Size: ", e.target.clientHeight, "*", e.target.clientWidth);
}

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.onclick = (e) => {
    let toRemove = document.querySelector('#info');
    if (toRemove) {
        toRemove.remove();
    }

    let div = document.createElement('div');
    div.id = 'info';
    Object.assign(div.style, {
        position: 'fixed',
        top: '0',
        right: '0',
        width: '200px',
        height: '150px',
        border: 'solid 1px black',
        background: 'white'
    });


    let targetProps = {
        'Tag name': `${e.target.tagName}`,
        'Class list': `${e.target.classList}`,
        'ID': `${e.target.id}`,
        'Size': `${e.target.clientHeight}px*${e.target.clientWidth}px`
    }

    for (let prop in targetProps) {
        let p = document.createElement('p');
        if (prop === 'Class list') {
            p.innerText = `${prop}: ${[...targetProps[prop]]}`
        }
        p.innerText = `${prop}: ${targetProps[prop]}`;
        div.appendChild(p);
    }
    document.body.appendChild(div);
}

// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let input1 = document.createElement('input');
input1.setAttribute('type', 'checkbox');
input1.setAttribute('name', 'filterFalse');
input1.setAttribute('id', 'input1')
let label1 = document.createElement('label');
label1.setAttribute('for', 'input1')
label1.innerText = 'Status False';
document.body.appendChild(input1);
document.body.appendChild(label1);

let input2 = document.createElement('input');
input2.setAttribute('type', 'checkbox');
input2.setAttribute('name', 'filterAge');
input2.setAttribute('id', 'input2')
let label2 = document.createElement('label');
label2.setAttribute('for', 'input2')
label2.innerText = 'Older than 29';
document.body.appendChild(input2);
document.body.appendChild(label2);

let input3 = document.createElement('input');
input3.setAttribute('type', 'checkbox');
input3.setAttribute('name', 'filterCity');
input3.setAttribute('id', 'input3')
let label3 = document.createElement('label');
label3.setAttribute('for', 'input3')
label3.innerText = 'Only Kyiv';
document.body.appendChild(input3);
document.body.appendChild(label3);


let displayUsers = (arr) => {
    let div = document.createElement('div');
    div.id = 'wrapper';
    for (const user of arr) {
        let p = document.createElement('p');
        p.innerHTML = `id: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.status}, 
    address: {city: ${user.address.city}, street: ${user.address.street}, number: ${user.address.number}}`
        p.id = `p${user.id}`;
        div.appendChild(p);
    }
    document.body.appendChild(div);
}
displayUsers(usersWithAddress);

let actualState = [input1.checked, input2.checked, input3.checked];

function checkState() {
    let actualArray = [...usersWithAddress];
    if (actualState[0]) {
        actualArray = actualArray.filter(user => !user.status);
    }
    if (actualState[1]) {
        actualArray = actualArray.filter(user => user.age >= 29);
    }
    if (actualState[2]) {
        actualArray = actualArray.filter(user => user.address.city === 'Kyiv');
    }
    return actualArray
}

input1.onclick = () => {
    document.getElementById('wrapper').remove();
    input1.checked ? actualState[0] = true : actualState[0] = false;
    displayUsers(checkState());
}

input2.onclick = () => {
    document.getElementById('wrapper').remove();
    input2.checked ? actualState[1] = true : actualState[1] = false;
    displayUsers(checkState());
}

input3.onclick = () => {
    document.getElementById('wrapper').remove();
    input3.checked ? actualState[2] = true : actualState[2] = false;
    displayUsers(checkState());
}


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

let navigateTroughDOM = function (el) {
    let prevButton = document.createElement('button');
    prevButton.innerText = 'prev';
    prevButton.id = 'prevButton';
    let nextButton = document.createElement('button');
    nextButton.innerText = 'next';
    nextButton.id = 'nextButton';
    Object.assign(prevButton.style, {
        position: 'fixed',
        top: '0',
        right: '51%'
    });
    Object.assign(nextButton.style, {
        position: 'fixed',
        top: '0',
        left: '51%'
    })
    document.body.appendChild(prevButton);
    document.body.appendChild(nextButton);
    let current_el = el;
    nextButton.onclick = () => {
        document.getElementById('nextButton').remove();
        document.getElementById('prevButton').remove();
        if (current_el.firstElementChild) {
            current_el = current_el.firstElementChild;
            console.log(current_el);
            navigateTroughDOM(current_el);
        } else {
            if (current_el.nextElementSibling) {
                current_el = current_el.nextElementSibling;
                console.log(current_el);
                navigateTroughDOM(current_el);
            } else if (current_el.parentElement.nextElementSibling) {
                current_el = current_el.parentElement.nextElementSibling;
                console.log(current_el);
                navigateTroughDOM(current_el);
            } else {
                console.log("End of the document");
                navigateTroughDOM(current_el.previousElementSibling);
            }
        }
    }
    prevButton.onclick = () => {
        document.getElementById('nextButton').remove();
        document.getElementById('prevButton').remove();

        if (current_el.previousElementSibling) {
            current_el = current_el.previousElementSibling;
            console.log(current_el);
            navigateTroughDOM(current_el);
        } else {
            if (current_el.parentElement) {
                current_el = current_el.parentElement;
                console.log(current_el);
                navigateTroughDOM(current_el);
            } else {
                console.log("Beginning of the document");
                navigateTroughDOM(current_el.firstElementChild);
            }
        }

    }
}

let el = document.getElementById('wrap');
navigateTroughDOM(el);


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.



// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

function changeSelectedText() {
    let selection = document.getSelection();
    if (selection.rangeCount) {
        let span = document.createElement('span');
        span.style.color = 'orange';
        span.innerText = selection.toString();
        let range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(span);
    }
}

let target = document.body;
target.onmouseup = () => {
    changeSelectedText();
}
