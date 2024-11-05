const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
  
      return response.json();
    });
  };




const country3=async function (p1,p2,p3) {
    try{
// const [data1]=await getJSON(`https://restcountries.com/v3.1/name/${p1}`);

// const [data2]=await getJSON(`https://restcountries.com/v3.1/name/${p2}`);

// const [data3]=await getJSON(`https://restcountries.com/v3.1/name/${p3}`);

const alldaata=Promise.all([getJSON(`https://restcountries.com/v3.1/name/${p1}`),
    getJSON(`https://restcountries.com/v3.1/name/${p2}`),
    getJSON(`https://restcountries.com/v3.1/name/${p3}`)
])

console.log(alldaata);
    }
    catch(err){
        console.log(err.message);
    }
}



  //country3('India','Canada','China')

//   (async function(){
// const result=await Promise.all([getJSON(`https://restcountries.com/v3.1/name/india`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`)
// ]);
// console.log(result[0]);
//   })();

  const timeout=function (s) {
    return new Promise(function(_,reject){
        setTimeout(() => {
            reject(new Error('Request took to long'));
        }, s);
    })
  }

  Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
    timeout(1)]
  ).then(res => console.log(res[0]))
  .catch(val => console.log(val))