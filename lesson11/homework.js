// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage


let form = document.createElement('form');
form.setAttribute('id', 'f1');

let input1 = document.createElement('input');
let input2 = document.createElement('input');
input1.setAttribute('name', 'name');
input1.setAttribute('type', 'text');
input2.setAttribute('name', 'age');
input2.setAttribute('type', 'number');

let button = document.createElement('button');
button.innerText = 'submit';

form.appendChild(input1);
form.appendChild(input2);
form.appendChild(button);
document.body.appendChild(form);

let f1 = document.forms.f1;

f1.onsubmit = e => {
    e.preventDefault();
    let obj = {
        f1 : f1.name.value,
        age : f1.age.value
    }
    localStorage.setItem('obj', JSON.stringify(obj));
};


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let form2 = document.createElement('form');
form2.setAttribute('id', 'f2');

let input_model = document.createElement('input');
let input_type = document.createElement('input');
let input_volume = document.createElement('input');
input_model.setAttribute('name', 'model');
input_model.setAttribute('type', 'text');
input_type.setAttribute('name', 'type');
input_type.setAttribute('type', 'text');
input_volume.setAttribute('name', 'volume');
input_volume.setAttribute('type', 'number');
input_volume.setAttribute('step', '0.1');

let button2 = document.createElement('button');
button2.innerText = 'submit';

form2.appendChild(input_model);
form2.appendChild(input_type);
form2.appendChild(input_volume);
form2.appendChild(button2);
document.body.appendChild(form2);

let f2 = document.forms.f2;
f2.onsubmit = e => {
    e.preventDefault();
    let car = [f2.model.value, f2.type.value, f2.volume.value];
    localStorage.setItem('car', JSON.stringify(car));
}



