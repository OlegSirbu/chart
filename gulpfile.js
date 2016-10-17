var gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    mainBowerFiles = require('main-bower-files'),
    uglify = require('gulp-uglify'),
    inject = require('gulp-inject'),
    del = require('del'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    less = require('gulp-less-sourcemap');

var src = {
        js: {
            custom: [
                './src/*.js'
            ],
            libs:[
               "./bower_components/jquery/dist/jquery.min.js",
               "./bower_components/jquery-ui/jquery-ui.min.js",
               "./bower_components/chartist/dist/chartist.js",
               "./bower_components/popSelect/dist/jquery.popSelect.js",
               "./bower_components/bootstrap/dist/js/bootstrap.min.js"
            ]
        },
        css: {
            custom: [
                './css/*.css'
            ],
            libs: [
                "./bower_components/bootstrap/dist/css/bootstrap.min.css",
                "./bower_components/chartist/dist/chartist.css",
                "./bower_components/popSelect/dist/jquery.popSelect.css"
            ]
        },
        img: {
            custom: [
                './img/*.jpg'
            ]
        },
        html: {
            main: './src/index.html'
        }
    },
    dist = './dist';

gulp.task('css', function () {
    return gulp.src(src.css.libs)
        .pipe(less())
        .pipe(concat('style.css'))
        // .pipe(minifyCSS())
        .pipe(gulp.dest(path.join(dist+'/css')));
});

gulp.task('libs-js',function(){
   return gulp.src(src.js.libs)
      .pipe(uglify())
      .pipe(gulp.dest(path.join(dist,'/js/libs')));
});

gulp.task('js', function () {
    return gulp.src(src.js.custom)
        .pipe(concat('/js/all.js'))
        .pipe(gulp.dest(dist));
});

gulp.task('img', function () {
    return gulp.src(src.img.custom)
        .pipe(gulp.dest(dist + '/img'));
});

gulp.task('watch', ['default'], function () {
    return gulp.watch(
        [
            '.src/**/*.js',
            '.src/**/*.html'
        ],
        ['default']);
});

gulp.task('cl', function () {
    return del(['./dist/**/**/*']);
});

gulp.task('default', ['cl', 'img','libs-js', 'js', 'css'], function () {
    var source = gulp.src(mainBowerFiles()
        .concat(['./dist/**/*.js'])
        .concat(['./dist/**/*.css']), {read: false}, {relative: true});

    return gulp.src(src.html.main)
        .pipe(inject(source))
        .pipe(gulp.dest(dist));
});