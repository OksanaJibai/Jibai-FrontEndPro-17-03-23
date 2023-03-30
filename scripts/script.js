'use strict';

//hw_4 'Cycles'

//1

let result = '';
for (let a = 10; a <= 20; a++){
    result += a + ',';
}
console.log(result);

//2

let square = '';
let num = 10
while(num <= 20){
    square += num ** 2 + ',';
    num++
}
console.log(square);

//3

let mult;
let seven = 7;
let b = 1;
while (b <= 10){
    mult = seven * b;
    console.log(`${seven} * ${b} = ${mult}`)
    b++
}

//4

let sum = 0;
for(let c = 1; c <= 15; c++) {
    sum += c;
}
console.log(sum);

//5

let d = 15;
let total = 1;
while (d <= 35){
    total *= d;
    d++
}
console.log(total);

//6

let middle = 0;
for( let e = 1; e <= 500; e++){
    middle += e;
}
console.log(middle/500);

//7

let add = 0;
for (let f = 30; f <= 80; f++){
    if(f % 2 === 0){
        add += f;
    }
}
console.log(add);

//8

let arr = '';
for( let h = 100; h <= 200; h++){
    if(h % 3 === 0){
        arr += h + ','
    }
}
console.log(arr);

//9, 10 11

let n = +prompt('Введіть натуральне число');

let numbers = '';
let count = 0;
let summ = 0;


for (let i = 2; i * 2 <= n; i++) {
    if (n % i === 0) {
        numbers += i + ','
    }
    if(n % 2 === 0){
        count++;
        summ += i;
    }
}
alert(`Дільники числа ${n} : ${numbers}`);

alert(`Парних дільників ${count} . Сума цих дільників ${summ}`);

//12

for(let x = 1; x <= 10; x++){
    let y = 1;
    while (y <= 10){
        console.log(`${x} * ${y} = ${x * y}`);
        y++
    }
}