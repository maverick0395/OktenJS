let favorites = JSON.parse(localStorage.getItem('favorites'))
let wrap = document.createElement('div');
wrap.classList.add('wrap');

if (!favorites) {
    let h1 = document.createElement('h1');
    h1.innerText = 'You have no favorite items so far';
    document.body.appendChild(h1);
}
for (let user of favorites) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h3 = document.createElement('h3');
    h3.innerText = user.name;
    let p_age = document.createElement('p');
    p_age.innerText =  `age: ${user.age}`;
    let p_status = document.createElement('p');
    p_status.innerText = `status: ${user.status}`;

    div.appendChild(h3);
    div.appendChild(p_age);
    div.appendChild(p_status);
    wrap.appendChild(div);

}

document.body.appendChild(wrap);