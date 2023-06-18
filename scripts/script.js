"use strict";

const arr = [1, 2, 3, 4];

function iterator (arr) {
    let i = 0;
    return{
        next: () =>{
            if(i < arr.length){
                return {value : arr[i++], done : false};
            }else{
                return {value : undefined, done : true};
            }
        }
    };
}
const it = iterator(arr);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());