
var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var minifyHtml = require('gulp-minify-html');
var changed = require('gulp-changed');
var rename = require("gulp-rename");
var insert = require('gulp-insert');
var config = require('../config');

gulp.task('templates', function() {
    console.log('temp');

    gulp.src('app/index.html')
        .pipe(changed(config.dev.root))
        .pipe(gulp.dest(config.dev.root));

    return gulp
        .src(config.templates.html)
        .pipe(minifyHtml({ empty: true }))
        .pipe(templateCache(
            config.templates.file,
            config.templates.options
        ))
        .pipe(rename({ extname: '.ts' }))
        .pipe(insert.append('export {};'))
        .pipe(gulp.dest(config.templates.dest));

});