const authcode='743873916125348817605x55504';

const geocode=function(lat,long,authcode){
fetch(`https://geocode.xyz/${lat},${long}?geoit=json&auth=${authcode}`)
.then((data) => {
    //console.log(data)
    if(data.status==403)
        throw new Error('Something went wrong ❌❌❌❌')

   return data.json() })
.then((dataval => {
console.log(`You're in ${dataval.staddress},${dataval.country}`) 
return fetch(`https://restcountries.com/v3.1/name/${dataval.country}`) }
))
.then((data) =>{
     return data.json();
}
)
.then((data) =>{ console.log(data[0].flags.png)
    document.getElementById('dataimage').setAttribute('src',data[0].flags.png);
    document.getElementById('description').innerText(data[0].flags.alt);
})
.catch(err => console.error(`some thing is wrong :${err}`) )
.finally(()=>console.log('heyy it worked'))


}

geocode(51.50354,-0.12768,authcode)
console.log('hey broo');