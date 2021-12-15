// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let wrap = document.createElement('div');
wrap.id = 'wrap';
document.body.appendChild(wrap);

let user = JSON.parse(localStorage.getItem('currentUser'));
console.log(user);
let div = document.createElement('div');
div.classList.add('user-card');

let button = document.createElement('button');
button.classList.add('show-posts');
button.innerText = 'Posts of current user';

wrap.appendChild(div);
wrap.appendChild(button);

for (let prop in user) {

    if (prop === 'address' || prop === 'company') {
        let cont = document.createElement('div');
        cont.classList.add('cont');
        let p = document.createElement('p');
        p.innerText = `${prop}`;
        p.classList.add(`${prop}-header`);
        cont.appendChild(p);

        for (let item in user[prop]) {
            let inner_p = document.createElement('p');
            inner_p.classList.add(`${prop}-${item}`);
            inner_p.classList.add(`${prop}-item`);

            if (item === 'geo') {
                let geo_cont = document.createElement('div');
                geo_cont.classList.add('geo_cont');
                inner_p.innerText = `${item}`;
                inner_p.classList.add(`${item}-header`);
                geo_cont.appendChild(inner_p);

                for (let coord in user[prop][item]) {
                    let innermost_p = document.createElement('p');
                    innermost_p.classList.add(`${item}-${coord}`);
                    innermost_p.innerText = `${coord}: ${user[prop][item][coord]}`;
                    innermost_p.classList.add(`${item}-item`);
                    geo_cont.appendChild(innermost_p);
                }
                cont.appendChild(geo_cont);

            } else {
                inner_p.innerText = `${item}: ${user[prop][item]}`;
                cont.appendChild(inner_p);
            }

        }
        div.appendChild(cont);
    } else {
        let p = document.createElement('p');
        p.classList.add(`user-${prop}`);
        p.innerText = `${prop}: ${user[prop]}`;
        div.appendChild(p);
    }
}

button.onclick = () => {
    button.remove();
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            let post_wrapper = document.createElement('div');
            post_wrapper.id = 'post-wrapper';


            json.filter(post => post.userId === user.id).forEach(post => {
                let post_cont = document.createElement('div');
                post_cont.classList.add('post_card');
                let post_title = document.createElement('h3');
                post_title.classList.add('post_title');
                post_title.innerText = `${post.title}`;
                post_cont.appendChild(post_title);

                let button = document.createElement('button');
                button.innerText = 'Show post details';
                button.classList.add('show_post_details');
                button.onclick = () => {
                    location.href = 'post-details.html';
                    localStorage.setItem('currentPost', JSON.stringify(post));
                }

                post_cont.appendChild(button);
                post_wrapper.appendChild(post_cont);
            })
            div.appendChild(post_wrapper);
        })};
