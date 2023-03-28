'use strict';

//hw_3-6 'switch...case'

let numOrStr = prompt('input number or string');

switch (numOrStr) {
    case null :
        alert('ви скасували');
        break;
    case '':
        alert('Empty String');
        break;
    case isNaN( +numOrStr ):
        alert('number is Ba_NaN');
        break;
    default:
        alert('OK!');
}