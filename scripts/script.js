"use strict";

//first variant

// const form = document.getElementById('form');
//
// form.addEventListener('submit', handleFormSubmit);
//
// function handleFormSubmit(event){
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//
//     const email = formData.get('email');
//     const firstName = formData.get('firstName');
//     const lastName = formData.get('lastName');
//     const nickname = formData.get('nickname');
//     const password = formData.get('password');
//     const option = formData.get('option');
//     const message = formData.get('message');
//     const file = formData.get('file');
//     const checkbox = formData.get('terms');
//
//     const data = [
//         { label: "Email address:", value: email },
//         { label: "First name:", value: firstName },
//         { label: "Last name:", value: lastName },
//         { label: "Nickname:", value: nickname },
//         { label: "Password:", value: password },
//         { label: "Option:", value: option },
//         { label: "Message:", value: message },
//         { label: "File:", value: file},
//         { label: "Agreement", value: checkbox},
//     ];
//     console.log(data);
// }

//second variant

// const form = document.getElementById('form');
//
// form.addEventListener('submit', handleFormSubmit);
//
// function handleFormSubmit(event){
//     event.preventDefault();
//
//     const form = event.target;
//
//     const elements = form.querySelectorAll('input, select, textarea');
//     const data = [];
//
//     elements.forEach(element =>{
//         const label = element.label[0].textContent;
//         const value = element.value;
//         data.push({label, value});
//     });
//     console.log(data);
// }

const form = document.getElementById('form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const elements = form.querySelectorAll('input, select, textarea');
    const data = [];

    elements.forEach(element => {
        const label = element.labels.length > 0 ? element.labels[0].textContent : '';
        const value = element.value;
        data.push({ label, value });
    });

    console.log(data);
}
