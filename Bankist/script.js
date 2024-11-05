'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



const DisplayMovements=(move,sort=false)=>{
  containerMovements.innerHTML='';

const movs = sort ? movements.slice().sort((a,b) => a-b ) : movements;



movs.forEach( (element,index) => {

  const type= element>0 ? 'deposit' : 'withdrawal' ; 

  const Temphtml=`<div class="movements__row">
  <div class="movements__type movements__type--${type}">${index+1} ${type}</div>
  <div class="movements__date">3 days ago</div>
  <div class="movements__value">${element}💷</div>
</div>`;
containerMovements.insertAdjacentHTML('afterbegin',Temphtml)
});
}




let caldisplaybalance=(movements) =>{
  const dispbalance=movements.movements.reduce((acc,element) => { return acc+element},0)
  labelBalance.innerHTML=`${dispbalance} EUR`
  movements.balance=dispbalance;

}


const calcDisplayIncomingBalance=(movements => {
  const income=movements
  .filter(element => element>0 )
  .reduce((acc,currele) => acc+currele,0);

  labelSumIn.textContent=`${income}💷`;
})



const calcDisplayOutBalance=(movements => {
  const income=movements
  .filter(element => element<0 )
  .reduce((acc,currele) => acc+currele,0);

  labelSumOut.textContent=`${income}💷`;
})


const calcDisplayInterest=(acc => {
  
  const Interest=acc.movements
  .filter(  (element) => element>0 )
  .map(element => (element*acc.interestRate)/100)
  .filter(element => element>=1 )
  .reduce(  (acc,ele) => acc+ele,0);

  labelSumInterest.textContent=`${Interest}💷`;
})


const updateUI=(currentuser) =>{
  DisplayMovements(currentuser.movements)

caldisplaybalance(currentuser);

calcDisplayIncomingBalance(currentuser.movements);

calcDisplayOutBalance(currentuser.movements);

calcDisplayInterest(currentuser);
} 

let currentuser;
btnLogin.addEventListener('click',(e) => {
  e.preventDefault();
   currentuser=accounts.find((element) => element.owner===inputLoginUsername.value)
  if(currentuser?.pin==Number(inputLoginPin.value))
{
  labelWelcome.textContent=`Welcome Back 
  ${currentuser.owner.split(" ")[0]}`
} 
inputLoginUsername.value = inputLoginPin.value ='';
containerApp.style.opacity=100;
updateUI(currentuser)
})






btnTransfer.addEventListener('click',(e) => {
  e.preventDefault();
  const amount=Number(inputTransferAmount.value);
  const transferedto=accounts.find( acc => acc.owner==inputTransferTo.value)
  console.log(amount,transferedto);
  inputTransferAmount.value=inputTransferTo.value='';
  //
  if(amount>0 && transferedto && transferedto?.owner !== currentuser.owner && currentuser.balance >=amount){
    console.log(`Transfer Valid`);
    currentuser.movements.push(-amount);
    transferedto.movements.push(amount);
    updateUI(currentuser);
  }
})


btnClose.addEventListener('click',movements =>{
if(inputCloseUsername.value===currentuser.owner && currentuser?.pin===Number(inputClosePin.value)){

  const index=accounts.findIndex(acc => acc.owner===inputCloseUsername.value);
  accounts.splice(index,1);
  containerApp.style.opacity=0;
}
inputCloseUsername.value=inputClosePin.value='';

})


btnLoan.addEventListener('click',(e) => {
  e.preventDefault();
  const amount=Number(inputLoanAmount.value);
  if( amount>0 
  && currentuser.movements.some(mov => mov>=amount*0.1 ) ){
    currentuser.movements.push(amount);
    updateUI(currentuser);
  }
  inputLoanAmount.value='';
})

let sort=false;
btnSort.addEventListener('click',(e)=>{e.preventDefault(); DisplayMovements(currentuser.movements,!sort)
   sort=!sort; 
  });

  const movementsui=Array.from(document.querySelectorAll('.movements_value'))
  movementsui.map()
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
