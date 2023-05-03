'use strict';

// Создаем массив с названиями изображений
const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg"];

// Получаем случайный индекс изображения
const randomIndex = Math.floor(Math.random() * images.length);

// Создаем элемент img и устанавливаем ему случайное изображение
const img = document.createElement("img");
img.src = "image/" + images[randomIndex];

// Добавляем элемент img на страницу
document.body.appendChild(img);

