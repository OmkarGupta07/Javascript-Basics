let sum=(a,b) =>  a+b; 

let printno=(a) => {console.log(a);} 


let randomno=() => Math.random().toFixed(2)*2


    //console.log(sum(1,2))
//printno(3)
//console.log(randomno())


let obj={
    name:'EREN',
    age:12,
    namearrow:() => {console.log(this.name)} ,
    normalfunc:function () {
        console.log(this.name)
    }
}


obj.namearrow()
obj.normalfunc()