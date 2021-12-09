// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let wrap = document.createElement('div');
wrap.classList.add('wrap');
let button_goto = document.createElement('button')
button_goto.classList.add('goto');
button_goto.innerText = 'Go to favs';

for (let user of users) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h3 = document.createElement('h3');
    h3.innerText = user.name;
    let p_age = document.createElement('p');
    p_age.innerText =  `age: ${user.age}`;
    let p_status = document.createElement('p');
    p_status.innerText = `status: ${user.status}`;
    let button = document.createElement('button');
    button.innerText = 'Add to favorites';

    button.onclick = () => {
        let favorites;
        if (localStorage.getItem('favorites')) {
            favorites = JSON.parse(localStorage.getItem('favorites'));
        } else {
            favorites = [];
        }

        if (!JSON.stringify(favorites).includes(JSON.stringify(user))) {
            favorites.push(user);
            localStorage.setItem('favorites', JSON.stringify(favorites))
        } else {
            console.log('Object is already in favorites');
        }

    }
    div.appendChild(h3);
    div.appendChild(p_age);
    div.appendChild(p_status);
    div.appendChild(button);
    wrap.appendChild(div);
}

button_goto.onclick = () => {
    location.href = "favorites.html";
}

document.body.appendChild(wrap);
document.body.appendChild(button_goto);


