'use strict';

//hw_6-15 'removeElement'

const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement (arr, item){
    let index = arr.indexOf(item);
    return [
        ...arr.slice(0, index),
        ...arr.slice(index + 1)
    ];
}

let newArray = removeElement(array, 5);

console.log(newArray); // [ 1, 2, 3, 4, 6, 7 ]