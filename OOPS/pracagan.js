const Person12=function(name,age)
{
this.name=name;
this.age=age;

}

Person12.prototype.PAge=function(){ 
    console.log(this.age);
}


let abs=new Person12('ere',12);
abs.parsa()