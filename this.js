//akshay saini 
"use strict";

// USE BROWSER TO PRACTICE THIS KEYWORD
//this keyword in global space refer to globalobject i.e window,global
//Arrow functions, as part of ES6 syntax, do NOT have their own 'this' keyword
function x(){
    
    //the value of this is dependent on strict / non strict mode 
    //value of this keyword when strict mode is on it is undefined 
    //when strict mode is off it is global object as it uses this substituion 
    
    console.log(this)
}

// strict mode
// the value of this is also depend on how the function is called
x(); // this will have  undefined value 
//window.x(); //  this will have window / global as   value 

let obj={
    // in object when we are using this keyword it point towards the current object
    name:'AKSHAY',
    printname:function (){
        console.log(this.name)
    },
    arrow:()=>{
        /* 'this' inside the arrow function is not bound to our call object
        , but instead is already bound to where the call object is being created originally, which in this case is the global object */
        
        //SO the value of this key will be window / global as my object is present global scope
        console.log(this)
    },
    thisexmp:function(){
        let log=() =>{
            console.log(this)
        }
        log()

        //here it will point towards the current object as it is created inside the function so its lexcial context is object
    }



}

obj.printname();
