const request = require('request');

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=38%20gordon%20road%20whitstable%20kent",
    json: true
}, (error, repsonse, body) => {
    console.log(JSON.stringify(body, undefined, 2));
})