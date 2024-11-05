let bts=document.getElementById('promps');
const req=function (code){ 
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${code}`)
    .then(data =>{
      console.log(data);

  if(!data.ok)
    throw new Error(`currency not found ${data.status}`)

        return data.json();

    }).then((data)=>{
      document.getElementById('dataimage').setAttribute('src',data[0].image);
      return data[0].image;
    })
    .catch(err => console.error(`${err} 💣💣`))
    .finally( ()=>alert('hey boii it worked'))
    
    };
     setTimeout(() => {
      req('inri');
    }, 1000)
