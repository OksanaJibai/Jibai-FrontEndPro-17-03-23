'use strict';

const htmlCode =`
        <form action='' id="registration-form">
            <div class="row">
                <label for="userName">Your name</label>
                <input type="text" placeholder="username" name="userName" id="userName" required>
            </div>
            <div class="row">
                <label for="lastName">Your last name</label>
                <input type="text" placeholder="lastname" name="lastName" id="lastName" required>
            </div>
            <div class="row">
                <label for="birthDate">Date of birth</label>
                <input type="text" name="birthDate" id="birthDate" required>
            </div>
            <div class="row">
                <legend>Your gender is</legend>
                <input type="radio" name="gender" value="Male" checked id="gender1" required >
                <label for="gender1">Male</label>
                <input type="radio" name="gender" value="Female" id="gender2">
                <label for="gender2">Female</label>
            </div>
            <div class="row">
                <label for="city">Your city</label>
                <select name="city" id="city" required>
                    <option value="Donetsk">Donetsk</option>
                    <option value="Kharkiv">Kharkiv</option>
                    <option value="Dnipro">Dnipro</option>
                </select>
            </div>
            <div class="row">
                <label for="address">Your address</label>
                <textarea name="address" id="address" rows="4"></textarea>
            </div>
            <div class="row">
                <legend>Languages</legend>
                <input type="checkbox" name="language" id="lang1" value="Ukrainian" checked>
                <label for="lang1">UA</label>
                <input type="checkbox" name="language" id="lang2" value="English">
                <label for="lang2">EN</label>
                <input type="checkbox" name="language" id="lang3" value="Croatian">
                <label for="lang3">HR</label>
                <input type="checkbox" name="language" id="lang4" value="French">
                <label for="lang4">FR</label>
            </div>
            <button type="submit">Save</button>
        </form>
`
document.getElementById('wrap').innerHTML = htmlCode;
const form = document.querySelector("#registration-form");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit (event){
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const userName = formData.get('userName');
    const lastName = formData.get('lastName');
    const birthDate = formData.get('birthDate');
    const gender = formData.get('gender');
    const city = formData.get('city');
    const address = formData.get('address');
    const languages = formData.getAll('language');

    const table = document.createElement('table');

    const data = [
        { label: "Ім'я:", value: userName },
        { label: "Прізвище:", value: lastName },
        { label: "Дата народження:", value: birthDate },
        { label: "Стать:", value: gender },
        { label: "Місто:", value: city },
        { label: "Адреса:", value: address },
        { label: "Мови, якими володієте:", value: languages.join(', ') },
    ];
    data.forEach((item) => {
        const row = document.createElement('tr');
        const labelCell = document.createElement('td');
        const valueCell = document.createElement('td');
        labelCell.textContent = item.label;
        valueCell.textContent = item.value;
        row.appendChild(labelCell);
        row.appendChild(valueCell);
        table.appendChild(row);

        form.replaceWith(table);
    })
}