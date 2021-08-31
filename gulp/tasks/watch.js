var styles = require('./styles').stylesTask;

var {src, series, watch} = require('gulp'),
    browserSync = require('browser-sync').create();


//create task(s)
const cssInject = function (cb) {
    return src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
    cb();
}

const reload = function (cb) {
    browserSync.reload();
    cb();
}

const watchTask = function (cb) {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    watch('./app/index.html', reload);
    watch('./app/assets/styles/styles.css', series(cssInject, styles));
    cb();
}

//register task(s)
exports.watchTask = watchTask;