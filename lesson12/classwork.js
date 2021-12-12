
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


let wrap = document.createElement('div');
wrap.id = 'wrap';
document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
      json.forEach(post => {
          let div = document.createElement('div');
          div.classList.add('post_card');
          for (let item in post) {
              let inner_div = document.createElement('div');
              inner_div.classList.add(`post--${item}`);
              inner_div.innerText = post[item];
              div.appendChild(inner_div);
          }

          let button = document.createElement('button');
          button.innerText = 'Show comments';
          button.onclick = () => {
              let comments_div = document.createElement('div');
              comments_div.id = 'comments-window';
              div.appendChild(comments_div);

              fetch('https://jsonplaceholder.typicode.com/comments')
                .then((response) => response.json())
                .then((json) => {
                    json.filter(comment => comment.postId === post.id).forEach(comment => {
                        let comm = document.createElement('div');

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

          div.appendChild(button);
          wrap.appendChild(div);
      })
  });