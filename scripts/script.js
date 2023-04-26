'use strict';
//hw22 'Створюємо сутності'

const minAgeOfOwner = 18;
class Owner{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getPersonInfo(){
        console.log(this.name + ', ' + this.age);
    }
}
const firstPerson = new Owner('Paulina', 45);
const secondPerson = new Owner('Marco', 17);
firstPerson.getPersonInfo();
secondPerson.getPersonInfo();

class Car{
    constructor(brand,model,year,color){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    setOwner(owner){
        if(owner.age >= minAgeOfOwner){
            this.owner = owner;
            return this;
        }
        console.log('You must be 18 and older');
        return this;
    }
    getInfoOfAuto(){
        console.log('Auto: ' + this.brand, this.model, this.year, this.color);
        if(this.owner){
            console.log('Owner:');
            this.owner.getPersonInfo();
        }else{
            console.log("No owner assigned");
        }
    }
}
const firstCar = new Car('Audi', 'A3', 2020, 'blue');
const secondCar = new Car('Toyota', 'Yaris',2015, 'white');
const thirdCar = new Car('Scoda', 'Fabia', 2018, 'black');
firstCar.setOwner(firstPerson);
secondCar.setOwner(secondPerson);
firstCar.getInfoOfAuto();
secondCar.getInfoOfAuto();
thirdCar.getInfoOfAuto();
/*Paulina, 45
Marco, 17
You must be 18 and older
Auto:Audi A3 2020 blue
Owner:
Paulina, 45
Auto:Toyota Yaris 2015 white
No owner assigned
Auto:Scoda Fabia 2018 black
No owner assigned
*/