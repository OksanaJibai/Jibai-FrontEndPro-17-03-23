"use strict";

function insertWordInto(str) {
    return function(newWord) {
        if (!newWord) {
            return str;
        }
        const words = str.split(' ');
        const index = Math.floor(Math.random() * (words.length + 1));

        if (index === 0) {
             return newWord + ' ' + str;
        } else if (index === words.length) {
             return str + ' ' + newWord;
        } else {
            const newWords = [...words.slice(0, index), newWord, ...words.slice(index)];
            return newWords.join(' ');
        }
    }
}

const insert = insertWordInto('hello world')
const result = insert('Odesa') // -> 'hello Odesa world'
const secondResult = insert('Odesa') // -> 'Odesa hello world'
const thirdResult = insert('Odesa') // -> 'hello world Odesa'
console.log(result);
console.log(secondResult);
console.log(thirdResult);