// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let create_but = document.getElementById('create_but');
let f1 = document.forms.f1;

create_but.onclick = (e) => {
    e.preventDefault();
    let items;
    let new_item = localStorage.getItem('items');
    new_item === null ? items = [] : items = JSON.parse(new_item);

    if (items.some(item => item.name === f1.item_name.value)) {
        console.log('Item has already been added');
    } else {
        items.push({
            name: f1.item_name.value,
            quantity: f1.item_quantity.value,
            image: f1.item_image.value
        })
    }
    localStorage.setItem('items', JSON.stringify(items));

}