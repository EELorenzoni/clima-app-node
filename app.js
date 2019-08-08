const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('./config/yargs').argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then((resp) => {
//         var lugar = resp;
//         clima.getClima(lugar.lat, lugar.lng)
//             .then((resp) => {
//                 console.log(`la temperatura actual de ${lugar.direccion} es  ${resp.temp} grados centígrados`);
//             })
//             .catch((err) => {
//                 console.error('error al obtener la temperatura', err);
//             })
//     })
//     .catch((err) => {
//         console.log(err);
//     });

let getInfo = async (direccion) => {
    try {
        const coors = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coors.lat, coors.lng);

        return `la temperatura actual de ${coors.direccion} es  ${temp} grados centígrados`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error))