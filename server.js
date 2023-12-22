// Con CommonJS:
// const express = require('express');
// const routerProducts = require('./routers/products');

// Con ES Modules
import express from 'express';
import routerProducts from './routers/products.js';
// import ProductModelMongoDB from './models/products-mongodb.js';
import config from './config.js';

// await ProductModelMongoDB.connectDB();
// ProductModelMongoDB.connectDB();

const PORT = config.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public', { extensions: ['html', 'htm'] }));

app.use('/api/products', routerProducts);

const server = app.listen(PORT, () => console.log(`Servidor Express escuchando en el puerto ${PORT}`));
server.on('error', error => console.log(`Se produjo un error al intentar iniciar el servidor Express: ${error.message}`));
