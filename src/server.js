'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const customClothesRoute = require('./routes/clothes');
const customFoodRoute = require('./routes/food');

const notFound = require('./error-handlers/404');
const errors = require('./error-handlers/500');

//global middleware for handling the parsing of a req.body
app.use(express.json());
app.use(logger);
app.use(customClothesRoute);
app.use(customFoodRoute);

// catch all route handles routes that are not found 
app.use('*', notFound );
// handles generic server errors
app.use(errors);

// module.exports is a global object in nodejs
// this allows us to add thing to it so that we can use these things
// in another file we would add stuff as an object or a method
// as an example we would require this server file in our index and use it there
module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`server up on http://localhost:${port}`);
    });
  }
}