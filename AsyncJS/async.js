//const { log } = require("async");

const request = new XMLHttpRequest();
request.open('GET','https://cat-fact.herokuapp.com/facts',true)
request.onload=() => {
console.log(request.responseText);
}
// request.send();SS
// console.log(request.responseText);
//CORS CROSS ORIGIN RESOURCE SHARING
 