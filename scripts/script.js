'use strict';

//hw 9 - 21 'Багатоповерховий будинок'

class Human {
    constructor(name,gender){
        this.name = name;
        this.gender = gender;
    }
}

const firstResident = new Human('Valentin', 'male');
const secondResident = new Human('Olena', 'female');
const thirdResident = new Human('Sandra', 'female');
const forthResident = new Human('Oleg', 'male');
const fifthResident = new Human('Ivan', 'male');
const sixthResident = new Human('Olia', 'female');

class Apartment{
    residents = [];
    addResident(resident){
        this.residents.push(resident);
        return this
    }
}

const firstApartment = new Apartment();
const secondApartment = new Apartment();
const thirdApartment = new Apartment();
firstApartment.addResident(secondResident).addResident(thirdResident);
secondApartment.addResident(firstResident).addResident(fifthResident);
thirdApartment.addResident(forthResident).addResident(sixthResident);
console.log(firstApartment);
console.log(secondApartment);
console.log(thirdApartment);

class House{
    constructor(maxCountApartment) {
        this.apartments = [];
        this.maxCountApartment = maxCountApartment;
    }
    addApartment(apartment){
        if(this.apartments.length < this.maxCountApartment) {
            this.apartments.push(apartment);
        }else{
            console.log('First house is full');
        }
        return this;
    }
}
const firthHouse = new House(2);
const secondHouse = new House(3);
firthHouse.addApartment(firstApartment).addApartment(secondApartment).addApartment(thirdApartment);
secondHouse.addApartment(secondApartment).addApartment(firstApartment).addApartment(thirdApartment);
console.log(firthHouse);
console.log(secondHouse);