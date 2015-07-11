// Require modules
var path = require('path');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var webpack = require('webpack-stream');

var argv = require('minimist')(process.argv.slice(1));

var dirSrc = 'app/assets';
var dirBuild = 'build/';

// Sass task
gulp.task('sass', function() {
  gulp.src(path.join(dirSrc, 'styles/main.scss'))
    .pipe($.sass({style: 'expanded'})
    .on('error', $.sass.logError))
    .pipe($.if(argv.p || argv.production, $.minifyCss()))
    .pipe(gulp.dest(path.join(dirBuild, 'css')));
});

gulp.task('sass:watch', function() {
  gulp.watch(path.join(dirSrc, 'styles/**/*.scss'), ['sass']);
});

// JS Task
gulp.task('js', function() {
  gulp.src(path.join(dirSrc, 'scripts/app.jsx'))
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(path.join(dirBuild, 'scripts')));
});

gulp.task('js:watch', function() {
  gulp.watch(path.join(dirSrc, 'scripts/**/*.*'), ['js']);
});

// Trigger tasks
gulp.task('build', ['sass', 'js']);
gulp.task('watch', ['build', 'sass:watch', 'js:watch']);
gulp.task('default', ['build']);
