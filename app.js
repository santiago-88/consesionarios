//express.
const express = require('express');
const app = express();
//rutas.
const routeAutos = require('./routes/autos');
const routeHome = require ('./routes/home');
const routeMarcas = require('./routes/marcas');
const routeSucursales = require('./routes/sucursales');


//servidor.
app.listen(3030,function(){console.log('Servidor levantado en el puerto 3030')})

//uso de modulos de rutas.
app.use('/',routeHome);
app.use('/autos',routeAutos);
app.use('/sucursales',routeSucursales);
app.use('/marcas',routeMarcas);