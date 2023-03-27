'use strict';

//hw_3-4 'Середнє значення'

let first = prompt('first number');
let second = prompt('second number');
let third = prompt('third number');

if (typeof first === 'number' &&
    typeof second === 'number' &&
    typeof third === 'number'){
    alert(`${(Number(first) + Number(second) + Number(third)) / 3}`);
}

