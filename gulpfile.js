'use strict';
var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

require('web-component-tester').gulp.init(gulp);

gulp.task('build', function () {
	return gulp.src('src/travis-status.js')
		.pipe(babel())
		.pipe(uglify())
		.pipe(gulp.dest('dist/'));
});
