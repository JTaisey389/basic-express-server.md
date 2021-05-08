'use strict';
const  logger  = require('../src/middleware/logger');

// Testing the middleware need to be exported from the server or set up as a seperate module
describe('logger middlewar', () => {
  let consoleLookout;
  let req = {};
  let res = {};
  let next = jest.fn(); // so this will look for the next method

  beforeEach(() => {
    // so this will attach to the console and take it over
    consoleLookout = jest.spyOn(console, 'log').mockImplementation();
  });
  
  afterEach(() => {
  //After the event takes place it puts the consle back for the req and res event
  consoleLookout.mockRestore();
  })

  it('Properly logs some output', () => {
  logger(req, res, next);
  expect(consoleLookout).toHaveBeenCalled();
  })

  it('this worked so go to the next middleware', () => {
  logger(req, res, next);
  expect(next).toHaveBeenCalledWith();
  })
})
