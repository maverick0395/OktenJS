let items_arr = JSON.parse(localStorage.items)

let item_catalogue = document.createElement('div');
item_catalogue.id = 'item_catalogue';

for (let item of items_arr) {
    let item_div = document.createElement('div');
    item_div.classList.add('item_card');
    item_div.id = `item${items_arr.indexOf(item)+1}`;

    let img = document.createElement('img');
    img.setAttribute('src', `${item.image}`);
    img.classList.add('item_image');

    let title = document.createElement('h3');
    title.classList.add('item_title');
    title.innerText = `${item.name}`;

    let quant = document.createElement('p');
    quant.classList.add('item_quantity');
    quant.innerText = `Left in storage: ${item.quantity}`;

    let delete_item = document.createElement('button');
    delete_item.classList.add('delete_button');
    delete_item.innerText = 'Delete item';

    delete_item.onclick = () => {
        document.getElementById(`item${items_arr.indexOf(item)+1}`).remove();
        items_arr.splice(items_arr.indexOf(item),1);
        console.log(items_arr);
        localStorage.setItem('items', JSON.stringify(items_arr));

    }


    item_div.appendChild(img);
    item_div.appendChild(title);
    item_div.appendChild(quant);
    item_div.appendChild(delete_item);
    item_catalogue.appendChild(item_div);
}

let delete_all = document.createElement('button');
delete_all.classList.add('delete_all');
delete_all.innerText = 'Delete all items';

delete_all.onclick = () => {
    document.getElementById('item_catalogue').remove();
    localStorage.removeItem('items');
}

document.body.appendChild(item_catalogue);
document.body.appendChild(delete_all);
