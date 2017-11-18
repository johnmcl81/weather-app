const request = require('request');

var base_api_url = "https://maps.googleapis.com/maps/api/geocode/json";

var geocodeAddress = (address) => {
    var address_encoded = encodeURIComponent(address);
    var request_url = base_api_url + `?address=${address_encoded}`;

    return new Promise((resolve, reject) =>{
        request( {
            url: request_url,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to api');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find address');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
        
    });
   
};

geocodeAddress('Whitstable').then((location) => {
    console.log(JSON.stringify(location, undefined,2));
}, (errorMessage) => {
    console.log(errorMessage);
});