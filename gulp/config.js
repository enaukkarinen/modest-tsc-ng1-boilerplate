'use strict';

module.exports = {
    'scripts': {
        'src': [
            'app/main.ts',
        ],
        'dest': 'js/',
        'vendor': [
            './node_modules/angular/angular.js',
            './node_modules/angular-route/angular-route.js',
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './node_modules/almond/almond.js'// "It's a good idea to bundle almond.js last, to avoid third party libraries trying to expose themselves as amd modules"
        ]
    },
    'templates': {
        'html': './app/**/*.html',
        'file': 'templates.*',
        'dest': './app/',
        'options': {
            'module': 'app.templates',
            'standalone': true
        }
    },
    'styles': {
        'watch': './app/styles/**/*.less',
        'src': ['./app/styles/main.less'],
        'dest': 'css/',
        'vendor': [
            './node_modules/bootstrap/dist/css/bootstrap.css'
        ]
    },
    'dev': {
        'root': './dev/'
    },
    'dist': {
        'root': './dist/',
    }
};
