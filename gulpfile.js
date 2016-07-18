var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function (){
gulp.src('src/*.js')
.pipe(concat('all.min.js'))
.pipe(uglify())
.pipe(gulp.dest('gulped'))
});

gulp.task('css', function(){
  gulp.src('styles/*.less')
    .pipe(less())
    .pipe(autoprefix('last 2 version', 'ie 8', 'ie 9'))
    .pipe(gulp.dest('css'));
})

gulp.task('watch', function (){
  gulp.watch('src/*.js', ['default']);
})
