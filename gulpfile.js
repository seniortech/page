var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('watch', function () {
	gulp.watch('./*.scss', ['sass']);
});

gulp.task('sass', function(){
	gulp.src('./style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['sass', 'watch']);
