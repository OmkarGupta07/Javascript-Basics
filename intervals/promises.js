new Promise( (resolve,reject) =>{

    let err=true;

       

        setTimeout(() => {
        console.log('eren');
        }, 1000);
        if(err==true)
            resolve({username:"ereninobject",val:false,id:12});
            else
            reject("error occured");

}).then((ev)=>{
    console.log("resolved");
    return ev.id;
}).then((ev)=>console.log(ev))
.catch((error)=> console.log(error) )
.finally(()=> console.log("either solved or rejected"))

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=> console.log(response))
.catch((error) => console.log(error))