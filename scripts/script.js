"use strict";

(function (){
    const player1 = { id: 1, name: 'Иван', level: 10 };

    const levelSet = new WeakSet();

    function addPlayerToLevelSet(player){
        levelSet.add(player);
    }


    const player3 = { id: 2, name: 'Иван', level: 11 };

    addPlayerToLevelSet(player1);
    addPlayerToLevelSet(player1);
    addPlayerToLevelSet(player3);

})()