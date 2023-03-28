'use strict';

//hw_3-2 'Калькулятор'

let whatToDo = prompt('add, sub, mult, div - choose one of them');
const a = prompt('first number');
const b = prompt('second number');
if (whatToDo ==='add'){
    alert (`${parseInt(a)} + ${parseInt(b)} = ${parseInt(a) + parseInt(b)}`);
} else if(whatToDo ==='sub'){
    alert(`${parseInt(a)} - ${parseInt(b)} = ${parseInt(a) - parseInt(b)}`);
} else if(whatToDo ==='mult'){
    alert(`${parseInt(a)} * ${parseInt(b)} = ${parseInt(a) * parseInt(b)}`);
} else if(whatToDo ==='div'){
    alert(`${parseInt(a)} / ${parseInt(b)} = ${parseInt(a) / parseInt(b)}`);
} else if (!whatToDo || whatToDo === ' ' || whatToDo === null ) {
    alert('Ups, something was wrong');
}