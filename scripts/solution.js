"use strict";

const item = document.querySelectorAll('li');

let count = 0
for(let value of item){
    console.log(value);
    if(value){
        count++;
    }
}
console.log(count);

let arrayTextOfLi = Array.from(item).map(element => element.textContent.trim());

console.log(arrayTextOfLi);