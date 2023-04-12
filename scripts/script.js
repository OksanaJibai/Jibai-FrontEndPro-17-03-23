'use strict';

//hw_3-5 'Портрет користувача'

let yearOfBirth = prompt('What year of birth do you have?');

if(!yearOfBirth || isNaN(yearOfBirth)) {
    alert('It is a pity that you did not want to enter yours year of birth');
}else if (yearOfBirth < 1900 || yearOfBirth > 2023) {
    alert('The year of birth should be from 1900 to 2023');
}else {
    const age = 2023 - Number(yearOfBirth);
    let city = prompt('What city do you live in?');
    let country = null;
    switch (city.toLowerCase()){
        case null:
        case '':
            alert('It is a pity that you did not want to enter your city');
            break;
        case 'Zagreb':
            country = ' capital of Croatia';
            break;
        case 'Kiev':
            country = ' capital of Ukraine';
            break;
        case 'Lisbon':
            country = ' capital of Portugal';
            break;
        case city:
            country = String(city);
            break;
    }
    let typeSport = prompt('What type of sport is your favorite?');
    let result = null;
    switch (typeSport.toLowerCase()){
        case null:
        case '':
            alert('It is a pity that you did not want to enter your favorite type of sport');
            break;
        case 'football':
            result = 'Cool! Do you want to become like Luka Modric';
            break;
        case 'basketball':
            result = 'Cool! Do you want to become like Michael Jordan';
            break;
        case 'free diving' :
            result = 'Cool! Do you want to become like Natalia Molchanova';
            break;
    }
    alert(` Your age is ${age}. You live in ${country}. ${result}.`);
}