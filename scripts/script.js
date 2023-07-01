"use strict";

(function (){

    const string = "abracadabra";

    const setString = new Set();

    for(const symbol of string){
        setString.add(symbol);
    }
    console.log(setString.size);
})()