const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl} argentina&key=AIzaSyCTxGMBhw6AkSETvAeG3M_1sOAjjPi1HB8`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }
    // .then(function (response) {
    //         // handle success

    //         let location = response.data.results[0];
    //         console.log('direccion :', location.formatted_address);
    //         console.log('lat :', location.geometry.location.lat);
    //         console.log('lng :', location.geometry.location.lng);
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .finally(function () {
    //         // always executed
    //     });
    let location = resp.data.results[0];
    let coors = location.geometry.location;
    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng,
    }
}
