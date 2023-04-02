'use strict';

//hw_5-12/Array

let arr = [5, 10, 11, 55, 26, 13,];
console.log(arr);

function compareNumeric (a,b){
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}
console.log(arr.sort(compareNumeric));

let arrTree = arr.splice(2,3);
console.log(arr, arrTree);