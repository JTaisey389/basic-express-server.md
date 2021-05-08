'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('===Test for Validator', () => {
  it('should respond with a 500 on server not found', async () => {
    return mockRequest.get('/person').then(data => {
      expect(data.status).toBe(500);
    });
  });
})