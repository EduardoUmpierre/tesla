 var gulp = require('gulp'),
     sass = require('gulp-sass'),
     concat = require('gulp-concat'),
     cssnano = require('gulp-cssnano');

// SASS
var css = [
    './src/css/style.css'
];

gulp.task('sass', function () {
  return gulp.src('./src/sass/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['css']);
});

gulp.task('css', ['sass'], function () {
  return gulp.src(css)
    .pipe(concat("style.min.css"))
    // .pipe(cssnano())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['sass:watch']);
