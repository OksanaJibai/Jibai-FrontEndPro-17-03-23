'use strict';

//hw_6 - 16 'function generateKey'

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey (elem, arr){
    let str = '';
for(let i = 0; i < elem; i++){
    let position = Math.floor(Math.random() * arr.length);
    str += arr.substring(position, position + 1);
}
return str;
}

const key = generateKey(16, characters);
console.log(key, generateKey(26, characters));