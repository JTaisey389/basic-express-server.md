'use strict';

const express = require('express');
const app = express();

const cantFind = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const validateName = require('./middleware/validator.js');

//global middleware for handling the parsing of a req.body
app.use(express.json());

// GET http://localhost:3333?name=Jason&plant=lots
app.get('/hello/:person', (req, res) => {
  console.log('name:', req.params.person);
  res.send({ name: req.params.person});
})

app.get('/person', validateName, logger, (req, res) => {
  res.send({ name: req.query.name });
})

app.get('/hello', (req, res) => {
  console.log('hello world', req.params);
  res.send('hello world');
})

// http://localhost:3333?/hello/jason
app.get('/hello/:person', (req, res) => {
  console.log('name', req.params.person);
  res.send({ name: req.params.person });
})

// http://localhost:3333/hello/a/b
app.get('/hello/:person/:another', (req, res) => {
  console.log('params', req.params);
  res.send(req.params);
})

app.get('/cool', logger, square(5), (req, res) => {
  console.log(req.squared);
  res.json({ num: req.squared});
})

app.post('/test-post', (req, res) => {
  console.log(req.body);
  res.send('great, cool');
})

// function currying
function square(n) {
  return (req, res, next) => {
    if (typeof n !== 'number') {
      next('not a number!');
    } else {
      req.squared = n * n;
      next();
    }
  }
}

// catch all route handles routes that are not found 
app.use('*', cantFind );
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
      console.log(`server up: ${port}`);
    });
  }
}