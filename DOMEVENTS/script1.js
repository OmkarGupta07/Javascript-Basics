//const message = 'Hello world' // Try edit me

// Update header text
var divboi=document.querySelector("div");
var button=document.querySelector("button");
//bubbling child to parent 
// caputring parent to child
// Log to console
divboi.addEventListener('click',(e)=>{
  console.log('hey  boi ')
})

button.addEventListener('click',(e)=>{
  //stopPropagation stops bubbling
  //e.stopPropagation();
  console.log('hey button  boi ')
})
button.addEventListener('click',(e)=>{
  e.stopImmediatePropagation();
  console.log('hey button  boi 1')
})


// caputring parent to child

// divboi.addEventListener('click',()=>{
//   console.log('hey  boi ')
// },true)

// button.addEventListener('click',()=>{
//   console.log('hey button  boi ')
// },true)