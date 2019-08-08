const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let encodedUrl = encodeURI(argv.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl} argentina&key=AIzaSyCTxGMBhw6AkSETvAeG3M_1sOAjjPi1HB8`)
    .then(function (response) {
        // handle success
        
        let location = response.data.results[0];
        console.log('direccion :',location.formatted_address);
        console.log('lat :',location.geometry.location.lng);
        console.log('lng :',location.geometry.location.lat);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
