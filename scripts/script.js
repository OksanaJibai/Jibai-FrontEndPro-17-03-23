'use strict';

const table = document.createElement('table');
for(let i = 1; i <= 10; i++){
    const row = document.createElement('tr');
    for(let e = 1; e <= 10; e++){
        const cell = document.createElement('td');
        const cellText = document.createTextNode((i - 1) * 10 + e);

        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    table.appendChild(row);
}
document.body.appendChild(table);
