var del = require('del');
var gulp = require('gulp');
var config = require('../config.js');
var gutil = require('gulp-util');


gulp.task('clean', function () {
    
    del([config.dev.root, config.dist.root]).then(function(paths) {
        gutil.log(gutil.colors.blue('deleted dev and dist folders.'));
    });
});