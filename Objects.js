let obj={
    name:"ACE Jr",
    age:2,
    email:"ACE@devin.com",
    info:function () {
        console.log(`${obj.name} your age is ${obj.age} your guardian is ${obj2.name}`)
    }
}


let obj2={
    name:"Jacky",
    age:2,
    email:"Jacky@shelly.com",
    
}

const happnapp={}

happnapp.name="user";
happnapp.age=12;
happnapp.infoaps=function(){
    console.log(this.age)
}

happnapp.infoaps()


let person={
    name:"user",
    gender:"M",
    FavAnime:"DBZ"
}

let wholedata={...happnapp,...person}
//console.log(wholedata)
console.log(Object.keys(wholedata));