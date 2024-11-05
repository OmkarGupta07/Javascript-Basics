const url="https://api.github.com/users/hiteshchoudhary"
//var XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', url, true);

xhr.onreadystatechange = function() {
    debugger
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // Request was successful, handle response
      const xmlData = xhr.responseXML;
      console.log(xmlData); // XML data
    } else {
      // Request failed
      console.error('Request failed with status:', xhr.status);
    }
  }
};

xhr.send();
