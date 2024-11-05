

let obj={name:"EREN",age:12,emailId:"guptaomkar91@gmail.com"}


function Objparameter(para){

    console.log("in func")
    console.log(`${para.age}`)

}

// passing object as a parameter
Objparameter(obj);

let arr=[1,2,3,4,5,6]
function get3valueofarray(para){

    return para[1];
}
// array as a parameter
console.log(get3valueofarray(arr))


//rest operator allow you to represent an indefinite number of arguments as an array.
function implSpreadOperator(...nums){
    console.log(nums);
}

implSpreadOperator(12,34,12,432,124)

//when the function is declared in this way it is call function expression & ye case mei function declare hone kei baad hi usko call kr skrte which is not the case of traditional function 

let printsum=function (params) {
    console.log(params+2)
}
printsum(2)
