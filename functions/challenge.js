const PollObj={
    Question:`What is your favourite language?
    1:Javascript
    2:Python
    3:C#
    4:SQL`,
    AnsArray:[0,0,0,0],
    Logic(){
        debugger;
       const ans=prompt(this.Question,this.Options);
       if(ans<=4 && ans>=1)
        this.AnsArray[ans-1]++;
       else
        alert("Wrong Input");
    },
    DisplayResult(type){
        debugger;
        if(type=="array"){
            console.log(this.AnsArray);
        }
        else if(type=="string"){
            console.log(`Poll Result are : ${this.AnsArray}`);
        }
    },
}

let buttons=document.querySelector(".poll");

buttons.addEventListener('click',PollObj.Logic);
