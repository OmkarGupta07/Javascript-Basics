let a=[1,2,3,4,5,6,7,8]

//
a.push(9);
a.push(10);

a.pop();

//unshift add the element to the array from the initial point
console.log(a.unshift(-1,0) )
//shift removes the element from the initial point 
console.log(a.shift());

console.log(a);
//slice returns the element from the first parameter but it does not include the element of 2nd parameter it does not modify the original array 
let sliceresult=a.slice(1,4)
console.log(sliceresult)

//Splice returns the element from the first parameter  it also include the element of 2nd parameter unlike slice it modifies the original array it delete the element
let spliceres=a.splice(1,4);
console.log(spliceres)
console.log(a)

let c=[9,10,11,12,13,14]

a.push(c)

console.log(a)

const movements=[200,300,400,-400,350,7899]

movements.forEach((elements)=> console.log(elements))



//creates a new array with all sub-array elements does not modify the orignal array
let flt=a.flat(Infinity)

// from returns an array from any iterable object

let resva=Array.from('ABCDEFG');

//of creates a new Array from a variable number of arguments,
let vals=Array.of(11,22,113,553,1324)
console.log(vals)

