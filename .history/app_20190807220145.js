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
        console.log(JSON.stringify(response.data, undefined, 2));

        let location = response.data[0];
        console.log('direccion :',location);
        console.log('lat :');
        console.log('lng :');
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
