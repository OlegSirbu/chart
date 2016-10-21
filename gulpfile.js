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
var runSequence = require('run-sequence');


var src = {
        js: {
            custom: [
                './src/*.js'
            ],
            libs:[
               "./bower_components/jquery/dist/jquery.min.js",
               "./bower_components/jquery-ui/jquery-ui.min.js",
               "./bower_components/popSelect/dist/jquery.popSelect.js",
               "./bower_components/bootstrap/dist/js/bootstrap.min.js",

                "./node_modules/amcharts/dist/amcharts/amcharts.js",
                "./node_modules/amcharts/dist/amcharts/serial.js",
                "./node_modules/canvasjs/dist/canvasjs.2.js",
                "./node_modules/canvasjs/dist/canvasjs.3.js",
                "./node_modules/canvasjs/dist/jquery.canvasjs.js"
            ]
        },
        css: {
            custom: [
                './src/*.css'
            ],
            libs: [
                "./bower_components/bootstrap/dist/css/bootstrap.min.css",
                "./bower_components/chartist/dist/chartist.css",
                "./bower_components/popSelect/dist/jquery.popSelect.css"
            ]
        },
        img: {
            fonts: [
                "./bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot",
                "./bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
                "./bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff"
            ],
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
    return gulp.src(src.css.libs.concat(src.css.custom))
        .pipe(less())
        .pipe(concat('style.css'))
        // .pipe(minifyCSS())
        .pipe(gulp.dest(path.join(dist+'/css')));
});

gulp.task('libs-js',function(){
   return gulp.src(src.js.libs)
      // .pipe(uglify())
      .pipe(concat('libs.js'))
      .pipe(gulp.dest(path.join(dist,'/js')));
});

gulp.task('js', function () {
    return gulp.src(src.js.custom)
        .pipe(concat('/js/all.js'))
        .pipe(gulp.dest(dist));
});



gulp.task('fonts', function () {
    return gulp.src(src.img.fonts)
        .pipe(gulp.dest(dist + '/fonts'));
});

gulp.task('img', function () {
    return gulp.src(src.img.custom)
        .pipe(gulp.dest(dist + '/fonts'));
});

gulp.task('watch', function () {
    return gulp.watch(
        [
            './src/*.js',
            './src/*.html'
        ],
        ['js']);
});

gulp.task('cl', function () {
    return del(['./dist/**/**/*']);
});

gulp.task('watch', ['default'], function () {
    return gulp.watch(
        [
            './src/*.js',
            './src/*.html',
            './src/*.css'
        ],
        ['default']);
});

gulp.task('default', function () {
    runSequence('cl',
        ['fonts', 'img','libs-js', 'js', 'css'], function () {
            var source = gulp.src(mainBowerFiles()
                .concat(['./dist/**/*.js'])
                .concat(['./dist/**/*.css']), {read: false}, {relative: true});

            return gulp.src(src.html.main)
                .pipe(inject(source))
                .pipe(gulp.dest(dist));
    });
});