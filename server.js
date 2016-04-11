  /*jshint node:true*/
'use strict';

var logger = require('morgan');
var express = require('express');
var http    = require('http');
var gutil   = require('gulp-util');


// use SET NODE_ENV=development/build in console.
var port = process.env.PORT || 7203;
var environment = process.env.NODE_ENV;

var app = express();

// log all requests to the console
app.use(logger('dev'));
app.use(express.static('./dev/'));

console.log('About to crank up node!');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

// Serve index.html for all routes to leave routing up to Angular
app.all('/*', function(req, res) {
  res.sendFile('index.html', {root:'dev'});
});

// Start webserver if not already running
var s = http.createServer(app);
s.on('error', function(err){
if(err.code === 'EADDRINUSE'){
  gutil.log('server is already started at port ' + port);
}
else {
  throw err;
}
});

s.listen(port);
