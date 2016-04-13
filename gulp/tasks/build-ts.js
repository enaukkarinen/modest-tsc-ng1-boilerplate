'use strict';
var config = require('../config');
var gulp = require('gulp');
var fs = require('fs');
var sourcemaps = require('gulp-sourcemaps');
var exec = require('child_process').exec;


function buildScript(project, watch, callback) {

    var outFile = config.dev.root + config.scripts.dest + 'main.js';
    
    /* Here's our typescript compiler command, which is to be executed in terminal
    *  project-parameter points to the directory in which our tsconfig.json can be found.
    */
    var cmd = 'node_modules\\.bin\\tsc -p ' + project + ' --outFile ' + outFile;
    
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

