"use strict";

(function (){

    const student = { name: 'Иван Иванов' };
    const grades = { math: 90, fiz: 85, eng: 95 };


    const studentMarks = new WeakMap();

    function saveGrades(student, grades){
        if(!studentMarks.has(student)){
            studentMarks.set(student, grades);
        }
        return studentMarks.get(student);
    }

    saveGrades(student, grades);
    saveGrades(student, grades);
    saveGrades(student, grades);

    console.log(studentMarks);

})()
