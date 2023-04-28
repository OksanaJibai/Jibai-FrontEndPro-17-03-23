'use strict';

class SuperMath {
    check(obj) {
        const { X, Y, znak } = obj;
        let result = null;

        switch (true){
            case (znak === '/' || znak === '%'  && Y === 0) : {
                alert('Ділити на нуль не можна');
                return this.input();
            }
            case znak === '/' : {
                result = X / Y;
                break;
            }
            case znak === '*' : {
                result = X * Y;
                break;
            }
            case znak === '+' : {
                result = X + Y;
                break;
            }
            case znak === '-' : {
                result = X - Y;
                break;
            }
            case (znak === '%') : {
                result = X % Y;
                break;
            }
            default :
                alert('Невірний знак дії');
                return this.input();
        }

        const confirmMsg = `Хочете провести дію ${X} ${znak} ${Y}?`;
        const confirmed = confirm(confirmMsg);

        if (confirmed) {
            alert(`${result}`);
        } else {
            this.input();
        }
    }

    input() {
        const X = Number(prompt("Введіть число X"));
        const Y = Number(prompt("Введіть число Y"));
        if(isNaN(X) || isNaN(Y)){
            alert('Невірне значення числа');
            this.input();
        }else {
            const znak = prompt("Введіть оператор дії (+, -, *, /, %)");
            this.check({X, Y, znak});
        }
    }
}

const p = new SuperMath();
p.input();
