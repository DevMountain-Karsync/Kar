var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');
// var path = require('')

gulp.task('default', function (){
return gulp.src('./js/**/*.js')
.pipe(concat('all.min.js'))
// .pipe(uglify())
.pipe(gulp.dest('gulped'))
});

// gulp.task('less', function () {
//  return gulp.src('./less/**/*.less')
//    .pipe(less({
//      paths: [ path.join(__dirname, 'less', 'includes') ]
//    }))
//    .pipe(gulp.dest('./public/css'));
// });

gulp.task('css', function(){
  gulp.src('styles/*.less')
    .pipe(less())
    .pipe(autoprefix('last 2 version', 'ie 8', 'ie 9'))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('css'));
})

gulp.task('watch', function (){
  gulp.watch('styles/*.less', ['css']);
  gulp.watch('./js/**/*.js', ['default']);
});
