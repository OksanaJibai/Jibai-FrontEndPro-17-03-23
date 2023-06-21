"use strict";

const PRESENT_YEAR = 2023;
function Student(name,lastName,yearBirth){
    this.name = name;
    this.lastName = lastName;
    this.yearBirth = yearBirth;

    this.visiting = new Array(10);
    this.marks = new Array(10);
    this.visitingCount = 0;
    this.marksCount = 0;

    Student.prototype.getAge = function (){
        return  PRESENT_YEAR - this.yearBirth;
    };

    Student.prototype.present = function (){
        if(this.visitingCount < 10){
            this.visiting[this.visitingCount] = true;
            this.visitingCount++;
        }
    };

    Student.prototype.absent = function (){
        if(this.visitingCount < 10){
            this.visiting[this.visitingCount] = false;
            this.visitingCount++;
        }
    };

    Student.prototype.mark = function (grade){
        if(this.marksCount < 10){
            if(grade >= 0 && grade <= 10){
                this.marks[this.marksCount] = grade;
                this.marksCount++;
            }
        }
    };

    Student.prototype.getAverageGrade = function (){
        let sum =  this.marks.reduce((acc,item) => acc + item, 0);
            return sum/this.marksCount;
    };

    Student.prototype.getAttendancePercentage = function (){
        let presentCount = this.visiting.filter(item => item === true).length;
        return presentCount / this.marksCount;
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
console.log(student1.getAge());
console.log(student1.getAttendancePercentage());
console.log(student1.getAverageGrade());
console.log(student1.summary());

student2.present();
student2.present();
student2.present();
student2.mark(10);
student2.mark(10);
student2.mark(9);
console.log(student2.getAge());
console.log(student2.getAttendancePercentage());
console.log(student2.getAverageGrade());
console.log(student2.summary());