const carRoutes = require('./routes/cars');
const express = require('express');
const app = express();

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/cars', carRoutes);

module.exports = app;