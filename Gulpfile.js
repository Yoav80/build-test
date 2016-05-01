'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var shell = require('shelljs');
var q = require('q');

gulp.task('default', function() {
    console.log('Gulp is running');
});

gulp.task('postinstall' , [
        "restore-lib",
        "restore-typings",
        "compile-ts",
        "compile-scss",
        
    ], function () {

});

gulp.task('restore-lib',['restore-packages'], function() {

    console.log('coping bower components...');

    return gulp.src(['bower_components/angular/angular.js' ,
        'bower_components/jquery/jquery.js',
        'bower_components/system-css-plugin/css.js',
        'bower_components/system-text-plugin/text.js',
        'bower_components/systemjs/src/System.js'])
        .pipe(gulp.dest('lib/'));
});

gulp.task('restore-packages', function() {

    console.log('bower restore-packages...');
    
    shell.exec('node node_modules/bower/lib/bin/bower.js install');
});

gulp.task('restore-typings' , function () {
    shell.exec('node node_modules/tsd/build/cli install');

});

gulp.task('compile-scss' , function () {
    return gulp.src('./app/components/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/components/'));
});

gulp.task('compile-ts' , function () {
    return q.all(
         gulp.src('./app/components/*.ts')
            .pipe(ts({
                noImplicitAny: true,
            }))
            .pipe(gulp.dest('./app/components')),

         gulp.src('./app/common/*.ts')
            .pipe(ts({
                noImplicitAny: true,
            }))
            .pipe(gulp.dest('./app/common')),

        gulp.src('./app/directives/*.ts')
            .pipe(ts({
                noImplicitAny: true,
            }))
            .pipe(gulp.dest('./app/directives')),

        gulp.src('./app/services/*.ts')
            .pipe(ts({
                noImplicitAny: true,
            }))
            .pipe(gulp.dest('./app/services'))
    )
});