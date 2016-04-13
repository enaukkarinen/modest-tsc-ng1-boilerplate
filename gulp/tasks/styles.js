
var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var config = require('../config.js');

gulp.task('styles', function() {

    return gulp
        .src(config.styles.src)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dev.root + config.styles.dest));

});