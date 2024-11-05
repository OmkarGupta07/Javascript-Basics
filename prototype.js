function  SetUserName(username,price){
    this.username=username;
    this.price=price;
}


SetUserName.prototype.GetUsername=function(){
    return `${this.username} you have paid ${this.price}$ for being founding titan`;
}


let array=["EREN","LEVI","MIKASA","ARMIN"];


Array.prototype.GetOddNo=function(){
    for (let index = 1; index <= this.length; index+=2) {
        console.log(` ${index} :${this[index]}`);
    }
}

array.GetOddNo();


let user=new SetUserName("eren",12);
console.log(user.GetUsername());


const getUserInfo={
    name:"EREN",
    getName:function (){
        return `Name of the user is ${this.name}`;
    },
    getPrice:function (){
        return `you have paid ${this.price}$ for subscription to watch ANIME`;
    }
}

const Prices={
    price:12.90,
    __proto__:getUserInfo
}


console.log(Prices.getPrice());