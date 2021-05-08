'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest'); //This is our mock request engine
const illusionRequest = supertest(server); // start and initialize our server in memory for testing purposes

describe('***MY WEB SERVER***', () => {
  it('should respond with a 404 on not found', async () => {
    return illusionRequest.get('/no-thing').then(data => {
      expect(data.status).toBe(404);
    });
  });

  it('should respond properly to a GET: /hello', async () => {
    const response = await illusionRequest.get('/hello');
    expect(response.status).toBe(200);
    expect(response.text).toBe('hello world');
  });
});