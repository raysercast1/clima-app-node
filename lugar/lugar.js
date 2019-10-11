const axios = require('axios');


const getLugarLatLng = async (direccion) => {
    
    const encodeUrl = encodeURI(direccion);
    console.log(encodeUrl)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'X-RapidAPI-Key': '348187501emshaede0bd1ee0ead2p11b99fjsnde2aa3ab4a80'}
    });

    const resp = await instance.get();
    
    if(resp.data.Results.length === 0){
        throw new Error('no hay resultados para esta busqueda');
    }
    
    const data = resp.data.Results[0];
    const nombreCiudad = data.name;
    const lat = data.lat;
    const lon = data.lon
    
    return {nombreCiudad, lat, lon}
}


module.exports = {getLugarLatLng}
