var gulp = require('gulp'),
imagemin = require('gulp-imagemin');

gulp.task('imagemin', function() {
    return gulp.src('src/assets/img/**.*')
           .pipe(imagemin())
           .pipe(gulp.dest('src/assets/img/'))
});


gulp.task('default', ['imagemin']);