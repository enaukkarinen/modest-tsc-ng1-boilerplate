
var gulp          = require('gulp');
var concat        = require('gulp-concat');
var gutil         = require('gulp-util');
var uglify        = require('gulp-uglify');
var rename        = require('gulp-rename');
var sourcemaps    = require('gulp-sourcemaps');
var minifyCss     = require('gulp-minify-css');
var config        = require('../config.js');
var buildPath     = require('../utils/buildPath');

// builds either minified or non-minified dependency bundles to build/.
gulp.task('vendor', ['vendor-js', 'vendor-css']);

gulp.task('vendor-js', function () {
  
  gutil.log(gutil.colors.blue('Bundling the following 3rd party js files:'));
  config.scripts.vendor.forEach(function(path) { gutil.log(gutil.colors.blue(path)); });
  
  return gulp.src(config.scripts.vendor)
  .pipe(sourcemaps.init())
  .pipe(concat({path: 'lib.js'}))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(buildPath(config.scripts.dest)));
  /*
  return gulp.src(config.scripts.vendor)
  .pipe(gulpif(!argv.min, sourcemaps.init()))
  .pipe(concat({ path:'lib.js'}))
  .pipe(gulpif(argv.min, uglify({mangle: false})))
  //.pipe(gulpif(argv.min, rename({suffix:'.min'})))
  .pipe(gulpif(!argv.min, sourcemaps.write('.'))) 
  .pipe(gulp.dest(config.build));
  */
});

gulp.task('vendor-css', function () {

  if(argv.verbose) {
    gutil.log(gutil.colors.blue('Bundling the following 3rd css files:'));
    config.styles.vendor.forEach(function(path) { gutil.log(gutil.colors.blue(path)); });
  }
  
  return gulp.src(config.styles.vendor)
  .pipe(gulpif(!argv.min, sourcemaps.init()))
  .pipe(minifyCss({compatibility: 'ie8'}))
  .pipe(concat({ path:'lib.css'}))
  .pipe(gulpif(!argv.min, sourcemaps.write('.'))) 
  .pipe(gulp.dest(config.build));
});
