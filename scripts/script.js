'use strict';

const voting = document.querySelector('.voting');
const answers = ["😎", "😊", "😐", "😔", "😢", "😍"]; //types of answer
const results = new Array(answers.length).fill(0); //array counter;
 for(let i = 0; i < answers.length; i++){
     const answer = document.createElement('div');
     answer.textContent = answers[i];
     const result = document.createElement('div');
     result.textContent = results[i];
     answer.appendChild(result);
     voting.appendChild(answer);

     //при кожному натискані лічильник збільшується na 1
     answer.addEventListener('click', () => {
         results[i]++;
         result.textContent = results[i];
     });
 }