//basic promise
//Create a promise that resolves with a greeting message ("Hello, World!") after 2 seconds. Log the message to the console.
const wait=function (seconds,res=true){
    return new Promise(function(resolve,reject){
    setTimeout(() => {
        res==true ? resolve(`resolved after ${seconds}`) : reject(`Promise is rejected after ${seconds}`);
            
        }, seconds*1000)
    });
}

async function newval(){

    const data=await wait(2);
    console.log(data);
}
//newval();

//2 Create a promise that simulates an API call and randomly either resolves with "Data fetched successfully" or rejects with "Failed to fetch data". Handle both cases 

const printcountry1=async function(name){
    try {
        debugger
 const response=await fetch(`https://restcountries.com/v3.1/name/${name}`);
 
 if (!response.ok) {
    throw new Error(`Country not found (${response.status})`);
}
 const countrname=await response.json();
 console.log(countrname[0].capital);
    } catch (error) {
        console.log(error);
    }
}



const printcountry=async function(name){
    try {
        debugger
 const datacountry=await fetch(`https://restcountries.com/v3.1/name/${name}`);
 const countrname=await datacountry.json();
 console.log(countrname[0].capital);
    } catch (error) {
        console.log(error);
    }
}

//printcountry('India');

//3 promisee all

async function usingpromiseall(){
const allval=Promise.all([wait(1),wait(2),wait(3)]);
//console.log(allval);
const result=await allval;
result.map(val=> console.log(val))

}
//usingpromiseall()

// 4 Promise Race

async function usingpromiserace(){
    const result=Promise.race([wait(1),wait(2),wait(3)]);
    const value=await result;
    console.log(value);

}
//usingpromiserace()

//5 promise allsettled 
async function allsettle(){
    const result=Promise.allSettled([wait(1),wait(2,false),wait(3),wait(4,false)]);
    const getvalue=await result;
    //console.log(getvalue);
    getvalue.map(ele => console.log(ele.value));
}
//allsettle();

//chainning promise


async function chainingpromise(no){
const value= no+5;
    await wait(1);
const mul= value*2;
    await wait(1);
const sub= mul-3;
console.log(sub);
}
chainingpromise(20);


const FetchWait= function (country,seconds,status=true){
try{
    return new Promise( function(resolve,reject){
        setTimeout(async () => {
            if(status==false)
                reject('Promise rejected');
            else{
                try{
            const apidata=await fetch(`https://restcountries.com/v3.1/name/${country}`) 
            const result=await apidata.json();
            resolve(result);}
            catch(error){
console.log(error);
            }
         }
         
        }, seconds*1000);
    })
}
catch(error){
    console.log(error);
    //reject(error);
}

}
async function resolveadvancewait(){
    debugger
const reultdata=Promise.any([FetchWait('India',3),FetchWait('China',1,false),FetchWait('Egypt',2)]);
const value=await  reultdata;
console.log(value);
}

resolveadvancewait()