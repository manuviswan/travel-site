//variables
var watchTask = require('./gulp/tasks/watch').watchTask,
    spritesTask = require('./gulp/tasks/sprites').spritesTask,
    iconsTask = require('./gulp/tasks/sprites').iconsTask;

//register task(s)
exports.default = watchTask;
exports.icons = iconsTask;



