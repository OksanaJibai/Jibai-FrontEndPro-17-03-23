'use strict';

const protocol = "http://";
const protocol2 = "https://";
const form = document.querySelector("#form");
const input = document.querySelector('#btn1');
const btn = document.querySelector("button");
let url;

btn.addEventListener('click', () =>{
    if(input.value.slice(0,7) !== protocol  &&
        input.value.slice(0,8) !== protocol2){
        url = protocol2 + input.value;
        form.action = url;
    }else{
        form.action = input.value;
    }
});
