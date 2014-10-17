var gulp = require('gulp')
	, traceur = require('gulp-traceur')
	, changed = require('gulp-changed')
	, sourcemaps = require('gulp-sourcemaps')
	, rename = require("gulp-rename")
	, insert = require('gulp-insert')
  , rc = require('rc')
  , _ = require('lodash')
  , tracuerConfig = _.omit(rc('traceur'), ['config', '_'])
  , srcDir = 'src'
  , srcFiles = srcDir + '/*.es6.js'
  , destDir = 'dist'
  , traceurStackTraceMapInjection = 'require(\'traceur-source-maps\').install(require(\'traceur\'));'

gulp.task('traceur', function () {
  return gulp.src(srcFiles)
		.pipe(changed(destDir))
	  .pipe(insert.prepend(traceurStackTraceMapInjection))
    .pipe(sourcemaps.init())
    .pipe(traceur(tracuerConfig))
	  .pipe(rename(function (path) {
	  	// Remove .es6 extension
	  	path.basename = path.basename.split('.').slice(0,-1).join('.')
	  }))
	  .pipe(sourcemaps.write())
    .pipe(gulp.dest(destDir));
})

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(srcFiles, ['traceur']);
});


// Default Task
gulp.task('default', ['traceur', 'watch']);