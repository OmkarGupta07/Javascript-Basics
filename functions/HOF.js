// Higher order functions are the functions which takes function as an argument or return function

// settimeout is example of higher order function


//blocking functions such as JSON.stringify() it blocks the code which is written ahead of it 
// set time out is non blocking function it runs in the background

//CALL BACK FUNCTIONS also implements the abstraction
const Multiplyby2=(nos) =>{
    return nos*2;
}

const multiplyby4=(nos) =>{
    return nos*4;
}



const transformnos=(nos,fn) => {
    console.log(nos);
console.log(fn(nos));

}

transformnos(89,multiplyby4);
transformnos(89,Multiplyby2);

//document.body.addEventListener('click',transformnos)


// functions returning functions



const printage=(name) => {return (age) => {console.log(`hey ${name} you are ${age}`);}}

const printall=printage('eren')

printall(11)

printage('TUPPERWARE')(32)