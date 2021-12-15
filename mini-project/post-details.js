// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let wrap = document.createElement('div');
wrap.id = 'wrap';

let post = JSON.parse(localStorage.getItem('currentPost'));

let post_wrapper = document.createElement('div');

let post_cont = document.createElement('div');
post_cont.classList.add('post_card');

for (let item in post) {
    let inner_div = document.createElement('div');
    inner_div.classList.add(`post--${item}`);
    inner_div.innerText = post[item];
    post_cont.appendChild(inner_div);
}

let h2 = document.createElement('h2');
h2.innerText = 'Comments';
post_cont.appendChild(h2);

let comments_div = document.createElement('div');
comments_div.id = 'comments-window';
post_cont.appendChild(comments_div);

post_wrapper.appendChild(post_cont);
wrap.appendChild(post_wrapper);
document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((json) => {
        json.filter(comment => comment.postId === post.id).forEach(comment => {
            let comm = document.createElement('div');
            comm.classList.add('comment_container');

            let comm_name = document.createElement('h3');
            comm_name.innerText = comment.name;
            comm.appendChild(comm_name);

            let comm_email = document.createElement('h4');
            comm_email.innerText = comment.email;
            comm.appendChild(comm_email);

            let comm_body = document.createElement('p');
            comm_body.innerText = comment.body;
            comm.appendChild(comm_body);

            comments_div.appendChild(comm);
        })
    });







