// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let elementWithIdMainHeader = document.getElementById('main_header');
elementWithIdMainHeader.classList.add('september-2021');

// b) робить шириниу елементу ul 400px

let ulList = document.getElementsByTagName('ul');
for (const ul of ulList) {
    ul.style.width = '400px';
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%

for (const el of document.getElementsByClassName('linkList')) {
    el.style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2

function getTextfromClassListElement2() {
    return document.getElementsByClassName('listElement2')[0].innerText
}

console.log(getTextfromClassListElement2());

// e) отримує всі елементи li та змінює ім колір фону на сірий

function changeBgOfLiElementsToGray() {
    for (const li of document.getElementsByTagName('li')) {
        li.style.background = 'gray';
    }
}
changeBgOfLiElementsToGray();

// f) отримує всі елементи 'a' та додає їм клас anchor

function giveAllATagsClassAnchor() {
    for (const a of document.getElementsByTagName('a')) {
        a.classList.add('anchor');
    }
}
giveAllATagsClassAnchor();

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

function getAllATagsAndChangeTextSize() {
    for (const a of document.getElementsByTagName('a')) {
        if (a.textContent === 'link3') {
            a.style.fontSize = '40px';
        }
    }
}
getAllATagsAndChangeTextSize();

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

function getAllATagsAndAddClass() {
    for (const a of document.getElementsByTagName('a')) {
        a.classList.add(`element_${a.textContent}`);
    }
}
getAllATagsAndAddClass();

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

function getElementsWithSubHeaderClassAndChangeBgToGray() {
    let color = prompt('Type your color');
    for (const el of document.getElementsByClassName('sub-header')) {
        el.style.background = color;
    }
}
getElementsWithSubHeaderClassAndChangeBgToGray();

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

function getElementsWithSubHeaderClassAndChangeTextColor() {
    let color = prompt('Type your color');
    for (const el of document.getElementsByClassName('sub-header')) {
        if (el.innerText === 'content 2 segment') {
            el.style.color = color;
        }
    }
}
getElementsWithSubHeaderClassAndChangeTextColor();

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

function getElementWithContent1ClassAndChageText() {
    let text = prompt("Type your text");
    for (const el of document.getElementsByClassName('content_1')) {
        el.innerText = text;
    }
}
getElementWithContent1ClassAndChageText();


// l) отримати елементи p та змінити їм padding на 20px

function getAllPElementsAndChangePadding() {
    for (const p of document.getElementsByTagName('p')) {
        p.style.padding = '20px';
    }
}
getAllPElementsAndChangePadding();

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

function getElementsWithText2ClassAndChangeText() {
    for (const el of document.getElementsByClassName('text2')) {
        el.innerText = 'sep-2021';
    }
}
getElementsWithText2ClassAndChangeText();