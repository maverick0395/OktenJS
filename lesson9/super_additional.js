let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let arr = [];
for (const user of users) {
    for (const item in user) {
        if (item === 'address') {
            arr.push(user[item]);
        }
    }
}
console.log(arr);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
let outer_div = document.createElement('div');
outer_div.classList.add('outerWrapper');
for (const user of users) {
    let div = document.createElement('div');
    div.classList.add('wrapper');
    let innerText = '';
    for (const property in user) {
        if (typeof user[property] === 'object') {
            innerText = innerText.concat(`${property}: \n`)
            for (const innerProperty in user[property]) {
                innerText = innerText.concat(`${innerProperty}: ${user[property][innerProperty]} \n`);
            }
        } else {
            innerText = innerText.concat(`${property}: ${user[property]} \n`);
        }
    }

    div.innerText = innerText;
    outer_div.appendChild(div);
}
document.body.appendChild(outer_div);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

for (const user of users) {
    let outerWrapper = document.createElement('div');
    outerWrapper.classList.add('outerWrapper');
    for (const property in user) {
        let div = document.createElement('div');
        div.classList.add('wrapper');
        if (typeof user[property] === 'object') {
            let h3 = document.createElement('h3');
            div.innerText = `${property}:\n` ;
            for (const item in user[property]) {
                div.innerText = div.innerText.concat(`\n${item}: ${user[property][item]}`);
                outerWrapper.appendChild(div);
            }
        } else {
            div.innerText = property + ": " + user[property];
        }
        outerWrapper.appendChild(div);
        document.body.appendChild(outerWrapper);
    }
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (const user of users) {
    let outerWrapper = document.createElement('div');
    outerWrapper.classList.add('outerWrapper');
    for (const property in user) {
        let div = document.createElement('div');
        if (typeof user[property] === 'object') {
            let h3 = document.createElement('h3');
            h3.innerText = property;
            div.appendChild(h3);
            for (const item in user[property]) {
                let innerDiv = document.createElement('div');
                innerDiv.classList.add('innerDiv');
                innerDiv.innerText = item + ": " + user[property][item];
                div.appendChild(innerDiv);
                outerWrapper.appendChild(div);
            }
        } else {
            div.innerText = property + ": " + user[property];
        }
        outerWrapper.appendChild(div);
        document.body.appendChild(outerWrapper);
    }
}

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
let h2 = document.getElementsByTagName('h2');
let ul = document.createElement('ul');
for (const element of h2) {
    let li = document.createElement('li');
    li.innerText = element.innerText;
    ul.appendChild(li);
}
document.getElementById('content').appendChild(ul);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

let h1 =  document.createElement('h1');
h1.innerText = 'Правила бойцовского клуба';
let outerDiv = document.createElement('div');
outerDiv.classList.add('wrap');
for (let rule = 0; rule < rules.length; rule++) {
    let div = document.createElement('div');
    div.classList.add('rules');
    for (const item in rules[rule]) {
        if (item === 'title') {
            let h2 = document.createElement('h2');
            h2.innerText = rules[rule][item];
            div.appendChild(h2);
        } else if (item === 'body') {
            let p = document.createElement('p');
            p.innerText = rules[rule][item];
            div.appendChild(p);
        }

        div.classList.add(`rule${rule+1}`);
    }
    outerDiv.appendChild(div);
}
document.body.appendChild(outerDiv);