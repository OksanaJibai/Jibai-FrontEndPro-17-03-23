'use strict';

//hw_3-2 'Калькулятор'

let whatToDo = prompt('add, sub, mult, div - choose one of them');
const a = prompt('first number');
const b = prompt('second number');
if (whatToDo ==='add' &&
    typeof(a) === 'number' &&
    typeof(b) === 'number'){
    alert (`${Number(a)} + ${Number(b)} = ${Number(a) + Number(b)}`);
} else if(whatToDo ==='sub'&&
    typeof(a) === 'number' &&
    typeof(b) === 'number'){
    alert(`${a} - ${b} = ${a - b}`);
} else if(whatToDo ==='mult'&&
    typeof(a) === 'number' &&
    typeof(b) === 'number'){
    alert(`${a} * ${b} = ${a * b}`);
} else if(whatToDo ==='div' &&
    typeof(a) === 'number' &&
    typeof(b) === 'number'){
    alert(`${a} / ${b} = ${a / b}`);
} else if (typeof(a) !== 'number' ||
    typeof(b) !== 'number'){
    alert('a variable has not valid type');
} else if (whatToDo === ' ') {
    alert('');
}