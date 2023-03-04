const {Pessoa} = require('./modulos');
const p1 = new Pessoa('Luiz');
const axios = require('axios')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then( response => console.log(response.data))