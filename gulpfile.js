 var gulp = require('gulp'),
     sass = require('gulp-sass'),
     uglify = require('gulp-uglify'),
     concat = require('gulp-concat'),
     cssnano = require('gulp-cssnano'),
     htmlmin = require('gulp-htmlmin');

// SASS
var css = [
    './src/css/style.css',
    './src/css/owl.carousel.css'
];

gulp.task('sass', function () {
  return gulp.src('./src/sass/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('css', ['sass'], function () {
  return gulp.src(css)
    .pipe(concat("style.min.css"))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css'));
});

// JS
var js = [
    './src/js/owl.carousel.js',
    './src/js/site.js'
];

gulp.task('js', function() {
  return gulp.src(js)
             .pipe(concat('scripts.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('./dist/js'));
});

// Html
gulp.task('html', function() {
  return gulp.src('./src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

// Watch
gulp.task('watch', function() {
	gulp.watch('./src/sass/**/*.scss', ['css']);
    gulp.watch('./src/js/*.js', ['js']);
    gulp.watch('./src/index.html', ['html']);
});

gulp.task('default', ['watch']);
