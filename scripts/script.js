"use strict";

(function (){

    const goods = [['футболка', 15], ['шорты', 25], ['носки', 5]];

    const map = new Map();

   for(const [item, price] of goods){
       map.set(item, price);
   }

   let sumPrice = 0;

   for(const price of map.values()){
       sumPrice += price;
   }

    console.log(sumPrice);
})()