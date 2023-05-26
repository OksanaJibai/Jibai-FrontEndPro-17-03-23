"use strict";

const list = document.querySelector('ul')
const listItems = document.querySelectorAll('li');

listItems.forEach(item => console.log(item.textContent));

const ulAttributes = [];
const ulAttributesName = [];

for(let attr of list.attributes){
    ulAttributes.push(attr.value);
    ulAttributesName.push(attr.name);
}
console.log(ulAttributes);
console.log(ulAttributesName);

const lastLi = document.querySelector('li:last-child');
lastLi.textContent = 'Привет меня зовут Oksana!';

const firstLi = document.querySelector('li:first-child');
firstLi.setAttribute('data-my-name', 'Oksana');
list.removeAttribute('data-dog-tail');