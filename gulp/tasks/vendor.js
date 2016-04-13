
var gulp = require('gulp');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
var config = require('../config.js');

gulp.task('vendor', ['vendor-scripts', 'vendor-styles']);

gulp.task('vendor-scripts', function() {

    gutil.log(gutil.colors.blue('Bundling the following 3rd party scripts:'));
    config.scripts.vendor.forEach(function(path) { gutil.log(gutil.colors.blue(path)); });

    return gulp.src(config.scripts.vendor)
        .pipe(sourcemaps.init())
        .pipe(concat({ path: 'lib.js' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dev.root + config.scripts.dest));


});

gulp.task('vendor-styles', function() {

    gutil.log(gutil.colors.blue('Bundling the following 3rd party stylesheets:'));
    config.styles.vendor.forEach(function(path) { gutil.log(gutil.colors.blue(path)); });


    return gulp.src(config.styles.vendor)
        .pipe(sourcemaps.init())
        .pipe(concat({ path: 'lib.css' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dev.root + config.styles.dest));

});
