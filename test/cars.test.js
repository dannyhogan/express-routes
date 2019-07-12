const request = require('supertest');
const app = require('../lib/app');

describe('route tests', () => {
  it('can create a car with POST', () => {
    return request(app)
      .post('/api/v1/cars')
      .send({ type: 'sportscar', color: 'red', manufacturer: 'Ferrari', topSpeed: 180 })
      .then(res => {
        expect(res.body).toEqual({ 
          type: 'sportscar',
          color: 'red',
          manufacturer: 'Ferrari',
          topSpeed: 180 
        });
      });
  });

  it('can get an array of cars using GET', () => {
    return request(app)
      .get('/api/v1/cars')
      .then(res => {
        expect(res.body).toEqual([{ 
          type: 'sportscar',
          color: 'red',
          manufacturer: 'Ferrari',
          topSpeed: 180 
        }])
      });
  });

  it('can get a car by index in array', () => {
    return request(app)
      .get('/api/v1/cars/0')
      .then(res => {
        expect(res.body).toEqual({ 
          type: 'sportscar',
          color: 'red',
          manufacturer: 'Ferrari',
          topSpeed: 180 
        })
      });
  });

});
