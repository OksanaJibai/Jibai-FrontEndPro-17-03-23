'use strict';

//hw5-13

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
//1
const arrOne = arr.filter((item) => item > 0);
let sum = arrOne.reduce(function(acc, item,){
    return item + acc;
}, 0);
console.log(arrOne.length, sum);

//2
// let min = Math.min(...arr);

let min = arr[0];
arr.forEach(function (elem,index){
    if(index > 0){
        if(min > elem){
            min = elem;
        }
    }
})

// let min = (a,b) =>{
//     return a < b ? a : b;
// }
// console.log(arr.reduce(min)) але як знайти індекс?
console.log(arr.reduce(min), arr.findIndex((item) => item === min));

//3
// let max = Math.max(...arr);

let max = arr[0];
arr.forEach(function (elem,index){
    if(index > 0){
        if(max < elem){
            max = elem;
        }
    }
})

// let max = (a,b) => {
//     return a > b? a:b;
// }
// console.log(arr.reduce(max)) але як знайти індекс?

console.log(max, arr.findIndex((item) => item === max));

//4
const arrTwo = arr.filter((value) => value < 0);
console.log(arrTwo.length, arrTwo);

//5
const arrTree = arr.filter((value) => value % 2 !== 0 && value > 0);
console.log(arrTree.length, arrTree);

//6
const arrFour = arr.filter((value) => value % 2 === 0 && value > 0);
console.log(arrFour.length,arrFour);

//7
let totalOdd = arrFour.reduce((acc,item,) => acc + item);
console.log(totalOdd);

//8
let totalEven = arrTree.reduce((acc,item,) => acc + item);
console.log(totalEven);

//9
let subPositive = arrOne.reduce((acc,item,) => acc * item);
console.log(subPositive);

//10
let newArr = arr.map(function (item){
    if(item !== max) return 0;
    return max;
})
console.log(newArr);