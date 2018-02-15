'use strict';
const express = require('express'),
      app     = express(),
      port    = process.env.PORT || 4000;


const http = require('http');
require('./server/express')(app);

app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));

exports = module.exports = app;

