const Cars=function (Name,Speed) {
    this.Name=Name;
    this.Speed=Speed;
}
Cars.prototype.brakes=function (){
    this.Speed-=10;
   // this.charge-=1;
    console.log(`${this.Name} is going at ${this.Speed}`);
}



const EV=function(Name,Speed,charge) {
    Cars.call(this,Name,Speed);
    this.charge=charge;

     
} 
EV.prototype=Object.create(Cars.prototype);

EV.prototype.ChargeBattery=function (BatteryCharge){
    this.charge=BatteryCharge;
}

EV.prototype.acls=function (){
    this.Speed+=10;
    this.charge-=1;
    console.log(`${this.Name} ${this.Speed} ${this.charge}`);

}

const BMW=new EV('BMW',80,50);

BMW.acls()
BMW.brakes()
BMW.ChargeBattery(49);
