
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var config = require('../config');
var minify = require('gulp-minify-css');

gulp.task('minify', ['minify-js', 'minify-css'], function() {
    return gulp.src('app/index.html')
        .pipe(gulp.dest(config.dist.root));
});

gulp.task('minify-js', [], function() {

    minifyJs(config.dev.root + config.scripts.dest + 'main.js');
    minifyJs(config.dev.root + config.scripts.dest + 'lib.js');

});

gulp.task('minify-css', [], function() {

    minifyCss(config.dev.root + config.styles.dest + 'main.css');
    minifyCss(config.dev.root + config.styles.dest + 'lib.css');

});

function minifyJs(inputFile) {
    gulp.src(inputFile)
        .pipe(uglify())
        .pipe(gulp.dest(config.dist.root + config.scripts.dest));
}

function minifyCss(inputFile) {
    gulp.src(inputFile)
        .pipe(minify())
        .pipe(gulp.dest(config.dist.root + config.styles.dest));
}