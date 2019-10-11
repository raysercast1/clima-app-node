const axios = require('axios');


const getClima = async (lat, lon) => {
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ea42864eb0debcabf06f098a448667c2&units=metric`)
    
    return resp.data.main.temp;
}













module.exports = {getClima}
