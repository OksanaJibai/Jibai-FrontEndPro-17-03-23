'use strict';

const htmlCode = `
    <div id="product-box">
        <img src="https://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733.jpg?v=1576267132" alt="" class="product-img">
        <div id="product-info">
            <p>Назва : Сукня вечірня</p>
            <p>Тканина : Шифон</p>
            <p>Ціна : 500$</p>
        </div>
        <button id="buy-button">Купити</button>
    </div>
    <form id="order-form">
        <label for="name">ПІБ покупця:</label>
        <input type="text" id="name" required><br>
        <label for="city">Місто:</label>
        <select id="city" required>
            <option value="">Виберіть місто</option>
            <option value="Київ">Київ</option>
            <option value="Харків">Харків</option>
            <option value="Донецьк">Донецьк</option>
        </select><br>
        <label for="nova-poshta">Склад Нової пошти:</label>
        <input type="text" id="nova-poshta" required><br>
        <label for="payment">Спосіб оплати:</label>
        <select id="payment" required>
            <option value="">Виберіть спосіб оплати</option>
            <option value="Післяплата">Післяплата</option>
            <option value="Банківська картка">Банківська картка</option>
        </select><br>
        <label for="quantity">Кількість:</label>
        <input type="number" id="quantity" value="1" min="1" required><br>
        <label for="comment">Коментар:</label>
        <textarea id="comment"></textarea><br>
        <button type="submit">Підтвердити</button>
    </form>
    <div id="order-info"></div>
`
document.getElementById('wrap').innerHTML = htmlCode;

const productBox = document.getElementById('product-box');
const productInfo = document.getElementById('product-info');
const buyButton = document.getElementById('buy-button');
const orderForm = document.getElementById('order-form');
const orderInfo = document.getElementById('order-info');

buyButton.addEventListener('click', () => {
    orderForm.style.display = 'block';
    productBox.style.display = 'none';
});
orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const productName = productInfo.querySelector('p:nth-child(1)').textContent;
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const novaPoshta = document.getElementById('nova-poshta').value;
    const payment = document.getElementById('payment').value;
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value;

    // Перевірити, чи всі обов'язкові поля заповнені
    if (name && city && novaPoshta && payment && quantity) {
        // Створити об'єкт з інформацією про замовлення
        const order = {
            productName,
            name,
            city,
            novaPoshta,
            payment,
            quantity,
            comment,
        };

        // Вивести інформацію про замовлення на сторінку
        orderInfo.innerHTML = `<p><strong>${order.productName}</strong></p>
        <p><strong>Кількість:</strong> ${order.quantity}</p>
        <p><strong>ПІБ покупця:</strong> ${order.name}</p>
        <p><strong>Місто:</strong> ${order.city}</p>
        <p><strong>Склад Нової пошти:</strong> ${order.novaPoshta}</p>
        <p><strong>Спосіб оплати:</strong> ${order.payment}</p>
        <p><strong>Коментар:</strong> ${order.comment || '-'}</p>` ;

        orderForm.style.display = 'none';
    } else {
        // Вивести повідомлення про помилку, якщо не всі обов'язкові поля заповнені
        alert("Будь ласка, заповніть всі обов'язкові поля форми.");
    }
});