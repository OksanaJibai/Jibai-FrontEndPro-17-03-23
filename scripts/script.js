'use strict';

function getRandomNumber (){
    const generateNumbers = [];
    function generateNumber(){
        let randomNumber = Math.floor(Math.random() * 100) + 1;

        while (generateNumbers.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * 100) + 1;
        }
        generateNumbers.push(randomNumber);

        return randomNumber;
    }
    return generateNumber;
}

const generateRandomNumber = getRandomNumber();