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
        //img.className='parallel';
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

const imgarr=['./img1.jpeg','./img2.jpeg'];



const value=imgarr.map(async function(element){ 
    let tempdata=await CreateImage(element);
    //console.log(tempdata);
    return tempdata;
})

console.log(value);