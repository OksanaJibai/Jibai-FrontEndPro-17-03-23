"use strict";

(function (){
    function Student(name,lastName,yearBirth){
        this.name = name;
        this.lastName = lastName;
        this.yearBirth = yearBirth;

        this.visiting = new Array(10);
        this.marks = new Array(10);
        this.visitingCount = 0;
        this.marksCount = 0;

        Student.prototype.getAge = function (){
            const PRESENT_YEAR = new Date().getFullYear();
            return  PRESENT_YEAR - this.yearBirth;
        };

        Student.prototype.setAttendance = function (attended){
            if(this.visitingCount < 10){
                this.visiting[this.visitingCount] = attended;
                this.visitingCount++;
            }
        };

        Student.prototype.present = function (){
            this.setAttendance(true);
        };

        Student.prototype.absent = function (){
            this.setAttendance(false);
        };

        Student.prototype.mark = function (grade){
            if(this.marksCount < 10){
                if(this.visiting[this.marksCount] === false ||
                    this.visiting[this.marksCount] === undefined){
                    this.marks[this.marksCount] = 0;
                }else{
                    this.marks[this.marksCount] = grade;
                }
                this.marksCount++;
            }
        };

        Student.prototype.getAverageGrade = function (){
            let sum =  this.marks.reduce((acc,item) => acc + item, 0);
            return sum/this.visitingCount;
        };

        Student.prototype.getAttendancePercentage = function (){
            let presentCount = this.visiting.filter(item => item === true).length;
            return presentCount / this.visitingCount;
        };

        Student.prototype.summary = function (){
            const averageGrade = this.getAverageGrade();
            const attendancePercentage = this.getAttendancePercentage();
            if(averageGrade > 9 && attendancePercentage > 0.9){
                return "Ути какой молодчинка!";
            } else if(averageGrade < 9 || attendancePercentage < 0.9){
                return "Норм, но можно лучше";
            }else{
                return "Редиска!";
            }
        };
    }

    const student1 = new Student('Oksana', 'Jibai', 1992);
    const student2 = new Student('Paulina', 'Marinich', 1985);

    student1.absent();
    student1.present();
    student1.present();
    student1.mark(5);
    student1.mark(10);
    student1.mark(8);
    student1.mark(8);
    console.log(student1);
    console.log(student1.getAge());
    console.log(student1.getAttendancePercentage());
    console.log(student1.getAverageGrade());
    console.log(student1.summary());

    student2.absent();
    student2.mark(10);
    student2.present();
    student2.present();
    student2.mark(10);
    student2.mark(10);
    console.log(student2);
    console.log(student2.getAge());
    console.log(student2.getAttendancePercentage());
    console.log(student2.getAverageGrade());
    console.log(student2.summary());
})()