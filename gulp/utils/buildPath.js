var config = require('../config')

module.exports = function (path) {
    var dir;
    if(global.isProd) {
        dir = config.dist.root;
    } else {
        dir = config.dev.root;
    }

    if(path) {
        dir += path;
    }

    return dir;
}
