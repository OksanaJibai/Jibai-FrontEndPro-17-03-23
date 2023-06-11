"use strict";
(function () {

    function deepFreeze(obj){
        const propNames = Object.getOwnPropertyNames(obj);

        propNames.forEach(name => {
            const prop = obj[name];

            if(typeof prop === 'object' && prop !== null && !Object.isFrozen(prop)){
                deepFreeze(prop);
            }
        })
        return Object.freeze(obj);
    }

    const user = {
        data: {
            a: 1,
            b: 2,
            c: 3,
            d: {
                a1: 1,
                b1: 2,
                c1: 3,
                d1: {
                    a2: 3,
                    b2: 3,
                    c2: 3,
                }
            },
        }
    };

    deepFreeze(user);


})()
