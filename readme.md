Вы разрабатываете игру "Подводный мир" и вам необходимо отслеживать уникальных игроков, которые достигли определенного уровня. 
Создайте функцию, которая будет принимать объект игрока и добавлять его в WeakSet, представляющий игроков, достигших целевого уровня.



Пример входных данных:

const player1 = { id: 1, name: 'Иван', level: 10 };


Пример вывода:

addPlayerToLevelSet(player1);


Ваша задача:

Создайте новый экземпляр WeakSet.
Используя объект игрока в качестве аргумента функции, добавьте его в WeakSet.
Вы можете использовать метод add() для добавления объекта игрока в WeakSet.


Примечание: WeakSet сохраняет объекты слабо, что означает, что если объект игрока больше не используется в вашей программе, WeakSet автоматически удалит его из себя, не вызывая утечек памяти.

Удачи!