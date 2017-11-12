const yargs = require('yargs');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather")

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) => {
            if (weatherResults) {
                console.log(`It's currently ${weatherResults.temperature}, but feels like ${weatherResults.apparentTemperature}`);
            } else {
                console.log(errorMessage);
            }
        });
    }
});