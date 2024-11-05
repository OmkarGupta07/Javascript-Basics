const authcode='743873916125348817605x55504';
const lat=51.50354;const long=-0.12768

const whereareyou=async function(){
  const result=await fetch(`https://geocode.xyz/${lat},${long}?geoit=json&auth=${authcode}`);
    const data=await result.json();
    console.log(data);
    return  `you are in ${data.city}`
}

const result=whereareyou();
result.then(city => console.log(city));
console.log('yoo boi');