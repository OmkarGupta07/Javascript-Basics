
const Neymardetails={
    Name:'NEYMAR',
    Country:'BRAZIL',
    playersdata:[],
    printdata(goals,oppcountry){
        console.log(`${this.Name} player from ${this.Country} has Scored ${goals} againts ${oppcountry}`);
    this.playersdata.push({GoalsScored: goals, Rival: oppcountry })
    console.log(this.playersdata);
    }
};

// Call introduce method with person1 as context
Neymardetails.printdata(200,'Argentina')

const RonaldoDetails={
    Name:'Ronaldo',
    Country:'Portugal',
    playersdata:[],

}
// Call introduce method with person2 as context using call

Neymardetails.printdata.call(RonaldoDetails, 100, 'BRAZIL');


/////BIND/////////

// BIND RETURN FUNCTIONS 

const portugal=Neymardetails.printdata.bind(RonaldoDetails);

portugal(100,'INDIA');

const RONALDO1000=Neymardetails.printdata.bind(RonaldoDetails,100);
RONALDO1000('ARGS')

RONALDO1000('UK')

// CHALLENGE

const getrate = rate => {return (vals)=> console.log( vals+vals*rate); }

getrate(0.23)(200);

// call: The call method invokes a function with a specified this value and individual arguments passed as separate arguments. It allows you to borrow functions from one object and invoke them in the context of another.
// apply: Similar to call, the apply method invokes a function with a specified this value, but it takes an array or an array-like object as its second argument, allowing you to pass a variable number of arguments to the function.
// bind: The bind method creates a new function that, when called, has its this value set to a specific value and prepends any provided arguments to the original function's arguments list. It is often used to create functions with preset contexts or partially applied arguments.
