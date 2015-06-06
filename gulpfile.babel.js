'use strict';
import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import wct from 'web-component-tester';

wct.gulp.init(gulp);

gulp.task('build', () => {
	return gulp.src('src/travis-status.js')
		.pipe(babel())
		.pipe(uglify())
		.pipe(gulp.dest('dist/'));
});
