const Activity=function (amount) {
    this.amount=amount;
}

Activity.prototype.setAmount=function(amount){

    if(amount>0){
    this.amount=Number(amount);
    return true;
    }
    else{
        return false;
    }
}

Activity.prototype.getAmount=function(){
    return Number(this.amount);
}


const Payment=function(amount,receiver){
    Activity.call(amount);
    this.receiver=receiver;
}

Payment.prototype.setReceiver=function(receiver){
    this.receiver=receiver;  
}

Payment.prototype.getReceiver=function(){
    return this.receiver;
}

const Refund=function(amount,sender){
    Activity.call(amount);
    this.sender=sender;
}

Refund.prototype.setSender=function(sender){
    this.sender=sender;  
}

Refund.prototype.getSender=function(){
    return this.sender;
}
let activity = new Activity(5000);
console.log(activity.amount);
console.log(activity.getAmount());
console.log(activity.setAmount(1000));