const newwait=function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve,seconds*1000);
    });
}


var divcont=document.querySelector('.cont');

var img;
const CreateImage=function(src){
    return new Promise(function(resolve,reject){
         img=document.createElement('img');
        img.className='parallel';
        img.src=src;

        img.addEventListener('load',_ =>{
            divcont.append(img);
            resolve(img);
        })
        img.addEventListener("error",()=>{
            reject(Error('Something went wrong ❌❌❌❌'));
        })
      
    })
}

let currentimage;

CreateImage('./img1.jpeg').then(val => {
   console.log('image is loaded')
   return newwait(2)
    }).then(_ => { 
        img.style.display='none';
        return CreateImage('./img2.jpeg')
       }).then(val2 => {
        currentimage=val2;
        console.log('waiting again')
        return newwait(2);
       }).then(val3=>{
        img.style.display='none';
       })

.catch(err => console.log(err));

//CreateImage('./img1.jpeg');


