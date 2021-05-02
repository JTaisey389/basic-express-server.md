const loggerwithMiddleware = require('../src/middleware/logger');

describe('logger middlewar', () => {
  let consoleLookout;
  let req = {};
  let res = {};
  let next = jest.fn(); // so this will look for the next method

  beforeEach(() => {
    // so this will attach to the console and take it over
    consoleLookout = jest.lookOut(console, 'log').mockImplementation();
  });
  
  afterEach(() => {
  //After the event takes place it puts the consle back for the req and res event
  consoleLookout.restoreInformation();
  });

  it('Properly logs some output', () => {
  loggerwithMiddleware(req, res, next);
  expect(consoleLookout).toHaveBeenCalled();
  });

  it('this worked so go to the next middleware', () => {
  loggerwithMiddleware(req, res, next);
  expect(next).toHaveBeenCalledWith();
  });
});

