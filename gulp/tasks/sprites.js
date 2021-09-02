//variable(s)
var {src, dest, series} = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

//create task(s)
const beginClean = function() {
    return del(['./app/temp/sprite', './app/assets/images/sprites']);
}

const sprites = function() {
    return src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(dest('./app/temp/sprite'));
}

const copySpriteGraphic = function() {
    return src('./app/temp/sprite/css/**/*.svg')
    .pipe(dest('./app/assets/images/sprites'));
}

const copySpriteCSS = function() {
    return src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(dest('./app/assets/styles/modules'));
}

const endClean = function() {
    return del('./app/temp/sprite');
}



//register task(s)
exports.iconsTask = series(beginClean, sprites, copySpriteGraphic, copySpriteCSS, endClean);
