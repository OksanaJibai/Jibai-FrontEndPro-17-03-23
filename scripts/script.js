'use strict';

function getSum(){
    let sum = 0;
    return function (num){
        sum += num;
        return sum;
    };
}
let sum = getSum();
sum(3);
sum(5);
sum(10);