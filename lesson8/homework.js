// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let elementWithIdContent = document.getElementById('content');
console.log(elementWithIdContent.innerText);


// -- отримує текст з блоку з id "rules"

let elementWithIdRules = document.getElementById('rules');
console.log(elementWithIdRules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

elementWithIdContent.innerText = "Content";

// -- замініть текст параграфа з id 'rules' на будь-який інший

elementWithIdRules.innerText = "There's only one rule - no rules at all";

// -- змініть кожному елементу колір фону на червоний

function changeBgOfEachElementToRed(initialElement) {
    if (initialElement.children.length) {
        for (const child of initialElement.children) {
            child.style.background = 'red';
            changeBgOfEachElementToRed(child);
        }
    }
}
changeBgOfEachElementToRed(document.body);


// -- змініть кожному елементу колір тексту на синій

function changeBgOfEachElementToBlue(initialElement) {
    if (initialElement.children.length) {
        for (const child of initialElement.children) {
            child.style.background = 'blue';
            changeBgOfEachElementToBlue(child);
        }
    }
}
changeBgOfEachElementToBlue(document.body);

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(elementWithIdRules.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

for (const element of document.getElementsByClassName('fc_rules')) {
    element.style.color = 'red';
}


