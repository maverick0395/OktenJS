// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
//     user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
//     блоки с краткой информацией про post - в ряд по 5 объектов.
//     post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
//     Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

let wrap = document.createElement('div');
wrap.id = 'wrap';
document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
        json.forEach(user => {
            let usercard = document.createElement('div');
            usercard.classList.add('usercard');

            let userid = document.createElement('p');
            userid.classList.add('userid');
            userid.innerText = `${user.id}`;

            let username = document.createElement('p');
            username.classList.add('username');
            username.innerText = `${user.name}`;

            let details_but = document.createElement('button')
            details_but.classList.add('details_but');
            details_but.innerText = 'Show details';


            details_but.onclick = () => {
                location.href = 'user-details.html';
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            usercard.appendChild(userid);
            usercard.appendChild(username);
            usercard.appendChild(details_but);
            wrap.appendChild(usercard);
        })
    })


