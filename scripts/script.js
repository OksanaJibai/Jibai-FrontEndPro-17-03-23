"use strict";

(function (){
    class Hamburger {
        constructor(size, staffing) {
            this.size = size;
            this.staffing = staffing;
            this.topping = {
                price : 0,
                kal : 0,
            };
        }
        static SIZE_SMALL = {
            price : 50,
            kal : 20,
        };
        static SIZE_LARGE = {
            price : 100,
            kal : 40,
        };
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
            return  this.size.kal + (this.staffing ? this.staffing.kal : 0) + this.topping.kal;
        }

        calculatePrice (){
            return   this.size.price + (this.staffing ? this.staffing.price : 0) + this.topping.price;
        }

    }

    const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_POTATO);
    hamburger.addTopping(Hamburger.TOPPING_MAYO);
    console.log('Calories: ' + hamburger.calculate());
    console.log('Price: ' + hamburger.calculatePrice());
    hamburger.addTopping(Hamburger.TOPPING_SAUCE);
    console.log('Price with sauce: ' + hamburger.calculatePrice());

    const cheeseburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
    cheeseburger.addTopping(Hamburger.TOPPING_SAUCE);
    console.log('Calories: ' + cheeseburger.calculate ());
    console.log('Price: ' + cheeseburger.calculatePrice());
    cheeseburger.addTopping(Hamburger.TOPPING_MAYO);
    console.log('Calories with mayo: ' + cheeseburger.calculate ());
    console.log('Price with mayo: ' + cheeseburger.calculatePrice());
})()