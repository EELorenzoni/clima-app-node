const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('./config/yargs').argv;

lugar.getLugarLatLng(argv.direccion)
    .then((resp) => {
        var lugar = resp;
        clima.getClima(lugar.lat, lugar.lng)
            .then((resp) => {
                console.log(`la temperatura actual de ${lugar.direccion} es  ${resp} grados centígrados`);
            })
            .catch((err) => {
                console.error('error al obtener la temperatura', err);
            })
    })
    .catch((err) => {
        console.log(err);
    });

