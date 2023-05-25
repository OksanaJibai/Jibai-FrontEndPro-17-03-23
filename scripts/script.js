"use strict";

const container = document.getElementById('wrap');
function createTable(){
    const table = document.createElement('table');
    for(let i = 1; i <= 10; i++){
        const row = document.createElement('tr');
        for(let j = 1; j <= 10; j++){
            const cell = document.createElement('td');
            const textOfCell = document.createTextNode((i - 1) * 10 + j);

            cell.appendChild(textOfCell);
            row.appendChild(cell);
        }
        table.appendChild(row);

    }
    container.appendChild(table);
    return createTable;
}
createTable();