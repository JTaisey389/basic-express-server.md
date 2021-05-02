'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest'); //This is our mock request engine
const request = supertest(server); // start and initialize our server in memory for testing purposes

describe('---Web Server---', () => {
  it('should respond with a 404 on a bad route', async () => {
    const response = await request.get('/no-things-here');
    expect(response.status).toBe(404);
  })
  it('should respond with a 404 on a bad metod', async () => {
    const response = await request.get('/no-things-here');
    expect(response.status).toBe(404);
  })
})

// ====== CLOTHES TESTING =====

// describe('---Clothes Route---', () => {
//   it('should create a new peice of clothes in the db', async () => {
//     const response = await request.post('/clothes').send({ item: 'test '});
//     expect(response.status).toBe(201);
//     expect(response.body.record.item).toEqual('test');
//   });
//   it('should retieve a peice of clothes from the db', async () => {
//     const response = await request.post('/clothes/1');
//     expect(response.status).toBe(200);
//   });
//   it('should rupdate a peice of clothes in the db', async () => {
//     const response = await request.post('/clothes').send({ item: 'test '});
//     expect(response.status).toBe(201);
//     expect(response.body.record.item).toEqual('test');
//   });
//   it('should create a new peice of clothes in the db', async () => {
//     const response = await request.post('/clothes').send({ item: 'test '});
//     expect(response.status).toBe(201);
//     expect(response.body.record.item).toEqual('test');
//   });
//   it('should create a new peice of clothes in the db', async () => {
//     const response = await request.post('/clothes').send({ item: 'test '});
//     expect(response.status).toBe(201);
//     expect(response.body.record.item).toEqual('test');
//   });
// })