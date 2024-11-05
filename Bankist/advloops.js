const movements= [200, -200, 340, -300, -20, 50, 400, -460];
let temp = movements.map( item=> item*2  )

console.log(temp);
/////////MAP
let abc=movements.map((element) => element > 100 ? `hey pos` : `hey neg`);
console.log(abc);



// challenge
const username='The Eren Yeager'
let resultss=username.toLocaleLowerCase().split(' ').map(Element => Element[0])
console.log(resultss.join(''))

/////////FILTER
let posarr=movements.filter( item =>  item<0)
console.log(posarr);



/////////REDUCE
//ACCUMLATOR IS LIKE SNOWBALL
const balance12=movements.
reduce((acc,element) => acc>element ? acc :element ,movements[0])
console.log(balance12);

///challenge
console.log('////////CHALLENGE ////////////');
let dogsdata=[5,2,4,1,8,3,15]

let humanage=dogsdata
.map((elements) =>  elements<=2 ?2*elements :(4*elements)+16 )
.filter((element)=> element>18 )
.reduce((acc,ele,idx,arr) => acc+ele / arr.length ,0)
console.log(humanage);
console.log('////////CHALLENGE ////////////');

// let agefilter=humanage.filter((element)=> element>18 )
// console.log(agefilter);
// let averageage=agefilter.reduce((acc,ele) => acc+ele ,0) / dogsdata.length
// console.log(averageage);

///CHAINING
let Creditbalance=movements
.filter((item,idx,arr) => item >0)
.map( (item,idx,arr) => item *1.1)
.reduce((acc,item,idx,arr) => acc+item,0)
console.log(Creditbalance);


const deposit=movements.some(move => move>200000)
console.log(deposit);

const eve=movements.every(move => move<0)
console.log(eve);
const movements2= [[200, -200], [[340], -300], -20, 50, 400, -460];
console.log(movements2.flat());
