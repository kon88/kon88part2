var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('styles', function () {
   gulp.src('./sass/main.scss')
   .pipe(sass())
   .pipe(gulp.dest('./css'))
   .pipe(browserSync.reload({stream:true}));
});

gulp.task('serve', function () {
   
   browserSync.init({
      browser: ["chrome"],
      server: {
         baseDir: './'
      }
   });

   gulp.watch('./sass/*.scss', ['styles']);
   gulp.watch('./**/*.html').on('change', browserSync.reload);

});

gulp.task('default', ['styles', 'serve']);
