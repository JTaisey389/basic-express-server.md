'use strict';

const validateName = (req, res, next) => {
  if ( req.query.name) {
    next();
  } else {
    next('Sorry, no name exists');
  }
}

module.exports = validateName;