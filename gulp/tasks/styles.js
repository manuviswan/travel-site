//variables
var {src, dest} = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');

//create task(s)
const styles = function (cb) {
    return src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function(error) {
        console.log(error.toString())
        this.emit('end');
    })
    .pipe(dest('./app/temp/styles'));
    cb();
}

//register task(s)
exports.stylesTask = styles;