const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    description: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// const encodeUrl = encodeURI(argv.description);
// console.log(encodeUrl)
// 
// const instance = axios.create({
//   baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
//   headers: {'X-RapidAPI-Key': '348187501emshaede0bd1ee0ead2p11b99fjsnde2aa3ab4a80'}
// });
// 
// instance.get()
//         .then(resp => console.log(resp.data.Results[0]))
//         .catch(err => console.log('fatal!!!', err));
//         


// console.log(lugar.getLugarLatLng(argv.description).then(resp => console.log(resp))
//                                                   .catch(err => console.log(err)))

// console.log(clima.getClima(49.259998,-123.110001).then(resp => console.log(resp)).catch(console.log))

const getInfo = (city) => {

    return new Promise(async (resolve,reject) => {
        
        let answer = await lugar.getLugarLatLng(city)
        
        let temp = await clima.getClima(answer.lat,answer.lon)
        
        if (!temp){
            reject(`la ciudad ${city} no tiene parametros para calcular el clima`);
        } else {
            resolve(`El clima de la ciudad ${city} es ${temp}`)
        }
                       
    }) 
                                
//     El clima de xxx es de xx
//     
//     Sino se puede determinar el clima
//     No se pudo determinar el clima de xxx
}


console.log(getInfo(argv.description).then(resp => console.log(resp)).catch())
