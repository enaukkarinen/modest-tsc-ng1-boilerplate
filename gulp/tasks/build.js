'use strict';
var config = require('../config');
var gulp = require('gulp');
var buildPath = require('../utils/buildPath');
var uglify = require('gulp-uglify');
var fs = require('fs');
var sourcemaps = require('gulp-sourcemaps');
var exec = require('child_process').exec;


function buildScript(project, watch, callback) {

    var outFile = buildPath(config.scripts.dest) + 'main.js';
    var cmd = 'node_modules\\.bin\\tsc -p ' + project + ' --outFile ' + outFile;
    if (watch) {
       cmd = cmd + ' -w';
    }
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
            //handleErrors.showError('TypeScript compilation failed.');
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

gulp.task('build-ts', [], function (callback) {
    buildScript('app', false, callback);
});

function minifyScript(project) {
    var inputFile = buildPath(config.scripts.dest) + 'main.js';
    return gulp.src(inputFile)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dist.root + config.scripts.dest));
}

gulp.task('minify-ts', [], function () {
   return minifyScript('app');
});
