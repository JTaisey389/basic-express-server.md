'use strict';

function errorHandler(err, req, res, next) {
  res.status(500).send('something is wrong');
}

module.exports = errorHandler;