"use strict";

function counter(num = 0){
    let count = num;
    let increaseCount = 0;
    let decreaseCount = 0;
    let getCount = 0;

    function increase(){
        count++;
        increaseCount++;
    }
    function decrease(){
        count--;
        decreaseCount++;
    }
    function value(){
        getCount++;
        return count;
    }
    function getStatistic(){
        return {
            increase : increaseCount,
            decrease : decreaseCount,
            get : getCount
        }
    }
    function reset(){
        count = num;
        increaseCount = 0;
        decreaseCount = 0;
        getCount = 0;
    }
    return {
        increase,
        decrease,
        value,
        getStatistic,
        reset
    }
}

const counter1 = counter();
counter1.increase();

console.log(counter1.value());
console.log(counter1.getStatistic());

const counter2 = counter(5);
counter2.decrease();

console.log(counter2.value());
console.log(counter2.getStatistic());

counter2.reset();
console.log(counter2.value());