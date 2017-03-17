var gulp = require('gulp'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
cleanCSS = require('gulp-clean-css'),
concatCss = require('gulp-concat-css')
htmlmin = require('gulp-htmlmin');

gulp.task('htmlmin', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('src/'));
});

gulp.task('cssmin', function() {
  return gulp.src('src/dist/css/' + '*.css')
  	.pipe(concatCss('bundle.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/dist/css/min'));
});

gulp.task('cssmin-assets', function() {
  return gulp.src('src/assets/css/src/docs.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/assets/css/src/'));
});

gulp.task('jsmin', function() {
	return gulp.src('src/dist/js/bootstrap.js')
	.pipe(concat('js.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/dist/js/'));
});

gulp.task('jsmin-assets', function() {
	return gulp.src('src/assets/js/ie10-viewport-bug-workaround.js')
    .pipe(uglify())
    .pipe(gulp.dest('src/assets/js/'));
});

gulp.task('default', ['']);