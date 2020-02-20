const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../cars/cars-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>Car Inventory<h2>`);
});

server.use('/api/cars', carsRouter);

module.exports = server;
