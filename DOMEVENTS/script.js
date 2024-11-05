'use strict';

///////////////////////////////////////
// Modal window
const header =document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach( ele => ele.addEventListener('click', openModal)
)

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  } 
});
const message=document.createElement('div')
message.classList.add('cookie-message');
message.innerHTML='We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>';
//header.prepend(message);
header.append(message);
//header.before(message)
//header.after(message)

document.querySelector('.btn--close-cookie').addEventListener('click',() =>{
  message.remove();
  //old 
  //message.parentElement.removeChild(message);
})

message.style.backgroundColor='#37383d';
message.style.width='120%';
console.log(message.style.color);
console.log(getComputedStyle(message).height);
message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+40+'px';

const btnscrollto=document.querySelector('.btn--scroll-to');

const section=document.querySelector('#section--1');


btnscrollto.addEventListener('click',(e) =>{
    section.scrollIntoView({behavior:'smooth'})
})

document.documentElement.style.setProperty('--color-primary','orangered');

const logo=document.querySelector('.nav__logo');
console.log(logo.getAttribute('alt'));
logo.setAttribute('alt','Beauty bro')
console.log(logo.getAttribute('alt'));


const link=document.querySelector('.nav__link');
console.log(link.getAttribute('href') );

 const randomnumberggen=(max,min) => Math.floor(Math.random() * (max - min +1)+min);

 const randomcolor=()=>{
   `rgb(${randomnumberggen(0,255)},${randomnumberggen(0,255)},${randomnumberggen(0,255)})`;
 };


 document.querySelector('.nav_link').addEventListener('click',(e)=>{
  this.style.color=randomcolor();
});



document.querySelector('.nav_links').addEventListener('click',(e)=>{
  this.style.color=randomcolor();
});



document.querySelector('.nav').addEventListener(
  'click',
  (n)=>{this.style.backgroundColor=randomcolor(); });