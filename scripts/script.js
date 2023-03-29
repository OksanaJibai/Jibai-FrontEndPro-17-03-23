'use strict';

//hw_3-2 'Калькулятор'

const a = Number(prompt('Write first number'));
const b = Number(prompt('Write second number'));
let result = null;

if(!a || !b){
    alert('Невірне значення чисел');
} else if(isNaN(a) || isNaN(b)){
    alert('Вказаний невірний тип даних')
} else{
    Number(a) && Number(b);
}
const whatToDo = prompt('Choose: add, sub, mult, div');

if(whatToDo ==='div' && b == 0) {
    alert('Ділення на нуль заборонено!');
} else if (whatToDo ==='div'){
    result = a / b;
    alert(`${a} / ${b} = ${result}`);
}else if (whatToDo ==='add'){
    result = a + b;
    alert(`${a} + ${b} = ${result}`);
}else if (whatToDo ==='sub'){
    result = a - b;
    alert(`${a} - ${b} = ${result}`);
}else if (whatToDo ==='mult'){
    result = a * b;
    alert(`${a} * ${b} = ${result}`);
}else if(!whatToDo || !result){
    alert('Помилка введення оператора');
}