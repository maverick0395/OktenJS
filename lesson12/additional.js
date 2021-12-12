// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


let wrap = document.createElement('div');
wrap.id = 'wrap';
document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
        json.forEach(user => {
            let div = document.createElement('div');
            div.classList.add('user-card');

            let button = document.createElement('button');
            button.classList.add('show-posts');
            button.innerText = 'Show posts';

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
            div.appendChild(button);
            wrap.appendChild(div);

            button.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                  .then((response) => response.json())
                  .then((json) => {
                      let post_wrapper = document.createElement('div');
                      post_wrapper.id = 'post-wrapper';

                      let close_posts = document.createElement('button');
                      close_posts.innerText = 'Close posts';
                      close_posts.classList.add('close-posts');
                      post_wrapper.appendChild(close_posts);

                      close_posts.onclick = () => {
                          document.getElementById('post-wrapper').remove();
                      }
                      //  json.filter(comment => comment.postId === post.id).forEach(comment => {
                      json.filter(post => post.userId === user.id).forEach(post => {
                          let post_cont = document.createElement('div');
                          post_cont.classList.add('post_card');
                          for (let item in post) {
                              if (item !== 'userId') {
                                  let inner_div = document.createElement('div');
                                  inner_div.classList.add(`post--${item}`);
                                  inner_div.innerText = post[item];
                                  post_cont.appendChild(inner_div);
                              }
                          }

                          let button = document.createElement('button');
                          button.innerText = 'Show comments';
                          button.classList.add('show_comments');
                          button.onclick = () => {
                              let comments_div = document.createElement('div');
                              comments_div.id = 'comments-window';
                              post_cont.appendChild(comments_div);

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
                              let close = document.createElement('button');
                              close.innerText = 'Close comments';
                              close.id = 'close';
                              comments_div.appendChild(close);

                              close.onclick = () => {
                                  document.getElementById('comments-window').remove();
                              }
                          }

                          post_cont.appendChild(button);
                          post_wrapper.appendChild(post_cont);
                      })
                    div.appendChild(post_wrapper);
                  });
            }
        })
    });