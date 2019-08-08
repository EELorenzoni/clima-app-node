const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f9e80e5dd06af69c28c2ce913dba8cc4`);
    // capturar error
    // if (resp.data.status === 'ZERO_RESULTS') {
    //     throw new Error(`No hay resultados para la ciudad ${direccion}`)
    // }
    console.log(resp);
    const respuesta = resp.data;
    const temperatura = respuesta.main.temp;
    return { temp: temperatura };
}

module.exports = { getClima }