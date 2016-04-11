'use strict';

module.exports = {
    'scripts': {
        'src' : [
            'app/main.ts',
        ], 
        'dest': 'js/'
    },
    'templates': {
      'html': './app/**/*.html',
      'file': 'templates.*',
      'dest': './app/',
      'options': {
        module: 'app.templates',
        standalone: true      }
    },
    'dev': {
        'root'  : './dev/'
    },
    'dist': {
        'root'  : './dist/',
    }
};
