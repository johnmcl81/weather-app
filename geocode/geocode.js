const request = require('request');

var base_api_url = "https://maps.googleapis.com/maps/api/geocode/json";

var geocodeAddress = (address, callback) => {
    var address_encoded = encodeURIComponent(address);
    var request_url = base_api_url + `?address=${address_encoded}`;

    request( {
        url: request_url,
        json: true
    }, (error, repsonse, body) => {
        if (error) {
            callback('Unable to connect to api');
        }
        else if (body.status === 'ZERO RESULTS') {
            callback('Unable to find address');
        }
        else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });

};

module.exports = {
    geocodeAddress
}