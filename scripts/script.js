'use strict';

//hw_3-2 'Калькулятор'

const a = Number(prompt('Write first number'));
const b = Number(prompt('Write second number'));
const whatToDo = prompt('Choose: add, sub, mult, div');

if (whatToDo === '' || whatToDo === null) {
    alert('Ви не ввели ніодну із дій');

} else if (whatToDo ==='add'){
    alert (`${a} + ${b} = ${a + b}`);

} else if(whatToDo ==='sub'){
    alert(`${a} - ${b} = ${a - b}`);

} else if(whatToDo ==='mult'){
    alert(`${a} * ${b} = ${a * b}`);

}else if(whatToDo ==='div' && b == 0){
    alert('Ділення на нуль заборонено!');

} else if(whatToDo ==='div'){
    alert(`${a} / ${b} = ${a / b}`);

}else if (typeof a !== 'number' || typeof b !== 'number') {
    alert('Ви вказали невірне значення');

}else {
    alert('Щось пішло не так');
}











