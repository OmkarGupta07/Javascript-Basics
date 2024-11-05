let currentDate=new Date();


console.log(`currentdate :${currentDate.toDateString()}`)
console.log(`currentdate :${currentDate.getMonth()}`)
console.log(`currentdate :${currentDate.get}`)

function daysInMonth (month, year) { 
    return new Date(year, month, 0).getDate();
  }
  
  console.log(daysInMonth(5, 2024)) 

  function GetBiggerDate(date1 ,date2) {
    

  }