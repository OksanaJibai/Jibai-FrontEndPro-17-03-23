'use strict';

//hw_4-2 'Hard cycles'

//1

let a = 20;
let str = '';
while (a <= 30){
    str += a + ' ';
    a += 0.5;
}
console.log(str);

//2

let dollar = 27;
let result;
for(let i = 10; i <= 100; i += 10) {
    result = dollar * i;
    console.log(` ${i} dollars cost ${result} UAH`);
}

//3

let num = prompt('Напишіть будь-яке ціле число');
let res = '' ;
for(let i = 1; i <= 100; i++){
    if(i ** 2 <= num){
        res += i + ' ';
    }
}
alert(`${res}`);

//4

let n = prompt('Напишіть будь-яке ціле число');
let arr = [];
for (let e = 2; e <= n; e++){
    if(n % e === 0) {
        arr += e;
    }
}
if(!n || isNaN(n)){
    alert("Ви не ввели ніодного числа");
} else if(arr.length === 1){
    alert(` ${n}  просте число`);
}else{
    alert(` ${n}  не відноситься до простих чисел`);
}

//5

let operand = +prompt('Впишіть будь-яке число');
let finish = null;
for(let x = 1; x< 10; x++){
    if(3 ** x === operand){
        finish = x;
    }
}

if(!operand || isNaN(operand)){
    alert('Ви не ввели ніодного числа');
}else if(3 ** finish === operand){
    alert('Число можна отримати');
}else {
    alert('Число неможливо отимати');
}