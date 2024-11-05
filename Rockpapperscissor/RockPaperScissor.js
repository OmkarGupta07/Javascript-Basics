let a=["Rock","paper","scissor"]

function RockPaperScissor(val){
    debugger;
    let RandomNumber=Math.floor(Math.random()*3);
    //let Weapon=a[RandomNumber];
    
    if(a[RandomNumber] == "scissor"){
        $('#computersimage').attr('src', 'cut-with-scissors.png');

    }
    else if(a[RandomNumber] == "paper"){
        $('#computersimage').attr('src', 'blank-page.png');

    }
    else{
        $('#computersimage').attr('src', 'stone.png');

    }

    $("#computersimage").removeAttr("hidden")

    if(val===a[RandomNumber]){
        console.log("tie")
    }
       else if(val == "Rock" && a[RandomNumber] == "scissor" || val == "paper" && a[RandomNumber] == "Rock" || val == "scissor" && a[RandomNumber] == "paper"){
          
       alert(`${val} wins over ${a[RandomNumber]}`)
    }
    else {
        alert(`${val} lost over ${a[RandomNumber]}`)
    }
        
}

$(document).ready(function(){

    $('img').click(function() {

        if($(this).attr("alt") != "ComputersValue")
            RockPaperScissor($(this).attr("alt"));
        else
            alert("wrong input");
    });

});
