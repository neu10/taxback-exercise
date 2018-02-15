'use strict';
const path  = require('path');

module.exports = function(app) {
  
  require('./transactions')(app);
  // If not routes in express match, redirect it to angular
  require('./loadAngular')(app);

}
