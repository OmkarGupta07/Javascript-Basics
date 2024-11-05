const dogs=[{weight:22, currFood:250,owner:['Alice' , 'Bob']},
{weight:8, currFood:200,owner:['Matilda']},
{weight:13, currFood:275,owner:['Sarah' , 'John']},
{weight:32, currFood:340,owner:['Michael']}];




///FIRST
const Recomendedfood=dogs.map(currele =>  currele.recommendedPortion=currele.weight**0.75*28 );
console.log(dogs);

///Second
const SarahDogUpdate=dogs.filter(curele => 
    {
        if(curele.owner.includes('Sarah')) {
            console.log(`Sarah's Dog ${curele.currFood>curele.recommendedPortion ? 'Eats too much' : 'Eats too little'} `) ; }
        } );
//console.log(SarahDogUpdate);

///THIRD
const OwnersData=dogs.reduce((acc,ele) => {
    // if(ele.currFood>ele.recommendedPortion){
    //     acc.EatToMuch.push(ele.owner)  
    //     return acc;}
    // else{
    // acc.EatToLess.push(ele.owner)
    // return acc;}

        ele.currFood>ele.recommendedPortion ? acc.EatToMuch.push(ele.owner)  
: acc.EatToLess.push(ele.owner) 
return acc;
}

,{EatToMuch: [] ,EatToLess:[]} )


console.log(OwnersData);

//fourth
console.log(OwnersData.EatToMuch.flat().join(" and ")+' dogs Eat To Much ');
console.log(OwnersData.EatToLess.flat().join(" and ")+' dogs Eat To Less ');

//five
let CheckAllDog=dogs.some(ele => ele.currFood===ele.recommendedPortion);
console.log(CheckAllDog);

//six
const Doggychk=dogs.some(ele =>  ele.currFood>(ele.recommendedPortion*0.90) && (ele.recommendedPortion*1.10) < ele.currFood  )
console.log(Doggychk);

//seven
const Doggyoky=dogs.filter(ele =>  ele.currFood>(ele.recommendedPortion*0.90) && (ele.recommendedPortion*1.10) < ele.currFood  )
console.log(Doggyoky);
console.log('lastdata');
//eight
const sortdata=dogs.slice().sort((a,b) => a.recommendedPortion>b.recommendedPortion ? 1 : -1 );
console.log(sortdata);