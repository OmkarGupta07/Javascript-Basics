//prototypee objects are linked to a prototype object  
//prototype inheritance can be implemented by construtor func,ES classes,
//Object.create
'use strict'
//constructor function is called with new keyword
//new {} obj is created 
//function is called,this={}
//it gets linked to prototype 
//return {}
const Football=function (Name,Age) {
this.Name=Name;
this.Age=Age;

}

const player=new Football('EREN',12);
//protypal inheritance
Football.prototype.ShowStats=function(){
    console.log(`${this.Name} has scored ${this.Age}`);
};

player.ShowStats()
console.log(player);

const CAR=function (Name,Speed) {
    this.Name=Name;

    this.Speed=Speed;
    
} 

CAR.prototype.Accelerate=function (){
    this.Speed+=10;
    console.log(`${this.Name} is going at ${this.Speed}`);
}

CAR.prototype.Brake=function (){
    this.Speed-=5;
    console.log(`${this.Name} is going at ${this.Speed}`);
}

const ferrari=new CAR('ferrari',190);
ferrari.Accelerate();
ferrari.Brake();