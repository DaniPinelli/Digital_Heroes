const express = require('express');
const app = express();
const path = require('path');
const heroes = require('./heroes.json');

app.listen (3000, () => console.log('Server running on 3000 port'));

app.get('/', (req, res) => {
    res.send("Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne yhueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan comoinspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.")
});
app.get('/heroes', (req, res) =>{
    let file = path.resolve('heroes.json')
    res.sendFile(file);
});
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, We`re in trouble!');
});
