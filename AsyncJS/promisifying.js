const getposition=function () {
    return new Promise(function (resolve,reject) {
        navigator.geolocation.getCurrentPosition
        (position => resolve(position),err=> reject(err));
    })
}

getposition().then(pos=>console.log(pos));