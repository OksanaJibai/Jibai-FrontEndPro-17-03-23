"use strict";

const KEY_NAME = 'KEY_NAME';
function saveFormData (){
    const form = document.getElementById('form');
    const inputs = Array.from(form.querySelectorAll('input, select, textarea'));

    form.addEventListener('submit', event =>{
        event.preventDefault();
        const data = inputs.reduce((acc, {name, value}) => {
            acc[name] = value;
            return acc;
        },{});

        localStorage.setItem(KEY_NAME, JSON.stringify(data));
    });
}

const createDataList = () => {
    const list = document.getElementById('list');
    const noDataMessage = document.getElementById('noDataMessage');
    const data = JSON.parse(localStorage.getItem(KEY_NAME));
    if(data) {
        for(const key in data) {
            const listItem = document.createElement('li');
            listItem.className = 'list-item';
            listItem.innerText = `${key} : ${data[key]}`;
            list.appendChild(listItem);
        }

    }else{
        noDataMessage.style.display = 'block';
    }
}
document.addEventListener('DOMContentLoaded', createDataList);
saveFormData();