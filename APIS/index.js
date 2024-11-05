$(document).ready(function () {


    ApiCalls('CATS');
   
 
  });



function ApiCalls(search) {
    debugger;
    const ApiKey='Z0xlJuFGkzi0hj8PSyxuzhp6sUWt7O5I';
    let call=`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${ApiKey}&limit=10`;

    $.ajax({
        url:call,
        dataType:'json',
        async: false,
        success:function (data) {
            debugger

            let respn=data.data;
            console.log(respn);

                for (let vals of respn)
                {
    
                    let dynamichtml=`<div><img src="${vals.images.downsized_medium.url}" alt=${vals.slug}></div>`;
                    console.log(dynamichtml);
                    $(".image-container").append(dynamichtml);
    
                }

        }
    })
    
}


let searchme=(event) =>{
//console.log(event.value);
ApiCalls(event.value)
};

