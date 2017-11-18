const request = require('request');

var getWeather = (lat, lng, callback) => {
    var WEATHER_API_KEY = "17ac19bf773647f2bea1da381033321f";
    var weather_api_base_url = "https://api.darksky.net/forecast/";
    var request_url = `https://api.darksky.net/forecast/${WEATHER_API_KEY}/${lat},${lng}`;

    request( {
        url: request_url,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature    
            });
        } else {
            callback('Unable to fetch weather');
        } 
        
    });
}

module.exports.getWeather = getWeather;