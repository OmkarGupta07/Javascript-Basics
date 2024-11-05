function weekday(weeksdays) {
    return function(days){        
       if(days>6)  
        throw new Error('Invalid WeekDay');
       else console.log(weeksdays[days]);
    }
}
const daysoftheweek=['Mon','Tue','Wed','Thurs','Fri','Sat','Sun'];

let data=weekday(daysoftheweek);
data(10);
