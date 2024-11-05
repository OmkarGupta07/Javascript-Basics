const getUserInfo={
    name:"EREN",
    salary:1212
    // getName:function (){
    //     return `Name of the user is ${this.name}`;
    // },
    // getPrice:function (){
    //     return `you have paid ${this.price}$ for subscription to watch ANIME`;
    // }
}
//Object.keys(getUserInfo).map((i) => {Object.values(getUserInfo).map((e) => ))}) 
const data=['eren','eren1','levi2','eren2','eren3']
let filter1 = data.filter(i =>i.startsWith("e"))
//console.log(filter1)

let abc=data.some(i =>i.startsWith("l"));
//console.log(abc);

let find1=data.find(i =>i.startsWith("l"))
//console.log(find1)
//{India:{Rupess:"INR",Amopunt:L83904850},China:{Rupees:"","indr"}}
let arob=[
{country:"India",Rupess:"INR",amount:20000} , 
{country:"US",Rupess:"USD",amount:30000} ,
{country:"India",Rupess:"INR",amount:10000},
{country:"UAE",Rupess:"AUD",amount:90000},
{country:"US",Rupess:"USD",amount:90000} ,
{country:"UAE",Rupess:"AUD",amount:50000},
 ]


// let country=arob.map(i => i.country.);
// console.log(country);

let country=[];
arob.forEach(function (a){
if(!country.includes(a.country)){
country.push(a.country);
}

})

console.log(country)


let finalvals=arob.filter(i => country.includes(i.country) , function(a,b) {

    b+=i.amount;
    return a;
    
} )

console.log(finalvals);


arob.map(i => arob.filter(a => i==a,function(b){
let sum;
sum+=b.amount;
} ))



let indiasum= arob.reduce((value,item) => {
debugger;
   if(item.country=="India"){
    value+=item.amount;
   }   
    return item. value;
},0)

//let allsum=arob.map((vals,item) =>{ vals.country==} )


country.forEach((Element) => {arob.filter(vals => Element==vals) })