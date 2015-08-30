'use strict';
import gulp from 'gulp';
import babel from 'gulp-babel';
import wct from 'web-component-tester';

wct.gulp.init(gulp);

gulp.task('build', () => {
	return gulp.src('src/travis-status.js')
		.pipe(babel())
		.pipe(gulp.dest('dist/'));
});
