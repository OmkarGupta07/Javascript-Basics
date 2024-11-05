// hoisting moves variable and function declarations to the top of their scope.This enables the use of variables and functions before they appear in the code.
console.log(variable) // undefined
var variable = "Hi";
console.log(variable) // Hi
// when the variable are declare with var keyword they are hoisted at top of the scope and default value initialised to them is undefined


//console.log(y); // Throws ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y);
// variable declare with let and const are also hoisted at top of the scope but they are not initialised with default value i.e we get error AKA TEMPORAL DEAD ZONE [TDZ]

//Function declarations are hoisted entirely, meaning you can use them before they are defined in the code without errors this doesn't work with function expression.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// undefined vs not defined

//It works like when we declared a variable in the code but did not assign the value before printing the variable value	- undefined
//It works like when we did not declare the variable and try to call that variable. -not defined

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// block scope - A block scope  is used to group one or more statements eg if & else . let & const are blocked scope whereas var is a global scope 

{

    var a=10;
    let b=11;
    const c=13;

    console.log(a);
    console.log(b);
    console.log(c);

}

console.log(a);
//console.log(b);
//console.log(c);

/////////////////////////////////////////////////////////////////////// SHADOWING //////////////////////////////////////////////////////////////////////////////////////////////

//When a local variable within a function or block has the same name as a variable in another scope, this is known as shadowing.

var a = 'Geeks';
     
    if (true) {
        var a = 'GeeksforGeeks';  // New value assigned
        console.log(a); 
    }
     
    console.log(a); // it will print GeeksforGeeks illegal shadowing

    ////////Excecution Context 
    // global ec
    // function ec
    //The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

    //Memory phase During this phase,it allocates the memory to the variable and functins  JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition
