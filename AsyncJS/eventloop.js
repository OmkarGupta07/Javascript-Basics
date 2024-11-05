


console.log('test start');
setTimeout(() => {
    console.log('0 sec timer');
}, 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res))
console.log('test em ');

const wait =function (second) {
    return new Promise(function(resolve){
        setTimeout(resolve,second*1000);
    });
}

wait(2).then( _ =>{ console.log('i waited for 2minutes'); wait(3)})
.then(_ =>{console.log('i waited for 1 sec more');})
