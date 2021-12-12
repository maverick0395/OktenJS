// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


let wrap = document.createElement('div');
wrap.id = 'wrap';
document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        json.forEach(user => {
            if (user.id <= 15) {
                let div = document.createElement('div');
                div.classList.add('item-card');
                for (let item in user) {
                    let item_div = document.createElement('div');
                    item_div.classList.add(`item-card--${item}`);
                    item_div.innerText = `${user[item]}`;
                    div.appendChild(item_div);
                }
                wrap.appendChild(div);
            }
        })
    });


// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let wrap2 = document.createElement('div');
wrap2.id = 'wrap2';
document.body.appendChild(wrap2);

fetch('https://jsonplaceholder.typicode.com/comments')
  .then((response) => response.json())
  .then((json) => {
      json.forEach(comment => {
          if (comment.id < 15) {
              let div = document.createElement('div');
              div.classList.add('comment-card');
              for (let item in comment) {
                  let comment_div = document.createElement('div');
                  comment_div.classList.add(`comment-card--${item}`);
                  comment_div.innerText = `${comment[item]}`;
                  div.appendChild(comment_div);
              }
              wrap2.appendChild(div);
          }
      })
  });