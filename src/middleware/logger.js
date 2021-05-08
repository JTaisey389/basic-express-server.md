'use strict';

const Logger = (req, res, next) => {
  console.log('Request Data', req.method, req.path);
  next();
}

module.exports = Logger;