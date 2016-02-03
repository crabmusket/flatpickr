var gulp = require('gulp'),
  less = require('gulp-less'),
	uglify = require('gulp-uglify'),
	cssmin = require('gulp-cssmin'),
	rename = require("gulp-rename");


gulp.task('less', function () {
  return gulp.src('src/flatpickr.less')
    .pipe(less())
    .pipe(cssmin()).on('error', errorHandler)
    .pipe(rename({        suffix: '.min'   }))
    .pipe(gulp.dest('dist'));
});

gulp.task('compress-js', function() {
  return gulp.src('src/*.js')
    .pipe(uglify()).on('error', errorHandler)
    .pipe(rename({        suffix: '.min'   }))
    .pipe(gulp.dest('dist'));
});



// Handle the error
function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('default', ['compress-js', 'less' ]);