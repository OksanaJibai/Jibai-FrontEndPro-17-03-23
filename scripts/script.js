'use strict';

const protocol = "http://";
const protocol2 = "https://";
const form = document.getElementById('form');
const input = document.querySelector('#btn1');
const btn = document.querySelector("button");
let url;
btn.addEventListener('click', () =>{
    if(input.value.slice(0,7) !== protocol  ||
        input.value.slice(0,8) !== protocol2){
        url = protocol2 + input.value;
        form.action = url;
    }else{
        form.action = input.value;
    }
});


// const link = document.querySelector('a');
// console.dir(link);
// console.log(link);
// const btn = link.href;
//
//     link.addEventListener('click', (evt)=>{
//         evt.preventDefault();
//         let url;
//         if (!btn.startsWith("http://") || !btn.startsWith("https://")) {
//             url = "https://" + btn;
//         }else {
//             url = btn;
//         }
//
//         window.open(url);
//     })

//це я пробувала код зробити на 2 посилання зроблених під кнопку(в яких введені посилання), але щось йде не так і не підставляється протокол
//<a href="https://google.com/" class="btn1">Go Google</a>
//     <a href="google.com/" class="btn1">Go Google</a>