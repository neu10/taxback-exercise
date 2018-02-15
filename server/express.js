'use strict';

const express   =   require('express'),
      path      =   require('path'),
      cors      =   require('cors');

module.exports = function(app) {

  app.use('/', express.static(path.normalize(__dirname + '/../dist')));

  const bodyParser     =   require('body-parser'),
        cookieParser   =   require('cookie-parser'),
        methodOverride =   require('method-override');

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride('X-HTTP-Method-Override'));
  app.use(cookieParser());

  require('./routes/api')(app);
};