const Person=function (Fname,Age) {
    this.Fname=Fname;
    this.Age=Age;
}
Person.prototype.DisplayAge=function () {
    console.log(this.Age);
}
const Student=function (Fname,Age,Course) {
    // this.Fname=Fname;
    // this.Age=Age;
    Person.call(this,Fname,Age);
    this.Course=Course;
}

Student.prototype.Intro=function () {
    console.log(`${this.Fname} is ${this.Age} in ${this.Course}`);
}

const Eren=new Student('Eren',14,'AOT');
Eren.Intro()