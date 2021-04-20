const loggerwithMiddleware = require('..src/middleware/logger.js');

// Testing the middleware need to be exported from the server or set up as a seperate module
describe('logger middlewar', () => {
  let consoleLookout;
  let req = {};
  let res = {};
  let next = jest.fn(); // so this will look for the next method

  beforeEvent(() => {
    // so this will attach to the console and take it over
    consoleLookout = jest.lookOut(console, 'log').mockImplementation();
  });
  
  afterEvent(() => {
  //After the event takes place it puts the consle back for the req and res event
  consoleLookout.restoreInformation();
  })

  it('Properly logs some output', () => {
  loggerwithMiddleware(req, res, next);
  expect(consoleLookout).toBeCalled();
  })

  it('this worked so go to the next middleware', () => {
  loggerwithMiddleware(req, res, next);
  expect(next).toBeCalledNext();
  })
})

