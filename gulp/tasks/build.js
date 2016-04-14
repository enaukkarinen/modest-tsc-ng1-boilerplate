
var gulp   = require('gulp');
var config = require('../config');

gulp.task('dev', ['watch', 'styles', 'vendor']);
gulp.task('build', ['build-ts', 'styles', 'vendor']);
gulp.task('watch', ['watch-ts', 'watch-html', 'watch-less']);

gulp.task('watch-html', function () {
    gulp.watch(config.templates.html, ['templates']);
});

gulp.task('watch-less', function () {
    gulp.watch(config.styles.watch, ['styles']);
});