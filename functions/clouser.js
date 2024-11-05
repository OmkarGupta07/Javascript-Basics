//CLOSURE - A function has the access to the variable environment of the execution context in which it was created even after that excecution context is gone



const closure=function () {
    let passengercount=0;

    return ()=>{
        passengercount++;
        console.log(passengercount);
    }
}

const book=closure();
// book();

// book();

// book();
//closure example 1
let v1;


const f1=() =>{
    const a=24;
    v1=() => (console.log(a*2))
}

const h=() => {
    const b=90;
    v1=() => (console.log(b*2))
}

f1();
v1();
// re assigning 
h();
v1();
console.dir(v1)


//closure example 2

const boardpassenger=(n,wait) =>{
    const pergroup=n/3;

    setTimeout(() => {
        console.log(`we all are boarding all ${n} ${pergroup}`);
    }, wait*1000);

    console.log(`will start in ${wait} sec`);
}

boardpassenger(100,3);
//challenge 