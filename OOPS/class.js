class Cars {
    constructor(Name,HorsePower){
        this.Name=Name;
        this.HorsePower=HorsePower;
    }
//getters & setters
    get SpeedUS(){
        return this.HorsePower/1.6;
    }
    set SpeedUS(speed){
        this.HorsePower=speed*1.6;
    }
   
    Accelerate(){this.HorsePower+=10;
        console.log(`${this.Name} is going at ${this.HorsePower}`);
    }
    Brake(){
        this.HorsePower-=5;
        console.log(`${this.Name} is going at ${this.HorsePower}`);
    }
}

const BMW=new Cars('BMW',120);
//BMW.DisplaySpecs();
BMW.SpeedUS=50;
BMW.Accelerate();
BMW.Brake();
//classes are not hoisted , class are first class citizens , it is executed in strict mode


 //console.log(BMW.Speed);
//inheritance
class Person {
    constructor(Name,Age){
        this.Name=Name;
        this.Age=Age;
    }

}
Person.prototype.displayinfo=function (){
    console.log(`${this.Name} is ${this.Age}`);
}


class Student extends Person{
    constructor(Name,Age,course){
       super(Name,Age);
       this.course=course;
    }

    Accelerate(){
        console.log(`${this.Name} is going at ${this.course}`);
    }

}