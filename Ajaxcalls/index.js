
$(document).ready(function () {
    $.ajax({
    url: 'https://api.github.com/users/hiteshchoudhary',
    dataType: 'json',
    success: function(data) {
        debugger
      console.log(data);
    }
  });

 
  });

