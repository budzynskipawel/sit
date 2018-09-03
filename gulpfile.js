var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function() {
  return gulp.src('scss/style.scss').pipe(sourcemaps.init()).pipe(sass({
    outputStyle: 'compact',
    errLogToConsole: true // Wypisuje w konsoli bledy.
  })).pipe(sourcemaps.write()).pipe(autoprefixer()).pipe(gulp.dest('css')).pipe(reload({

    stream: true

  }));
});

/* Reload task */
gulp.task('bs-reload', function() {
  browserSync.reload();
});

/* Prepare Browser-sync for localhost */
gulp.task('browser-sync', function() {
  browserSync.init(['css/*.css', 'js/*.js'], {

    /*proxy: 'your_dev_site.url'*/
    /* For a static server you would use this: */
    server: {
      baseDir: './'
    }

  });
});
/*
gulp.task('autoprefixer', () =>
    gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);*/
gulp.task('watch', ['sass', 'browser-sync'], function() {
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch(['*.html'], ['bs-reload']);
})
