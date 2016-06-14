/// <reference path="typings/index.d.ts"/>

angular.module('app', [
    "ngRoute",
    "app.templates" 
]);

require('templates');
var app = require('app');
app.start();

