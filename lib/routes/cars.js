const { Router } = require('express');

const cars = [];

module.exports = Router()
  .post('/', (req, res) => {
    const {
      type,
      color,
      manufacturer,
      topSpeed
    } = req.body;

    const item = {
      type,
      color,
      manufacturer,
      topSpeed
    }

    cars.push(item);
    res.send(item);
  })

  .get('/', (req, res) => {
    res.send(cars);
  })

  .get('/:id', (req, res) => {
    res.send(cars[req.params.id]);
  });
