'use strict';

//hw_3-2 'Калькулятор'


let whatToDo = prompt('add, sub, mult, div - choose one of them');
const a = prompt('first number');
const b = prompt('second number');
if (whatToDo==='add') {
    alert (`${Number(a)} + ${Number(b)} = ${Number(a) + Number(b)}`);
} else if(whatToDo==='sub'){
    alert(`${a} - ${b} = ${a - b}`);
} else if(whatToDo==='mult'){
    alert(`${a} * ${b} = ${a * b}`);
} else {
    alert(`${a} / ${b} = ${a / b}`);
}