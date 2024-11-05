class userInfo{
    constructor(username,price,email){
        this.username=username;
        this.price=price;
        this.email=email;
    }
    static PrintUser(para1,para2,para3){
        console.log(`username:${para1}| price:${para2} | email:${para3}`);
    }
    getusername(){
        return this.username;
    }
    setUserName(username){
    if (username.length<3) {
            console.log("invalid namae")
    }

 }
   
}
class MonthlyPlan extends userInfo{

constructor(price,username){
    super(price)
    super(username)
}

TellPlans(){
    if(this.price<10){
        console.log(`Your subscription is valid till ${1} months`);
    }
    else{
        console.log(`${this.username} subscription is valid till ${4} months
        you payed ${this.price}`);
    }
}
}

//let user=new userInfo("eren",121,"eren@gmail.com");

//userInfo.PrintUser(user.username,user.price,user.email);

// console.log(user.getusername());

// user.setUserName("AB");

// console.log(user.getusername());

let  plans=new MonthlyPlan(16,"eren");

plans.TellPlans();

