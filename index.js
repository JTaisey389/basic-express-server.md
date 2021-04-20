'use strict';

// 3rd party dependencies
const dotenv = require('dotenv');
// These are internal modules and files/modules that we make
const server = require('./src/server.js');

// application constants and config are about the middle
dotenv.config();
const PORT = process.env.PORT || 3000;

// File logic go towards the bottom
server.start(PORT);