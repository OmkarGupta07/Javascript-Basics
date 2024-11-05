const juliasarr=[1,2,6,4,8];
const katearr=[3,2,9,3,7];


const research=(julias,kates) =>{
debugger;
    const wrongdata=julias;
    const juliascorrectdata=wrongdata.slice(1,3);
    const resultarray=[...juliascorrectdata , ...kates];

    resultarray.forEach(    (Element,index) => {
        let data= Element>=3 ? `is an Adult` : `is still Puppy` ;
            console.log(`Dog No ${index+1} ${data} ${Element}`);
    }) 


}

research(juliasarr,katearr);





const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];

  const finddata=accounts.find( items => items.owner==='Sarah Smith')
  console.log(finddata);

  const movements2= [[200, -200], [[340], -300], -20, 50, 400, -460];
console.log(movements2.flat());


//const allarray=accounts.movements.map(acc => acc);
//const allmove=allarray.flat();

//flatmap
//onst abrr=accounts.movements.flatmap(acc => acc)

let data =[200, 450, -400, 3000, -650, -130, 70, 1300] ;
//ASCENDING
data.sort((a,b) => a>b ? 1 : -1)
console.log(data);

//DESCENDING

data.sort((a,b) => a>b ? -1 : 1)
console.log(data);

/// creating array 
const arrdat=new Array(5);
arrdat.fill(9)
console.log(arrdat);
arrdat.fill(91,2,4)
console.log(arrdat);

const a=Array.from({length:4 },(curr,i) => i+1)
console.log(a);

///////////////
console.log('/////////////////ANOTHER CHALLENGE/////////////////');
//value of allthe array in one array
let alldata=accounts.flatMap( element => element.movements).filter(currelement => currelement>0).reduce((acc,ele) => acc+ele,0);
console.log(alldata);

let oneK1=accounts.flatMap( element => element.movements).filter(currelement => currelement>1000)
console.log(oneK1.length);

let oneK2=accounts.flatMap( element => element.movements).reduce((acc,ele) => ele>1000 ? acc+=1 :acc ,0)
console.log(oneK2);

//addof depo and withdrwal
let sumall=accounts
.flatMap( element => element.movements).
reduce((acc,ele) => 
  {ele>0 ? (acc.deposit+=ele) :(acc.withdrawal+=ele); 
    return acc;
  } ,

{deposit:0 ,withdrawal:0})
console.log(sumall);
///title case challenge
//'this is a nice title'
//const converttitlrcase=(abc) => abc.split().map(ele => ele.length>1 ? ele[0].to)


