'use strict';

const link = document.querySelector('a');
const protocol = 'https://';
let btn = link.href;

link.addEventListener('click', (evt)=>{
    evt.preventDefault();
    let url = 'https://www.google.com/';
    if (!btn.startsWith("http://") && !btn.startsWith("https://")) {
        btn = protocol + btn;
    }
    document.location.href = btn;
})