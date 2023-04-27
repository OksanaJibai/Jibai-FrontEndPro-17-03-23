'use strict';

//hw 23 'Hamburger'

class Hamburger {
    constructor(size, staffing) {
        this.size = size;
        this.staffing = staffing;
    }
    topping = {
        price : 0,
        kal : 0,
    };
    //маленький (50 тугриків, 20 калорій); великий (100 тугриків, 40 калорій).
    static SIZE_SMALL = {
        price : 50,
        kal : 20,
    };
    static SIZE_LARGE = {
        price : 100,
        kal : 40,
    };
    //сиром (+ 10 тугриків, + 20 калорій); салатом (+ 20 тугриків, + 5 калорій); картоплею (+ 15 тугриків, + 10 калорій).
    static STUFFING_CHEESE = {
        price : 10,
        kal : 20,
    };
    static STUFFING_SALAD = {
        price : 20,
        kal : 5,
    };
    static STUFFING_POTATO = {
        price : 15,
        kal : 10,
    };
    //посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
    static TOPPING_MAYO = {
        price : 20,
        kal : 5,
    };
    static TOPPING_SAUCE = {
        price : 15,
        kal : 0,
    };
    addTopping(toppingType){
        this.topping.price += toppingType.price;
        this.topping.kal += toppingType.kal;
        return this.topping;
    }
    calculate(){
        let sumOfKal = 0;
        if(this.staffing){
            return ( sumOfKal += this.size.kal + this.staffing.kal + this.topping.kal );
        }
            return ( sumOfKal += this.size.kal + this.topping.kal );
    }

    calculatePrice (){
        let sumOfPrise = 0;
        if(this.staffing){
            return ( sumOfPrise += this.size.price + this.staffing.price + this.topping.price );
        }else{
            return ( sumOfPrise += this.size.price + this.topping.price );
        }
    }

}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log('Calories: ' + hamburger.calculate());
console.log('Price: ' + hamburger.calculatePrice());
hamburger.addTopping(Hamburger .TOPPING_SAUCE);
console.log('Price with sauce: ' + hamburger.calculatePrice());

const cheeseburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
cheeseburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log('Calories: ' + cheeseburger.calculate ());
console.log('Price: ' + cheeseburger.calculatePrice());