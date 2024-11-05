import { timeoutseconds } from "./config";


export  const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };
  



export const getjson=async function(url){
try{
  
    const GetData=await Promise.race([fetch(url),timeout(timeoutseconds)]);
 const result=await GetData.json();
 if(GetData.ok=='failed' ||result.status=='fail')
    throw new Error(result.message);

return result;
}
catch(err){
   throw err;
}

}



export const sendjson=async function(url,data){
  try{
    debugger;
    const senddata=fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data),
    });
      const GetData=await Promise.race([senddata,timeout(timeoutseconds)]);
   const result=await GetData.json();
   if(GetData.ok=='failed' ||result.status=='fail')
      throw new Error(result.message);
  
  return result;
  }
  catch(err){
     throw err;
  }
  
  }