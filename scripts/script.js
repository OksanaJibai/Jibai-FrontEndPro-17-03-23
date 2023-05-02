'use strict';

const myInput = document.getElementById("myInput");
const linkInfo = document.getElementById("link-info");

// показуємо div при фокусуванні на input
myInput.addEventListener("focus", function() {
    linkInfo.style.display = "block";
});

// ховаємо div при втраті фокусу на input
myInput.addEventListener("blur", function() {
    linkInfo.style.display = "none";
});