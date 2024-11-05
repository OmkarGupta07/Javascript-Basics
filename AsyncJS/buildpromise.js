const builprom=new Promise(function(resolve,reject){
   

    setTimeout(() => {
        if(Math.random() >= 0.5)
            resolve('heyy we won');
        else
            reject('we lost');
    }, 2000);
console.log('Predicting Result 💴');
})

builprom.then(res => console.log(res)).catch(err => console.log(err));

const letswait=function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds*1000);
    })
}

letswait(2).then( ()=> {console.log(`i waited 2 secs`);
    return letswait(3)}).then(() => console.log( 'i waited for 3 seconds'))

    Promise.resolve('lost').then((rex) => console.log(rex))