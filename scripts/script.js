"use strict";
//1
const form = document.querySelector('form');
const change = document.querySelector('#color');
const checkbox = document.querySelector('#checkbox');

if(localStorage.getItem('isChecked')){
    checkbox.checked = true;
}

if(localStorage.getItem('bg') === 'change'){
    form.style.backgroundColor = 'grey';
}
checkbox.addEventListener('change', () =>{
    localStorage.setItem('isChecked', true);
})

change.addEventListener('click',() =>{
    if(localStorage.getItem('bg') === 'change'){
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';

    }else{
        localStorage.setItem('bg', 'change');
        form.style.backgroundColor = 'grey';
    }
})

//2

const items = [
    {id : 1, name : 'Item 1', description : 'Description of Item 1', isFavorite: true},
    {id : 2, name : 'Item 2', description : 'Description of Item 2', isFavorite: false},
    {id : 3, name : 'Item 3', description : 'Description of Item 3', isFavorite: true},
    {id : 4, name : 'Item 4', description : 'Description of Item 4', isFavorite: false}
]

function renderItems(){
    const list = document.getElementById('item-list');
    for(let i = 0; i < items.length; i++){
        const item = items[i];
        const li = document.createElement('li');
        li.textContent =`${item.name}- ${item.description}`;
        list.appendChild(li);
        const favoriteBtn = document.createElement('button');
        favoriteBtn.textContent = item.isFavorite ? 'Удалить из избранного': 'Добавить в избранное';

        favoriteBtn.addEventListener('click',function(){
            item.isFavorite = !item.isFavorite;
            if(item.isFavorite){
                favoriteBtn.textContent = 'Удалить из избранного';
            }else{
                favoriteBtn.textContent = 'Добавить в избранное';
            }
            saveItems();
        });
        li.appendChild(favoriteBtn);
    }
}
function saveItems() {
    const dataJSON = JSON.stringify(items);
    localStorage.setItem('favoriteItems', dataJSON);
}

function loadItems(){
    const dataJSON = localStorage.getItem('favoriteItems');
    if (dataJSON) {
        const savedItems = JSON.parse(dataJSON);
        for(let i = 0; i < items.length; i++){
            const savedItem = savedItems.find(item => item.id === items[i].id);
            if (savedItem) {
                items[i].isFavorite = savedItem.isFavorite;
            }
        }
    }
}
window.addEventListener('load', function (){
   loadItems();
    renderItems();
});