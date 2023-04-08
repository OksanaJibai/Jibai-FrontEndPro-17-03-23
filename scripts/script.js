'use strict';

//hw_6-17/Functions

const array = [2, 'str', 5, 11,  'hgf', 12, 35, -17, '3', NaN];
let sum = 0;
let count = 0;
let result;
const aveNumbers = function (arr){
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number' && !isNaN(arr[i])){
            sum += arr[i];
            count ++;
            result = sum / count;
        }
    }
    return result;
}
console.log(aveNumbers(array));

//2
function doMath(x, sign, y){
    if (~sign.search(/[^+\-*/%^]/) || sign.length !== 1){
        return 'Bad operation type';
    }else if(isNaN(x) || isNaN(y) || !x || !y){
        return 'Both of number have to be a number';
    }
    return (x + sign.replace('^', '**') + y);
}
let operand1 = prompt('Please enter first number');
let operationType = prompt('Please enter operation type');
let operand2 = prompt('Please enter second number');
let result1 = doMath(operand1, operationType, operand2);
alert(result1);

//3
function fillArray(num1, num2) {
    let arr = [];
    for (let i = 0; i < num1; i++) {
        let row = [];
        for (let j = 0; j < num2; j++) {
            let value = prompt(`Enter value for [${i},${j}]:`);
            row.push(value);
        }
        arr.push(row);
    }
    return arr;
}
let num1 = Number(prompt("Enter number of rows:"));
let num2 = +(prompt("Enter number of columns:"));
alert(fillArray(num1,num2))

//4
function replaceItem(str, item) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (!item.includes(str[i])) {
            newStr += str[i];
        }
    }
    return newStr;
}
let elem = [];
let string = prompt('Напишіть будь-який рядок');
let elements = prompt('Напишіть елементи, які потрібно видалити з рядка');
elem += elem.push(`${elements}`);
alert(replaceItem(string, elem));