
var gulp 			= require('gulp');
var templateCache 	= require('gulp-angular-templatecache');
var minifyHtml		= require('gulp-minify-html');
var changed         = require('gulp-changed');
var buildPath       = require('../utils/buildPath');
var rename          = require("gulp-rename");
var config          = require('../config');

gulp.task('templates', function () { 
        gulp.src('app/index.html')
        .pipe(changed(buildPath()))
        .pipe(gulp.dest(buildPath()));
    
    return gulp
    .src(config.templates.html)
    .pipe(minifyHtml({empty: true}))
    .pipe(templateCache(
    	config.templates.file, 
    	config.templates.options
	))
    .pipe(rename({ extname: '.ts'}))
    .pipe(gulp.dest(config.templates.dest));
    
});