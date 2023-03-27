'use strict';

//hw_3-3 'Години в секунди'

let time = prompt('Вкажіть кількіть годин');
let secondInHour = 60 * 60;
let result =(`${time * secondInHour}`);

if (time > 0 && time <= 24 || typeof time === 'number'){
    alert(`Це ${result} секунд`);
}else{
    alert('Упс, щось пішло не так');
}