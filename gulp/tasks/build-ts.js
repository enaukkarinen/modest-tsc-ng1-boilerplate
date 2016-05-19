'use strict';
var config = require('../config');
var gulp = require('gulp');
var fs = require('fs');
var sourcemaps = require('gulp-sourcemaps');
var exec = require('child_process').exec;
var path = require('path');

function buildScript(project, watch, callback) {

    var outFile = config.dev.root + config.scripts.dest + 'main.js';

    /*
    * Here's our typescript compiler command.
    * p-parameter points to the project folder with the tsconfig.json.
    * outFile points to the output file for the compiled bundle.
    */
    var cmd = path.join('node_modules', '.bin', 'tsc') + ' -p ' + project + ' --outFile ' + outFile;

    if (watch)
       cmd = cmd + ' -w';

    var child = exec(cmd);
    child.stdout.pipe(process.stdout);
    child.stdout.on('data', function(chunk) {
        var msgAsString = '';
        for (var name in chunk) {
            if (chunk.hasOwnProperty(name)) {
               msgAsString += chunk[name];
            }
        }
        if (msgAsString.indexOf('error') > -1) {
            console.log('TypeScript compilation failed.');
        }
    });
    child.stderr.pipe(process.stderr);
    child.on('exit', function(code) {
        if (callback) {
            if (code > 0) {
                callback('Typescript compilation failed! (Exit code: ' + code + ')');
            } else {
                callback();
            }
        }
    });
}

gulp.task('build-ts', ['templates'], function (callback) {
    buildScript('app', false, callback);
});

gulp.task('watch-ts', ['templates'], function (callback) {
    buildScript('app', true, callback);
});

